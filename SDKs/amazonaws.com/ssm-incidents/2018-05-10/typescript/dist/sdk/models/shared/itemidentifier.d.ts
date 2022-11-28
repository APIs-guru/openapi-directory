import { SpeakeasyBase } from "../../../internal/utils";
import { ItemTypeEnum } from "./itemtypeenum";
import { ItemValue } from "./itemvalue";
/**
 * Details and type of a related item.
**/
export declare class ItemIdentifier extends SpeakeasyBase {
    type: ItemTypeEnum;
    value: ItemValue;
}
