import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeviceMetadata
/** 
 * Characteristics of the user's device.
**/
export class DeviceMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpuMake" })
  cpuMake?: string;

  @Metadata({ data: "json, name=cpuModel" })
  cpuModel?: string;

  @Metadata({ data: "json, name=deviceClass" })
  deviceClass?: string;

  @Metadata({ data: "json, name=glEsVersion" })
  glEsVersion?: number;

  @Metadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @Metadata({ data: "json, name=nativePlatform" })
  nativePlatform?: string;

  @Metadata({ data: "json, name=productName" })
  productName?: string;

  @Metadata({ data: "json, name=ramMb" })
  ramMb?: number;

  @Metadata({ data: "json, name=screenDensityDpi" })
  screenDensityDpi?: number;

  @Metadata({ data: "json, name=screenHeightPx" })
  screenHeightPx?: number;

  @Metadata({ data: "json, name=screenWidthPx" })
  screenWidthPx?: number;
}
