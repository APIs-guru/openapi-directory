import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AppLaunchConfigurationStatusEnum } from "./applaunchconfigurationstatusenum";
import { LaunchDetails } from "./launchdetails";
import { AppLaunchStatusEnum } from "./applaunchstatusenum";
import { AppReplicationConfigurationStatusEnum } from "./appreplicationconfigurationstatusenum";
import { AppReplicationStatusEnum } from "./appreplicationstatusenum";
import { AppStatusEnum } from "./appstatusenum";
/**
 * Information about the application.
**/
export declare class AppSummary extends SpeakeasyBase {
    appId?: string;
    creationTime?: Date;
    description?: string;
    importedAppId?: string;
    lastModified?: Date;
    latestReplicationTime?: Date;
    launchConfigurationStatus?: AppLaunchConfigurationStatusEnum;
    launchDetails?: LaunchDetails;
    launchStatus?: AppLaunchStatusEnum;
    launchStatusMessage?: string;
    name?: string;
    replicationConfigurationStatus?: AppReplicationConfigurationStatusEnum;
    replicationStatus?: AppReplicationStatusEnum;
    replicationStatusMessage?: string;
    roleName?: string;
    status?: AppStatusEnum;
    statusMessage?: string;
    totalServerGroups?: number;
    totalServers?: number;
}
