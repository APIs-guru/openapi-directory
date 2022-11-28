import { SpeakeasyBase } from "../../../internal/utils";
import { PropertyDataTypeEnum } from "./propertydatatypeenum";
import { PropertyType } from "./propertytype";
/**
 * Contains information about an asset model property.
**/
export declare class AssetModelProperty extends SpeakeasyBase {
    dataType: PropertyDataTypeEnum;
    dataTypeSpec?: string;
    id?: string;
    name: string;
    type: PropertyType;
    unit?: string;
}
