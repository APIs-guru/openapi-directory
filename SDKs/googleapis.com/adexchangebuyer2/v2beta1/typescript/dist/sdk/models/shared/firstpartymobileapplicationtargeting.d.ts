import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a list of targeted and excluded mobile application IDs that publishers own. Mobile application IDs are from App Store and Google Play Store. Android App ID, for example, com.google.android.apps.maps, can be found in Google Play Store URL. iOS App ID (which is a number) can be found at the end of iTunes store URL. First party mobile applications is either included or excluded.
**/
export declare class FirstPartyMobileApplicationTargeting extends SpeakeasyBase {
    excludedAppIds?: string[];
    targetedAppIds?: string[];
}
