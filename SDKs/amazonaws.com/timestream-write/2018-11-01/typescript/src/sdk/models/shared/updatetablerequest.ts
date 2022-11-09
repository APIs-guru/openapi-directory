import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RetentionProperties } from "./retentionproperties";


export class UpdateTableRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "json, name=RetentionProperties" })
  retentionProperties: RetentionProperties;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
