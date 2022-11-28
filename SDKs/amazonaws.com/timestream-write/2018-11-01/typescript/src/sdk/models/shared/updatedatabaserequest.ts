import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateDatabaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId: string;
}
