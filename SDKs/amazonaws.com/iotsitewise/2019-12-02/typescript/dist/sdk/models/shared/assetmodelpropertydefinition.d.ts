import { SpeakeasyBase } from "../../../internal/utils";
import { PropertyDataTypeEnum } from "./propertydatatypeenum";
import { PropertyType } from "./propertytype";
/**
 * Contains an asset model property definition. This property definition is applied to all assets created from the asset model.
**/
export declare class AssetModelPropertyDefinition extends SpeakeasyBase {
    dataType: PropertyDataTypeEnum;
    dataTypeSpec?: string;
    name: string;
    type: PropertyType;
    unit?: string;
}
