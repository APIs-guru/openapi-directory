import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ItemTypeEnum } from "./itemtypeenum";
import { ItemValue } from "./itemvalue";



// ItemIdentifier
/** 
 * Details and type of a related item.
**/
export class ItemIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ItemTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: ItemValue;
}
