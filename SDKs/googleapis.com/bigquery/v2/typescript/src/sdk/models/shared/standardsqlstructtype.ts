import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StandardSqlField } from "./standardsqlfield";



export class StandardSqlStructType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields", elemType: StandardSqlField })
  fields?: StandardSqlField[];
}
