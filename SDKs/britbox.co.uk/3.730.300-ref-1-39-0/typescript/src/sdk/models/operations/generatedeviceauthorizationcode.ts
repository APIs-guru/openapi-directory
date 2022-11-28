import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GenerateDeviceAuthorizationCodeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GenerateDeviceAuthorizationCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GenerateDeviceAuthorizationCodeQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DeviceRegistrationRequest;
}


export class GenerateDeviceAuthorizationCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deviceAuthorizationCode?: shared.DeviceAuthorizationCode;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
