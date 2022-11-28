import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LicenseTypeEnum } from "./licensetypeenum";
import { ReplicationRun } from "./replicationrun";
import { ServerTypeEnum } from "./servertypeenum";
import { ReplicationJobStateEnum } from "./replicationjobstateenum";
import { VmServer } from "./vmserver";



// ReplicationJob
/** 
 * Represents a replication job.
**/
export class ReplicationJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=encrypted" })
  encrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency?: number;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=latestAmiId" })
  latestAmiId?: string;

  @SpeakeasyMetadata({ data: "json, name=licenseType" })
  licenseType?: LicenseTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=nextReplicationRunStartTime" })
  nextReplicationRunStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=numberOfRecentAmisToKeep" })
  numberOfRecentAmisToKeep?: number;

  @SpeakeasyMetadata({ data: "json, name=replicationJobId" })
  replicationJobId?: string;

  @SpeakeasyMetadata({ data: "json, name=replicationRunList", elemType: ReplicationRun })
  replicationRunList?: ReplicationRun[];

  @SpeakeasyMetadata({ data: "json, name=roleName" })
  roleName?: string;

  @SpeakeasyMetadata({ data: "json, name=runOnce" })
  runOnce?: boolean;

  @SpeakeasyMetadata({ data: "json, name=seedReplicationTime" })
  seedReplicationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=serverId" })
  serverId?: string;

  @SpeakeasyMetadata({ data: "json, name=serverType" })
  serverType?: ServerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ReplicationJobStateEnum;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=vmServer" })
  vmServer?: VmServer;
}
