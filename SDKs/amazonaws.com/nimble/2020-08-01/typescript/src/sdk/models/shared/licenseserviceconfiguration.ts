import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LicenseServiceConfiguration
/** 
 * The configuration for a license service that is associated with a studio resource.
**/
export class LicenseServiceConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint?: string;
}
