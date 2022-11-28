import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FirstPartyMobileApplicationTargeting
/** 
 * Represents a list of targeted and excluded mobile application IDs that publishers own. Android App ID, for example, com.google.android.apps.maps, can be found in Google Play Store URL. iOS App ID (which is a number) can be found at the end of iTunes store URL. First party mobile applications is either included or excluded.
**/
export class FirstPartyMobileApplicationTargeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=excludedAppIds" })
  excludedAppIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=targetedAppIds" })
  targetedAppIds?: string[];
}
