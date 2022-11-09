import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StandardSqlField } from "./standardsqlfield";


export class StandardSqlStructType extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields", elemType: shared.StandardSqlField })
  fields?: StandardSqlField[];
}
