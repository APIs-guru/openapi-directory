import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteTableRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
