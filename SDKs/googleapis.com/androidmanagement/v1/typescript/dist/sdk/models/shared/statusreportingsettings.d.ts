import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationReportingSettings } from "./applicationreportingsettings";
/**
 * Settings controlling the behavior of status reports.
**/
export declare class StatusReportingSettings extends SpeakeasyBase {
    applicationReportingSettings?: ApplicationReportingSettings;
    applicationReportsEnabled?: boolean;
    commonCriteriaModeEnabled?: boolean;
    deviceSettingsEnabled?: boolean;
    displayInfoEnabled?: boolean;
    hardwareStatusEnabled?: boolean;
    memoryInfoEnabled?: boolean;
    networkInfoEnabled?: boolean;
    powerManagementEventsEnabled?: boolean;
    softwareInfoEnabled?: boolean;
    systemPropertiesEnabled?: boolean;
}
