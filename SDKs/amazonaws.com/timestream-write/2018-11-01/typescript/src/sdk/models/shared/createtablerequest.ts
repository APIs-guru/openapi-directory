import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RetentionProperties } from "./retentionproperties";
import { Tag } from "./tag";


export class CreateTableRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "json, name=RetentionProperties" })
  retentionProperties?: RetentionProperties;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
