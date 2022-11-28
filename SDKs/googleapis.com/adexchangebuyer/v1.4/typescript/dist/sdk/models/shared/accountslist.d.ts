import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
/**
 * An account feed lists Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single buyer account.
**/
export declare class AccountsList extends SpeakeasyBase {
    items?: Account[];
    kind?: string;
}
