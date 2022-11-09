import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMailboxDetailsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=MailboxQuota" })
  mailboxQuota?: number;

  @Metadata({ data: "json, name=MailboxSize" })
  mailboxSize?: number;
}
