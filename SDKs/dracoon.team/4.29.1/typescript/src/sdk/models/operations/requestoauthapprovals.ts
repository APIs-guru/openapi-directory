import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestOAuthApprovalsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class RequestOAuthApprovalsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestOAuthApprovalsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RequestOAuthApprovalsQueryParams;

  @SpeakeasyMetadata()
  headers: RequestOAuthApprovalsHeaders;
}


export class RequestOAuthApprovalsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata({ elemType: shared.OAuthApproval })
  oAuthApprovals?: shared.OAuthApproval[];

  @SpeakeasyMetadata()
  statusCode: number;
}
