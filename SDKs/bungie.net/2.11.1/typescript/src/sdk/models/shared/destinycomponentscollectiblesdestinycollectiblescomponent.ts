import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyComponentsCollectiblesDestinyCollectibleComponent } from "./destinycomponentscollectiblesdestinycollectiblecomponent";



export class DestinyComponentsCollectiblesDestinyCollectiblesComponent extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyComponentsCollectiblesDestinyCollectibleComponent })
  collectibles?: Map<string, DestinyComponentsCollectiblesDestinyCollectibleComponent>;

  @SpeakeasyMetadata()
  collectionBadgesRootNodeHash?: number;

  @SpeakeasyMetadata()
  collectionCategoriesRootNodeHash?: number;
}
