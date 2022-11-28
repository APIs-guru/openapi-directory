import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyQuestsDestinyObjectiveProgress } from "./destinyquestsdestinyobjectiveprogress";



export class DestinyComponentsItemsDestinyItemPlugObjectivesComponent extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyQuestsDestinyObjectiveProgress, elemDepth: 2 })
  objectivesPerPlug?: Map<string, DestinyQuestsDestinyObjectiveProgress[]>;
}
