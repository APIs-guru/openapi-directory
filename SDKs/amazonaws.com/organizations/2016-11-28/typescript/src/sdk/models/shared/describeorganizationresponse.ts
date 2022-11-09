import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Organization } from "./organization";


export class DescribeOrganizationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Organization" })
  organization?: Organization;
}
