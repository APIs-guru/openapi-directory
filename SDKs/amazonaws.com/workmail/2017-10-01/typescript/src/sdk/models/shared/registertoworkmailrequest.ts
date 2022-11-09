import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegisterToWorkMailRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Email" })
  email: string;

  @Metadata({ data: "json, name=EntityId" })
  entityId: string;

  @Metadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
