import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PersistentPreferredActivity
/** 
 * A default activity for handling intents that match a particular intent filter. Note: To set up a kiosk, use InstallType to KIOSK rather than use persistent preferred activities.
**/
export class PersistentPreferredActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions" })
  actions?: string[];

  @Metadata({ data: "json, name=categories" })
  categories?: string[];

  @Metadata({ data: "json, name=receiverActivity" })
  receiverActivity?: string;
}
