import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyComponentsCollectiblesDestinyCollectibleComponent } from "./destinycomponentscollectiblesdestinycollectiblecomponent";
export declare class DestinyComponentsCollectiblesDestinyProfileCollectiblesComponent extends SpeakeasyBase {
    collectibles?: Map<string, DestinyComponentsCollectiblesDestinyCollectibleComponent>;
    collectionBadgesRootNodeHash?: number;
    collectionCategoriesRootNodeHash?: number;
    newnessFlaggedCollectibleHashes?: number[];
    recentCollectibleHashes?: number[];
}
