import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyComponentsPresentationDestinyPresentationNodeComponent } from "./destinycomponentspresentationdestinypresentationnodecomponent";



export class DestinyComponentsPresentationDestinyPresentationNodesComponent extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyComponentsPresentationDestinyPresentationNodeComponent })
  nodes?: Map<string, DestinyComponentsPresentationDestinyPresentationNodeComponent>;
}
