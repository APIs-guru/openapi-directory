import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StandardSqlField } from "./standardsqlfield";


// StandardSqlTableType
/** 
 * A table type
**/
export class StandardSqlTableType extends SpeakeasyBase {
  @Metadata({ data: "json, name=columns", elemType: shared.StandardSqlField })
  columns?: StandardSqlField[];
}
