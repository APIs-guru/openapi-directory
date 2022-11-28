import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeviceMetadata
/** 
 * Characteristics of the user's device.
**/
export class DeviceMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpuMake" })
  cpuMake?: string;

  @SpeakeasyMetadata({ data: "json, name=cpuModel" })
  cpuModel?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceClass" })
  deviceClass?: string;

  @SpeakeasyMetadata({ data: "json, name=glEsVersion" })
  glEsVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @SpeakeasyMetadata({ data: "json, name=nativePlatform" })
  nativePlatform?: string;

  @SpeakeasyMetadata({ data: "json, name=productName" })
  productName?: string;

  @SpeakeasyMetadata({ data: "json, name=ramMb" })
  ramMb?: number;

  @SpeakeasyMetadata({ data: "json, name=screenDensityDpi" })
  screenDensityDpi?: number;

  @SpeakeasyMetadata({ data: "json, name=screenHeightPx" })
  screenHeightPx?: number;

  @SpeakeasyMetadata({ data: "json, name=screenWidthPx" })
  screenWidthPx?: number;
}
