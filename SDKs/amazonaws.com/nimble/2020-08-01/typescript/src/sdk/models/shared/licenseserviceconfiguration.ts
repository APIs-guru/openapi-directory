import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LicenseServiceConfiguration
/** 
 * The configuration for a license service that is associated with a studio resource.
**/
export class LicenseServiceConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=endpoint" })
  endpoint?: string;
}
