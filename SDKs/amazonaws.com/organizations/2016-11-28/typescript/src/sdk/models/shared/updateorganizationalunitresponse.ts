import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrganizationalUnit } from "./organizationalunit";


export class UpdateOrganizationalUnitResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=OrganizationalUnit" })
  organizationalUnit?: OrganizationalUnit;
}
