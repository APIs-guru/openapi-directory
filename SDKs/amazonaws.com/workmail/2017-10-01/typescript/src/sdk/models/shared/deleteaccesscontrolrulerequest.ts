import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAccessControlRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
