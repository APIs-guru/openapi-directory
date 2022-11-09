import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListAccessControlRulesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
