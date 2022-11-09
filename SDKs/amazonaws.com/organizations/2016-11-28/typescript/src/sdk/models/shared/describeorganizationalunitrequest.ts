import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeOrganizationalUnitRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=OrganizationalUnitId" })
  organizationalUnitId: string;
}
