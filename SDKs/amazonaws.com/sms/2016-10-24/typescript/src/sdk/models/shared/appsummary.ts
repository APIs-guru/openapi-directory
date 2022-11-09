import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AppLaunchConfigurationStatusEnum } from "./applaunchconfigurationstatusenum";
import { LaunchDetails } from "./launchdetails";
import { AppLaunchStatusEnum } from "./applaunchstatusenum";
import { AppReplicationConfigurationStatusEnum } from "./appreplicationconfigurationstatusenum";
import { AppReplicationStatusEnum } from "./appreplicationstatusenum";
import { AppStatusEnum } from "./appstatusenum";


// AppSummary
/** 
 * Information about the application.
**/
export class AppSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=appId" })
  appId?: string;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=importedAppId" })
  importedAppId?: string;

  @Metadata({ data: "json, name=lastModified" })
  lastModified?: Date;

  @Metadata({ data: "json, name=latestReplicationTime" })
  latestReplicationTime?: Date;

  @Metadata({ data: "json, name=launchConfigurationStatus" })
  launchConfigurationStatus?: AppLaunchConfigurationStatusEnum;

  @Metadata({ data: "json, name=launchDetails" })
  launchDetails?: LaunchDetails;

  @Metadata({ data: "json, name=launchStatus" })
  launchStatus?: AppLaunchStatusEnum;

  @Metadata({ data: "json, name=launchStatusMessage" })
  launchStatusMessage?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=replicationConfigurationStatus" })
  replicationConfigurationStatus?: AppReplicationConfigurationStatusEnum;

  @Metadata({ data: "json, name=replicationStatus" })
  replicationStatus?: AppReplicationStatusEnum;

  @Metadata({ data: "json, name=replicationStatusMessage" })
  replicationStatusMessage?: string;

  @Metadata({ data: "json, name=roleName" })
  roleName?: string;

  @Metadata({ data: "json, name=status" })
  status?: AppStatusEnum;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=totalServerGroups" })
  totalServerGroups?: number;

  @Metadata({ data: "json, name=totalServers" })
  totalServers?: number;
}
