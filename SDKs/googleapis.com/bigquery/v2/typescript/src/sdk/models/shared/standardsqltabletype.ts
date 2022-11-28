import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StandardSqlField } from "./standardsqlfield";



// StandardSqlTableType
/** 
 * A table type
**/
export class StandardSqlTableType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columns", elemType: StandardSqlField })
  columns?: StandardSqlField[];
}
