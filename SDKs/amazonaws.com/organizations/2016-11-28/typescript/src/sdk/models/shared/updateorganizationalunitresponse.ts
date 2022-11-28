import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrganizationalUnit } from "./organizationalunit";



export class UpdateOrganizationalUnitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OrganizationalUnit" })
  organizationalUnit?: OrganizationalUnit;
}
