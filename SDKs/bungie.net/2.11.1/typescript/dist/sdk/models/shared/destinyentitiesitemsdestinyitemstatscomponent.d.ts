import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyDestinyStat } from "./destinydestinystat";
/**
 * If you want the stats on an item's instanced data, get this component.
 * These are stats like Attack, Defense etc... and *not* historical stats.
 * Note that some stats have additional computation in-game at runtime - for instance, Magazine Size - and thus these stats might not be 100% accurate compared to what you see in-game for some stats. I know, it sucks. I hate it too.
**/
export declare class DestinyEntitiesItemsDestinyItemStatsComponent extends SpeakeasyBase {
    stats?: Map<string, DestinyDestinyStat>;
}
