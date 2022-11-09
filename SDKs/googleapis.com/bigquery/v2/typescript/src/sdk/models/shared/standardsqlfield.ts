import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StandardSqlDataType } from "./standardsqldatatype";


// StandardSqlField
/** 
 * A field or a column.
**/
export class StandardSqlField extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: StandardSqlDataType;
}
