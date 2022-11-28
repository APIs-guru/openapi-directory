import { SpeakeasyBase } from "../../../internal/utils";
import { OpsItemDataTypeEnum } from "./opsitemdatatypeenum";
/**
 * An object that defines the value of the key and its type in the OperationalData map.
**/
export declare class OpsItemDataValue extends SpeakeasyBase {
    type?: OpsItemDataTypeEnum;
    value?: string;
}
