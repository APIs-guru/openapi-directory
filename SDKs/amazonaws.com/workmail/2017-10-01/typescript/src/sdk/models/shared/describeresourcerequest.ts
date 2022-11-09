import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeResourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=OrganizationId" })
  organizationId: string;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;
}
