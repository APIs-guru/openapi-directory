import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DetectDeviceDetectPostSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyHeader: shared.SchemeApiKeyHeader;
}


export class DetectDeviceDetectPostRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeviceFeatures;

  @Metadata()
  security: DetectDeviceDetectPostSecurity;
}


export class DetectDeviceDetectPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deviceInfo?: shared.DeviceInfo;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
