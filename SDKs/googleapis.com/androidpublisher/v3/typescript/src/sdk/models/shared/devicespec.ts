import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeviceSpec
/** 
 * The device spec used to generate a system APK.
**/
export class DeviceSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=screenDensity" })
  screenDensity?: number;

  @Metadata({ data: "json, name=supportedAbis" })
  supportedAbis?: string[];

  @Metadata({ data: "json, name=supportedLocales" })
  supportedLocales?: string[];
}
