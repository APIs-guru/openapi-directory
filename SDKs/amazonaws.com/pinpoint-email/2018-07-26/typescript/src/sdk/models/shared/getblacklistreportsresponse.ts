import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BlacklistEntry } from "./blacklistentry";


// GetBlacklistReportsResponse
/** 
 * An object that contains information about blacklist events.
**/
export class GetBlacklistReportsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=BlacklistReport", elemType: shared.BlacklistEntry, elemDepth: 2 })
  blacklistReport: Map<string, BlacklistEntry[]>;
}
