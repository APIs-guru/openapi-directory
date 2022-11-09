import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataType } from "./datatype";


// StructType
/** 
 * `StructType` defines the DataType-s of a STRUCT type.
**/
export class StructType extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields", elemType: shared.DataType })
  fields?: Map<string, DataType>;
}
