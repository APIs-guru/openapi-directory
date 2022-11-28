import { SpeakeasyBase } from "../../../internal/utils";
import { StructType } from "./structtype";
export declare enum DataTypeTypeCodeEnum {
    TypeCodeUnspecified = "TYPE_CODE_UNSPECIFIED",
    Float64 = "FLOAT64",
    Timestamp = "TIMESTAMP",
    String = "STRING",
    Array = "ARRAY",
    Struct = "STRUCT",
    Category = "CATEGORY"
}
/**
 * Indicated the type of data that can be stored in a structured data entity (e.g. a table).
**/
export declare class DataType extends SpeakeasyBase {
    listElementType?: DataType;
    nullable?: boolean;
    structType?: StructType;
    timeFormat?: string;
    typeCode?: DataTypeTypeCodeEnum;
}
