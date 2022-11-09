import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OrganizationConfiguration
/** 
 * Configuration information for AWS Organizations.
**/
export class OrganizationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=EnableIntegration" })
  enableIntegration: boolean;
}
