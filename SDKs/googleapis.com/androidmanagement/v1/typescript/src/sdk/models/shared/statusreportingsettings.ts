import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationReportingSettings } from "./applicationreportingsettings";


// StatusReportingSettings
/** 
 * Settings controlling the behavior of status reports.
**/
export class StatusReportingSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationReportingSettings" })
  applicationReportingSettings?: ApplicationReportingSettings;

  @Metadata({ data: "json, name=applicationReportsEnabled" })
  applicationReportsEnabled?: boolean;

  @Metadata({ data: "json, name=commonCriteriaModeEnabled" })
  commonCriteriaModeEnabled?: boolean;

  @Metadata({ data: "json, name=deviceSettingsEnabled" })
  deviceSettingsEnabled?: boolean;

  @Metadata({ data: "json, name=displayInfoEnabled" })
  displayInfoEnabled?: boolean;

  @Metadata({ data: "json, name=hardwareStatusEnabled" })
  hardwareStatusEnabled?: boolean;

  @Metadata({ data: "json, name=memoryInfoEnabled" })
  memoryInfoEnabled?: boolean;

  @Metadata({ data: "json, name=networkInfoEnabled" })
  networkInfoEnabled?: boolean;

  @Metadata({ data: "json, name=powerManagementEventsEnabled" })
  powerManagementEventsEnabled?: boolean;

  @Metadata({ data: "json, name=softwareInfoEnabled" })
  softwareInfoEnabled?: boolean;

  @Metadata({ data: "json, name=systemPropertiesEnabled" })
  systemPropertiesEnabled?: boolean;
}
