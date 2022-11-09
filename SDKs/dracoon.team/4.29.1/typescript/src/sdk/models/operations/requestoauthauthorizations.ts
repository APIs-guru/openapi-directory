import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestOAuthAuthorizationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class RequestOAuthAuthorizationsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestOAuthAuthorizationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RequestOAuthAuthorizationsQueryParams;

  @Metadata()
  headers: RequestOAuthAuthorizationsHeaders;
}


export class RequestOAuthAuthorizationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata({ elemType: shared.OAuthAuthorization })
  oAuthAuthorizations?: shared.OAuthAuthorization[];

  @Metadata()
  statusCode: number;
}
