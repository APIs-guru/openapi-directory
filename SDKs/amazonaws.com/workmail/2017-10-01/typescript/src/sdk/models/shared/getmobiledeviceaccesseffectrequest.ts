import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMobileDeviceAccessEffectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceModel" })
  deviceModel?: string;

  @Metadata({ data: "json, name=DeviceOperatingSystem" })
  deviceOperatingSystem?: string;

  @Metadata({ data: "json, name=DeviceType" })
  deviceType?: string;

  @Metadata({ data: "json, name=DeviceUserAgent" })
  deviceUserAgent?: string;

  @Metadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
