import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDatabaseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;
}
