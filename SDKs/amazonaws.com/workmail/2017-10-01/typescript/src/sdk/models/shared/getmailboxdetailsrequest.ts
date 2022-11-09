import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMailboxDetailsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=OrganizationId" })
  organizationId: string;

  @Metadata({ data: "json, name=UserId" })
  userId: string;
}
