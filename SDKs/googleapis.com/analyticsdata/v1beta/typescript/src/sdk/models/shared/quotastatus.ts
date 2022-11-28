import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QuotaStatus
/** 
 * Current state for a particular quota group.
**/
export class QuotaStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumed" })
  consumed?: number;

  @SpeakeasyMetadata({ data: "json, name=remaining" })
  remaining?: number;
}
