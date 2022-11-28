import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteMailboxPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EntityId" })
  entityId: string;

  @SpeakeasyMetadata({ data: "json, name=GranteeId" })
  granteeId: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
