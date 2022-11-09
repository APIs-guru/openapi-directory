import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeOrganizationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
