import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TableFieldSchema } from "./tablefieldschema";


export class TableSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields", elemType: shared.TableFieldSchema })
  fields?: TableFieldSchema[];
}
