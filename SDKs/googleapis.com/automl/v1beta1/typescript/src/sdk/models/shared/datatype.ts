import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StructType } from "./structtype";


export enum DataTypeTypeCodeEnum {
    TypeCodeUnspecified = "TYPE_CODE_UNSPECIFIED",
    Float64 = "FLOAT64",
    Timestamp = "TIMESTAMP",
    String = "STRING",
    Array = "ARRAY",
    Struct = "STRUCT",
    Category = "CATEGORY"
}


// DataType
/** 
 * Indicated the type of data that can be stored in a structured data entity (e.g. a table).
**/
export class DataType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listElementType" })
  listElementType?: DataType;

  @SpeakeasyMetadata({ data: "json, name=nullable" })
  nullable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=structType" })
  structType?: StructType;

  @SpeakeasyMetadata({ data: "json, name=timeFormat" })
  timeFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=typeCode" })
  typeCode?: DataTypeTypeCodeEnum;
}
