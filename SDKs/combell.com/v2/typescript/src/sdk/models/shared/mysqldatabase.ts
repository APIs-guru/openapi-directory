import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MySqlDatabase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: number;

  @SpeakeasyMetadata({ data: "json, name=actual_size" })
  actualSize?: number;

  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=max_size" })
  maxSize?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=user_count" })
  userCount?: number;
}
