import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=importedAppId" })
  importedAppId?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModified" })
  lastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=latestReplicationTime" })
  latestReplicationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=launchConfigurationStatus" })
  launchConfigurationStatus?: AppLaunchConfigurationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=launchDetails" })
  launchDetails?: LaunchDetails;

  @SpeakeasyMetadata({ data: "json, name=launchStatus" })
  launchStatus?: AppLaunchStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=launchStatusMessage" })
  launchStatusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=replicationConfigurationStatus" })
  replicationConfigurationStatus?: AppReplicationConfigurationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=replicationStatus" })
  replicationStatus?: AppReplicationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=replicationStatusMessage" })
  replicationStatusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=roleName" })
  roleName?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AppStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=totalServerGroups" })
  totalServerGroups?: number;

  @SpeakeasyMetadata({ data: "json, name=totalServers" })
  totalServers?: number;
}
