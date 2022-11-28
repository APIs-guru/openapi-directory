import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StandardSqlDataType } from "./standardsqldatatype";



// StandardSqlField
/** 
 * A field or a column.
**/
export class StandardSqlField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: StandardSqlDataType;
}
