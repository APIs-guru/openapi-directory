import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Item } from "./item";



export class SelectResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Item })
  items?: Item[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
