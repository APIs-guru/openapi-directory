import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExtensionConfig
/** 
 * Configuration to enable an app as an extension app, with the capability of interacting with Android Device Policy offline.
**/
export class ExtensionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notificationReceiver" })
  notificationReceiver?: string;

  @SpeakeasyMetadata({ data: "json, name=signingKeyFingerprintsSha256" })
  signingKeyFingerprintsSha256?: string[];
}
