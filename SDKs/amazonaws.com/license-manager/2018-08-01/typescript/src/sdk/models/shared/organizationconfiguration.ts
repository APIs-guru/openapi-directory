import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OrganizationConfiguration
/** 
 * Configuration information for AWS Organizations.
**/
export class OrganizationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EnableIntegration" })
  enableIntegration: boolean;
}
