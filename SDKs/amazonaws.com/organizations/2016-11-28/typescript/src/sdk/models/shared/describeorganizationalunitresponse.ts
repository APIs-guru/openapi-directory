import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrganizationalUnit } from "./organizationalunit";



export class DescribeOrganizationalUnitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OrganizationalUnit" })
  organizationalUnit?: OrganizationalUnit;
}
