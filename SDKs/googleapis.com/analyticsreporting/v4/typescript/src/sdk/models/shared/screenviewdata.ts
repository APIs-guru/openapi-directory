import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ScreenviewData extends SpeakeasyBase {
  @Metadata({ data: "json, name=appName" })
  appName?: string;

  @Metadata({ data: "json, name=mobileDeviceBranding" })
  mobileDeviceBranding?: string;

  @Metadata({ data: "json, name=mobileDeviceModel" })
  mobileDeviceModel?: string;

  @Metadata({ data: "json, name=screenName" })
  screenName?: string;
}
