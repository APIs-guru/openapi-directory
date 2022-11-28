import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A default activity for handling intents that match a particular intent filter. Note: To set up a kiosk, use InstallType to KIOSK rather than use persistent preferred activities.
**/
export declare class PersistentPreferredActivity extends SpeakeasyBase {
    actions?: string[];
    categories?: string[];
    receiverActivity?: string;
}
