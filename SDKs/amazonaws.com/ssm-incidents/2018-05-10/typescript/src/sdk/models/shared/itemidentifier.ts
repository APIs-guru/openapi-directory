import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ItemTypeEnum } from "./itemtypeenum";
import { ItemValue } from "./itemvalue";


// ItemIdentifier
/** 
 * Details and type of a related item.
**/
export class ItemIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: ItemTypeEnum;

  @Metadata({ data: "json, name=value" })
  value: ItemValue;
}
