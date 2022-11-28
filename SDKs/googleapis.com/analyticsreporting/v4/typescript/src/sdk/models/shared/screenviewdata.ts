import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScreenviewData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appName" })
  appName?: string;

  @SpeakeasyMetadata({ data: "json, name=mobileDeviceBranding" })
  mobileDeviceBranding?: string;

  @SpeakeasyMetadata({ data: "json, name=mobileDeviceModel" })
  mobileDeviceModel?: string;

  @SpeakeasyMetadata({ data: "json, name=screenName" })
  screenName?: string;
}
