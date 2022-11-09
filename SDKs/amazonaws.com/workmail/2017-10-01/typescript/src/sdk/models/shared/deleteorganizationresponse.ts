import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteOrganizationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=OrganizationId" })
  organizationId?: string;

  @Metadata({ data: "json, name=State" })
  state?: string;
}
