import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a season and the number of resets you had in that season.
 *  We do not necessarily - even for progressions with resets - track it over all seasons. So be careful and check the season numbers being returned.
**/
export declare class DestinyDestinyProgressionResetEntry extends SpeakeasyBase {
    resets?: number;
    season?: number;
}
