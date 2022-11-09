import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestOAuthApprovalsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class RequestOAuthApprovalsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestOAuthApprovalsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RequestOAuthApprovalsQueryParams;

  @Metadata()
  headers: RequestOAuthApprovalsHeaders;
}


export class RequestOAuthApprovalsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata({ elemType: shared.OAuthApproval })
  oAuthApprovals?: shared.OAuthApproval[];

  @Metadata()
  statusCode: number;
}
