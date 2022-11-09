import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExtensionConfig
/** 
 * Configuration to enable an app as an extension app, with the capability of interacting with Android Device Policy offline.
**/
export class ExtensionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=notificationReceiver" })
  notificationReceiver?: string;

  @Metadata({ data: "json, name=signingKeyFingerprintsSha256" })
  signingKeyFingerprintsSha256?: string[];
}
