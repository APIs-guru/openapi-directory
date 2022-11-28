import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DealPauseStatus } from "./dealpausestatus";



// DealServingMetadata
/** 
 * Message captures metadata about the serving status of a deal.
**/
export class DealServingMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dealPauseStatus" })
  dealPauseStatus?: DealPauseStatus;
}
