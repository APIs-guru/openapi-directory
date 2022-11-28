import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataType } from "./datatype";



// StructType
/** 
 * `StructType` defines the DataType-s of a STRUCT type.
**/
export class StructType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields", elemType: DataType })
  fields?: Map<string, DataType>;
}
