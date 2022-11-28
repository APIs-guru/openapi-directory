import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListAccessControlRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
