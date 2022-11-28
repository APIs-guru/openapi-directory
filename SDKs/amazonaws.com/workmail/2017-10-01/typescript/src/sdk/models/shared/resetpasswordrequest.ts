import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResetPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OrganizationId" })
  organizationId: string;

  @SpeakeasyMetadata({ data: "json, name=Password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId: string;
}
