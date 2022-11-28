import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrganizationalUnit } from "./organizationalunit";



export class CreateOrganizationalUnitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OrganizationalUnit" })
  organizationalUnit?: OrganizationalUnit;
}
