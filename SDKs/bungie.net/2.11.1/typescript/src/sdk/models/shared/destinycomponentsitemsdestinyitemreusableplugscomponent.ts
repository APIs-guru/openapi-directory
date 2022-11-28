import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinySocketsDestinyItemPlugBase } from "./destinysocketsdestinyitemplugbase";



export class DestinyComponentsItemsDestinyItemReusablePlugsComponent extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinySocketsDestinyItemPlugBase, elemDepth: 2 })
  plugs?: Map<string, DestinySocketsDestinyItemPlugBase[]>;
}
