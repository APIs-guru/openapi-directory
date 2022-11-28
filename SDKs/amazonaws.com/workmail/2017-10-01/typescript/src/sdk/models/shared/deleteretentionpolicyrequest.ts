import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRetentionPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
