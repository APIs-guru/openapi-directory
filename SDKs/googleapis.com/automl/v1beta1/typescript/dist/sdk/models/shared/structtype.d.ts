import { SpeakeasyBase } from "../../../internal/utils";
import { DataType } from "./datatype";
/**
 * `StructType` defines the DataType-s of a STRUCT type.
**/
export declare class StructType extends SpeakeasyBase {
    fields?: Map<string, DataType>;
}
