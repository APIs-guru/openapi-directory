import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";



export class GetAttributesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Attribute })
  attributes?: Attribute[];
}
