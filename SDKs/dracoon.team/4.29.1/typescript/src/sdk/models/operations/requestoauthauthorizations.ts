import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestOAuthAuthorizationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class RequestOAuthAuthorizationsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestOAuthAuthorizationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RequestOAuthAuthorizationsQueryParams;

  @SpeakeasyMetadata()
  headers: RequestOAuthAuthorizationsHeaders;
}


export class RequestOAuthAuthorizationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata({ elemType: shared.OAuthAuthorization })
  oAuthAuthorizations?: shared.OAuthAuthorization[];

  @SpeakeasyMetadata()
  statusCode: number;
}
