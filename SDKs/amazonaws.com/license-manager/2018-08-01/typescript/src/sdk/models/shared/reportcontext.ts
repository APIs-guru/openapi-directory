import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReportContext
/** 
 * Details of the license configuration that this generator reports on.
**/
export class ReportContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=licenseConfigurationArns" })
  licenseConfigurationArns: string[];
}
