import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DictionaryComponentResponseOfuint32AndDestinyItemInstanceComponent } from "./dictionarycomponentresponseofuint32anddestinyiteminstancecomponent";
import { DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent } from "./dictionarycomponentresponseofuint32anddestinyitemobjectivescomponent";
import { DictionaryComponentResponseOfuint32AndDestinyItemPerksComponent } from "./dictionarycomponentresponseofuint32anddestinyitemperkscomponent";
import { DictionaryComponentResponseOfuint32AndDestinyItemPlugObjectivesComponent } from "./dictionarycomponentresponseofuint32anddestinyitemplugobjectivescomponent";
import { DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent } from "./dictionarycomponentresponseofuint32anddestinyitemplugcomponent";
import { DictionaryComponentResponseOfuint32AndDestinyItemRenderComponent } from "./dictionarycomponentresponseofuint32anddestinyitemrendercomponent";
import { DictionaryComponentResponseOfuint32AndDestinyItemReusablePlugsComponent } from "./dictionarycomponentresponseofuint32anddestinyitemreusableplugscomponent";
import { DictionaryComponentResponseOfuint32AndDestinyItemSocketsComponent } from "./dictionarycomponentresponseofuint32anddestinyitemsocketscomponent";
import { DictionaryComponentResponseOfuint32AndDestinyItemStatsComponent } from "./dictionarycomponentresponseofuint32anddestinyitemstatscomponent";
import { DictionaryComponentResponseOfuint32AndDestinyItemTalentGridComponent } from "./dictionarycomponentresponseofuint32anddestinyitemtalentgridcomponent";
import { DestinyComponentsCollectiblesDestinyCollectiblesComponent } from "./destinycomponentscollectiblesdestinycollectiblescomponent";



// DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibleItemComponents
/** 
 * Item components, keyed by the item hash of the items pointed at collectibles found under the requested Presentation Node.
 * NOTE: I had a lot of hemming and hawing about whether these should be keyed by collectible hash or item hash... but ultimately having it be keyed by item hash meant that UI that already uses DestinyItemComponentSet data wouldn't have to have a special override to do the collectible -> item lookup once you delve into an item's details, and it also meant that you didn't have to remember that the Hash being used as the key for plugSets was different from the Hash being used for the other Dictionaries. As a result, using the Item Hash felt like the least crappy solution.
 * We may all come to regret this decision. We will see.
 * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
**/
export class DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibleItemComponents extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instances?: DictionaryComponentResponseOfuint32AndDestinyItemInstanceComponent;

  @SpeakeasyMetadata()
  objectives?: DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent;

  @SpeakeasyMetadata()
  perks?: DictionaryComponentResponseOfuint32AndDestinyItemPerksComponent;

  @SpeakeasyMetadata()
  plugObjectives?: DictionaryComponentResponseOfuint32AndDestinyItemPlugObjectivesComponent;

  @SpeakeasyMetadata()
  plugStates?: DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent;

  @SpeakeasyMetadata()
  renderData?: DictionaryComponentResponseOfuint32AndDestinyItemRenderComponent;

  @SpeakeasyMetadata()
  reusablePlugs?: DictionaryComponentResponseOfuint32AndDestinyItemReusablePlugsComponent;

  @SpeakeasyMetadata()
  sockets?: DictionaryComponentResponseOfuint32AndDestinyItemSocketsComponent;

  @SpeakeasyMetadata()
  stats?: DictionaryComponentResponseOfuint32AndDestinyItemStatsComponent;

  @SpeakeasyMetadata()
  talentGrids?: DictionaryComponentResponseOfuint32AndDestinyItemTalentGridComponent;
}


// DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibles
/** 
 * COMPONENT TYPE: Collectibles
**/
export class DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibles extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyComponentsCollectiblesDestinyCollectiblesComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyCollectibleNodeDetailResponse
/** 
 * Returns the detailed information about a Collectible Presentation Node and any Collectibles that are direct descendants.
**/
export class DestinyResponsesDestinyCollectibleNodeDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  collectibleItemComponents?: DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibleItemComponents;

  @SpeakeasyMetadata()
  collectibles?: DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibles;
}
