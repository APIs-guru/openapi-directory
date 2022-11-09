import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PropertyDataTypeEnum } from "./propertydatatypeenum";
import { PropertyNotification } from "./propertynotification";
/**
 * Contains asset property information.
**/
export declare class AssetProperty extends SpeakeasyBase {
    alias?: string;
    dataType: PropertyDataTypeEnum;
    dataTypeSpec?: string;
    id: string;
    name: string;
    notification?: PropertyNotification;
    unit?: string;
}
