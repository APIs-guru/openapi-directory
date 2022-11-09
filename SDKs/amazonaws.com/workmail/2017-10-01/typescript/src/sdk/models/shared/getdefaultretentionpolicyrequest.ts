import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDefaultRetentionPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
