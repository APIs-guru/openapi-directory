import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BlacklistEntry } from "./blacklistentry";



// GetBlacklistReportsResponse
/** 
 * An object that contains information about blacklist events.
**/
export class GetBlacklistReportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BlacklistReport", elemType: BlacklistEntry, elemDepth: 2 })
  blacklistReport: Map<string, BlacklistEntry[]>;
}
