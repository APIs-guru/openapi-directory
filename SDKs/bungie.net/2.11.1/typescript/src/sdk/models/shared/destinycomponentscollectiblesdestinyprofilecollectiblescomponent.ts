import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyComponentsCollectiblesDestinyCollectibleComponent } from "./destinycomponentscollectiblesdestinycollectiblecomponent";



export class DestinyComponentsCollectiblesDestinyProfileCollectiblesComponent extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyComponentsCollectiblesDestinyCollectibleComponent })
  collectibles?: Map<string, DestinyComponentsCollectiblesDestinyCollectibleComponent>;

  @SpeakeasyMetadata()
  collectionBadgesRootNodeHash?: number;

  @SpeakeasyMetadata()
  collectionCategoriesRootNodeHash?: number;

  @SpeakeasyMetadata()
  newnessFlaggedCollectibleHashes?: number[];

  @SpeakeasyMetadata()
  recentCollectibleHashes?: number[];
}
