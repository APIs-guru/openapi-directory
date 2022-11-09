import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AuthorizeDeviceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class AuthorizeDeviceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class AuthorizeDeviceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AuthorizeDeviceQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeviceAuthorizationCode;

  @Metadata()
  security: AuthorizeDeviceSecurity;
}


export class AuthorizeDeviceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
