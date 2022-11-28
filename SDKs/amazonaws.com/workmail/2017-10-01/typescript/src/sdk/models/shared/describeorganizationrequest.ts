import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeOrganizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
