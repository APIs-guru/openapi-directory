import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDefaultRetentionPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
