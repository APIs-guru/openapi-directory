import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DetectDeviceDetectPostSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyHeader: shared.SchemeApiKeyHeader;
}


export class DetectDeviceDetectPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DeviceFeatures;

  @SpeakeasyMetadata()
  security: DetectDeviceDetectPostSecurity;
}


export class DetectDeviceDetectPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deviceInfo?: shared.DeviceInfo;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
