import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestOpenIdAuthInfoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=is_global_available" })
  isGlobalAvailable?: boolean;
}


export class RequestOpenIdAuthInfoRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RequestOpenIdAuthInfoQueryParams;
}


export class RequestOpenIdAuthInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  openIdAuthInfo?: shared.OpenIdAuthInfo;

  @Metadata()
  statusCode: number;
}
