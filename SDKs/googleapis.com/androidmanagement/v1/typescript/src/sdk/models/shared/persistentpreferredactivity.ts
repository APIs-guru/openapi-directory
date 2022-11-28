import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PersistentPreferredActivity
/** 
 * A default activity for handling intents that match a particular intent filter. Note: To set up a kiosk, use InstallType to KIOSK rather than use persistent preferred activities.
**/
export class PersistentPreferredActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions" })
  actions?: string[];

  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: string[];

  @SpeakeasyMetadata({ data: "json, name=receiverActivity" })
  receiverActivity?: string;
}
