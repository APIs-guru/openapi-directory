import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateMySqlDatabase extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_id" })
  accountId?: number;

  @Metadata({ data: "json, name=database_name" })
  databaseName?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;
}
