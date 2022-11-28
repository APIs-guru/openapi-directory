import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinyDestinyProgressionResetEntry
/** 
 * Represents a season and the number of resets you had in that season.
 *  We do not necessarily - even for progressions with resets - track it over all seasons. So be careful and check the season numbers being returned.
**/
export class DestinyDestinyProgressionResetEntry extends SpeakeasyBase {
  @SpeakeasyMetadata()
  resets?: number;

  @SpeakeasyMetadata()
  season?: number;
}
