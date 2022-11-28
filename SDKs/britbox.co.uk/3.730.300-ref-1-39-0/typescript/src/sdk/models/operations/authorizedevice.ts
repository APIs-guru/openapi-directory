import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AuthorizeDeviceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class AuthorizeDeviceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class AuthorizeDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AuthorizeDeviceQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DeviceAuthorizationCode;

  @SpeakeasyMetadata()
  security: AuthorizeDeviceSecurity;
}


export class AuthorizeDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
