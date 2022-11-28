import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent } from "./dictionarycomponentresponseofint32anddestinyiteminstancecomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent } from "./dictionarycomponentresponseofint32anddestinyitemobjectivescomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemPerksComponent } from "./dictionarycomponentresponseofint32anddestinyitemperkscomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemPlugObjectivesComponent } from "./dictionarycomponentresponseofint32anddestinyitemplugobjectivescomponent";
import { DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent } from "./dictionarycomponentresponseofuint32anddestinyitemplugcomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemRenderComponent } from "./dictionarycomponentresponseofint32anddestinyitemrendercomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemReusablePlugsComponent } from "./dictionarycomponentresponseofint32anddestinyitemreusableplugscomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent } from "./dictionarycomponentresponseofint32anddestinyitemsocketscomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemStatsComponent } from "./dictionarycomponentresponseofint32anddestinyitemstatscomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent } from "./dictionarycomponentresponseofint32anddestinyitemtalentgridcomponent";



export class DestinyItemComponentSetOfint32 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instances?: DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent;

  @SpeakeasyMetadata()
  objectives?: DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent;

  @SpeakeasyMetadata()
  perks?: DictionaryComponentResponseOfint32AndDestinyItemPerksComponent;

  @SpeakeasyMetadata()
  plugObjectives?: DictionaryComponentResponseOfint32AndDestinyItemPlugObjectivesComponent;

  @SpeakeasyMetadata()
  plugStates?: DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent;

  @SpeakeasyMetadata()
  renderData?: DictionaryComponentResponseOfint32AndDestinyItemRenderComponent;

  @SpeakeasyMetadata()
  reusablePlugs?: DictionaryComponentResponseOfint32AndDestinyItemReusablePlugsComponent;

  @SpeakeasyMetadata()
  sockets?: DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent;

  @SpeakeasyMetadata()
  stats?: DictionaryComponentResponseOfint32AndDestinyItemStatsComponent;

  @SpeakeasyMetadata()
  talentGrids?: DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent;
}
