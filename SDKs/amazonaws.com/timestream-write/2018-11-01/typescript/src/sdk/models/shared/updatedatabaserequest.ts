import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateDatabaseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId: string;
}
