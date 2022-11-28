import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMobileDeviceAccessEffectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceModel" })
  deviceModel?: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceOperatingSystem" })
  deviceOperatingSystem?: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceType" })
  deviceType?: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceUserAgent" })
  deviceUserAgent?: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
