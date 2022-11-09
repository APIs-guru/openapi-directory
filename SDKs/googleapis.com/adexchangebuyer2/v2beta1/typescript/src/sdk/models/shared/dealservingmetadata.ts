import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DealPauseStatus } from "./dealpausestatus";


// DealServingMetadata
/** 
 * Message captures metadata about the serving status of a deal.
**/
export class DealServingMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=dealPauseStatus" })
  dealPauseStatus?: DealPauseStatus;
}
