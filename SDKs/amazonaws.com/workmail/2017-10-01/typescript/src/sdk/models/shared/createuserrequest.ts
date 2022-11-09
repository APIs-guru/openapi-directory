import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateUserRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DisplayName" })
  displayName: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=OrganizationId" })
  organizationId: string;

  @Metadata({ data: "json, name=Password" })
  password: string;
}
