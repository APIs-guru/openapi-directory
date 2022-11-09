import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRetentionPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
