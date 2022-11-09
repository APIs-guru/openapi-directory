import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateMailboxQuotaRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MailboxQuota" })
  mailboxQuota: number;

  @Metadata({ data: "json, name=OrganizationId" })
  organizationId: string;

  @Metadata({ data: "json, name=UserId" })
  userId: string;
}
