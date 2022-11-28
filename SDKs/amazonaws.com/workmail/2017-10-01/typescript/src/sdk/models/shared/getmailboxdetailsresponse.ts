import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMailboxDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MailboxQuota" })
  mailboxQuota?: number;

  @SpeakeasyMetadata({ data: "json, name=MailboxSize" })
  mailboxSize?: number;
}
