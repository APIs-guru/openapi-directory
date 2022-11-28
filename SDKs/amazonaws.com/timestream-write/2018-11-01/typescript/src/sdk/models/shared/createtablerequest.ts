import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RetentionProperties } from "./retentionproperties";
import { Tag } from "./tag";



export class CreateTableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=RetentionProperties" })
  retentionProperties?: RetentionProperties;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
