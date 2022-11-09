import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// QuotaStatus
/** 
 * Current state for a particular quota group.
**/
export class QuotaStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=consumed" })
  consumed?: number;

  @Metadata({ data: "json, name=remaining" })
  remaining?: number;
}
