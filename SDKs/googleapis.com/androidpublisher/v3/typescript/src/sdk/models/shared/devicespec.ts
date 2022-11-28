import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeviceSpec
/** 
 * The device spec used to generate a system APK.
**/
export class DeviceSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=screenDensity" })
  screenDensity?: number;

  @SpeakeasyMetadata({ data: "json, name=supportedAbis" })
  supportedAbis?: string[];

  @SpeakeasyMetadata({ data: "json, name=supportedLocales" })
  supportedLocales?: string[];
}
