import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateMailboxRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_id" })
  accountId?: number;

  @Metadata({ data: "json, name=email_address" })
  emailAddress?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;
}
