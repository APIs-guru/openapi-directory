import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDatabaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;
}
