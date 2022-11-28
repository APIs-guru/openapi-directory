import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";



export class Item extends SpeakeasyBase {
  @SpeakeasyMetadata()
  alternateNameEncoding?: string;

  @SpeakeasyMetadata({ elemType: Attribute })
  attributes: Attribute[];

  @SpeakeasyMetadata()
  name: string;
}
