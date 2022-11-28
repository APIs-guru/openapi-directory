import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReportContext
/** 
 * Details of the license configuration that this generator reports on.
**/
export class ReportContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=licenseConfigurationArns" })
  licenseConfigurationArns: string[];
}
