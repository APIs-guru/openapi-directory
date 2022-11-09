import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataType } from "./datatype";
import { StructType } from "./structtype";

export enum DataTypeTypeCodeEnum {
    TypeCodeUnspecified = "TYPE_CODE_UNSPECIFIED"
,    Float64 = "FLOAT64"
,    Timestamp = "TIMESTAMP"
,    String = "STRING"
,    Array = "ARRAY"
,    Struct = "STRUCT"
,    Category = "CATEGORY"
}


// DataType
/** 
 * Indicated the type of data that can be stored in a structured data entity (e.g. a table).
**/
export class DataType extends SpeakeasyBase {
  @Metadata({ data: "json, name=listElementType" })
  listElementType?: DataType;

  @Metadata({ data: "json, name=nullable" })
  nullable?: boolean;

  @Metadata({ data: "json, name=structType" })
  structType?: StructType;

  @Metadata({ data: "json, name=timeFormat" })
  timeFormat?: string;

  @Metadata({ data: "json, name=typeCode" })
  typeCode?: DataTypeTypeCodeEnum;
}
