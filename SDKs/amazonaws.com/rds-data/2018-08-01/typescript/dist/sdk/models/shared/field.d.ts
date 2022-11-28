import { SpeakeasyBase } from "../../../internal/utils";
import { ArrayValue } from "./arrayvalue";
/**
 * Contains a value.
**/
export declare class Field extends SpeakeasyBase {
    arrayValue?: ArrayValue;
    blobValue?: string;
    booleanValue?: boolean;
    doubleValue?: number;
    isNull?: boolean;
    longValue?: number;
    stringValue?: string;
}
