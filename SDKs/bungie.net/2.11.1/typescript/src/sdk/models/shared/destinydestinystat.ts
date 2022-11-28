import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinyDestinyStat
/** 
 * Represents a stat on an item *or* Character (NOT a Historical Stat, but a physical attribute stat like Attack, Defense etc...)
**/
export class DestinyDestinyStat extends SpeakeasyBase {
  @SpeakeasyMetadata()
  statHash?: number;

  @SpeakeasyMetadata()
  value?: number;
}
