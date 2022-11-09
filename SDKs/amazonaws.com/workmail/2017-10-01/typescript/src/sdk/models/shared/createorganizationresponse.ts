import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateOrganizationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=OrganizationId" })
  organizationId?: string;
}
