import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateMySqlDatabase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: number;

  @SpeakeasyMetadata({ data: "json, name=database_name" })
  databaseName?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;
}
