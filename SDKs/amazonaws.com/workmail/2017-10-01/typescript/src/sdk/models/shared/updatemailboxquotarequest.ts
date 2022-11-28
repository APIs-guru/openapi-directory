import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateMailboxQuotaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MailboxQuota" })
  mailboxQuota: number;

  @SpeakeasyMetadata({ data: "json, name=OrganizationId" })
  organizationId: string;

  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId: string;
}
