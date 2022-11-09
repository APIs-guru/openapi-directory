import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteMailboxPermissionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EntityId" })
  entityId: string;

  @Metadata({ data: "json, name=GranteeId" })
  granteeId: string;

  @Metadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
