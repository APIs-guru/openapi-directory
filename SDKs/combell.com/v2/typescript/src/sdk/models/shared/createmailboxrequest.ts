import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateMailboxRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: number;

  @SpeakeasyMetadata({ data: "json, name=email_address" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;
}
