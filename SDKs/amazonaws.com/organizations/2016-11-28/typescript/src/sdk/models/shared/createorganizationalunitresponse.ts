import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrganizationalUnit } from "./organizationalunit";


export class CreateOrganizationalUnitResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=OrganizationalUnit" })
  organizationalUnit?: OrganizationalUnit;
}
