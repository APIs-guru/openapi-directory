import { SpeakeasyBase } from "../../../internal/utils";
import { PropertyDataTypeEnum } from "./propertydatatypeenum";
import { PropertyNotification } from "./propertynotification";
import { PropertyType } from "./propertytype";
/**
 * Contains asset property information.
**/
export declare class Property extends SpeakeasyBase {
    alias?: string;
    dataType: PropertyDataTypeEnum;
    id: string;
    name: string;
    notification?: PropertyNotification;
    type?: PropertyType;
    unit?: string;
}
