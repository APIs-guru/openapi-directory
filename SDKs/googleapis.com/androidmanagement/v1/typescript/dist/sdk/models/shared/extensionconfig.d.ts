import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration to enable an app as an extension app, with the capability of interacting with Android Device Policy offline.
**/
export declare class ExtensionConfig extends SpeakeasyBase {
    notificationReceiver?: string;
    signingKeyFingerprintsSha256?: string[];
}
