import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceRegistrationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=CacheTTL" })
  cacheTtl?: string;

  @Metadata({ data: "json, name=DeviceRegistration" })
  deviceRegistration?: string;
}
