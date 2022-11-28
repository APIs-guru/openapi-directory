import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestOpenIdAuthInfoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_global_available" })
  isGlobalAvailable?: boolean;
}


export class RequestOpenIdAuthInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RequestOpenIdAuthInfoQueryParams;
}


export class RequestOpenIdAuthInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  openIdAuthInfo?: shared.OpenIdAuthInfo;

  @SpeakeasyMetadata()
  statusCode: number;
}
