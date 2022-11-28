import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeOrganizationalUnitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OrganizationalUnitId" })
  organizationalUnitId: string;
}
