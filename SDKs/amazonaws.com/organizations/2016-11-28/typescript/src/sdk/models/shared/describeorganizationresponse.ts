import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Organization } from "./organization";



export class DescribeOrganizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Organization" })
  organization?: Organization;
}
