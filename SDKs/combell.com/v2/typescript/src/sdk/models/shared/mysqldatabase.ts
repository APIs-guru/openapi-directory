import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MySqlDatabase extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_id" })
  accountId?: number;

  @Metadata({ data: "json, name=actual_size" })
  actualSize?: number;

  @Metadata({ data: "json, name=hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=max_size" })
  maxSize?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=user_count" })
  userCount?: number;
}
