import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAccessControlRuleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
