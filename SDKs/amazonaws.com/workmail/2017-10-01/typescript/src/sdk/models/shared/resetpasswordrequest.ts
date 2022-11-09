import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResetPasswordRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=OrganizationId" })
  organizationId: string;

  @Metadata({ data: "json, name=Password" })
  password: string;

  @Metadata({ data: "json, name=UserId" })
  userId: string;
}
