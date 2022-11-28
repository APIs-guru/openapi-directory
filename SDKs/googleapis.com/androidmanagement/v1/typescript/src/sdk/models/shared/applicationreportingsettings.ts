import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApplicationReportingSettings
/** 
 * Settings controlling the behavior of application reports.
**/
export class ApplicationReportingSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=includeRemovedApps" })
  includeRemovedApps?: boolean;
}
