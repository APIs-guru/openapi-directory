import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GenerateDeviceAuthorizationCodeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GenerateDeviceAuthorizationCodeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GenerateDeviceAuthorizationCodeQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeviceRegistrationRequest;
}


export class GenerateDeviceAuthorizationCodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deviceAuthorizationCode?: shared.DeviceAuthorizationCode;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
