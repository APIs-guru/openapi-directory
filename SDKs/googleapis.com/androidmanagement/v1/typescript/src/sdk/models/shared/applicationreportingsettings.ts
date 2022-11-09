import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApplicationReportingSettings
/** 
 * Settings controlling the behavior of application reports.
**/
export class ApplicationReportingSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=includeRemovedApps" })
  includeRemovedApps?: boolean;
}
