import { SpeakeasyBase } from "../../../internal/utils";
import { BlacklistEntry } from "./blacklistentry";
/**
 * An object that contains information about blacklist events.
**/
export declare class GetBlacklistReportsResponse extends SpeakeasyBase {
    blacklistReport: Map<string, BlacklistEntry[]>;
}
