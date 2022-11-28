import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationReportingSettings } from "./applicationreportingsettings";



// StatusReportingSettings
/** 
 * Settings controlling the behavior of status reports.
**/
export class StatusReportingSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationReportingSettings" })
  applicationReportingSettings?: ApplicationReportingSettings;

  @SpeakeasyMetadata({ data: "json, name=applicationReportsEnabled" })
  applicationReportsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=commonCriteriaModeEnabled" })
  commonCriteriaModeEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deviceSettingsEnabled" })
  deviceSettingsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayInfoEnabled" })
  displayInfoEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hardwareStatusEnabled" })
  hardwareStatusEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=memoryInfoEnabled" })
  memoryInfoEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=networkInfoEnabled" })
  networkInfoEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=powerManagementEventsEnabled" })
  powerManagementEventsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=softwareInfoEnabled" })
  softwareInfoEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=systemPropertiesEnabled" })
  systemPropertiesEnabled?: boolean;
}
