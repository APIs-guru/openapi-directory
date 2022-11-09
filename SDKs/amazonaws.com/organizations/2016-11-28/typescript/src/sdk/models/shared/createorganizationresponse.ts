import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Organization } from "./organization";


export class CreateOrganizationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Organization" })
  organization?: Organization;
}
