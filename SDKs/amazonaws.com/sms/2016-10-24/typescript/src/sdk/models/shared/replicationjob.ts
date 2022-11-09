import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=encrypted" })
  encrypted?: boolean;

  @Metadata({ data: "json, name=frequency" })
  frequency?: number;

  @Metadata({ data: "json, name=kmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=latestAmiId" })
  latestAmiId?: string;

  @Metadata({ data: "json, name=licenseType" })
  licenseType?: LicenseTypeEnum;

  @Metadata({ data: "json, name=nextReplicationRunStartTime" })
  nextReplicationRunStartTime?: Date;

  @Metadata({ data: "json, name=numberOfRecentAmisToKeep" })
  numberOfRecentAmisToKeep?: number;

  @Metadata({ data: "json, name=replicationJobId" })
  replicationJobId?: string;

  @Metadata({ data: "json, name=replicationRunList", elemType: shared.ReplicationRun })
  replicationRunList?: ReplicationRun[];

  @Metadata({ data: "json, name=roleName" })
  roleName?: string;

  @Metadata({ data: "json, name=runOnce" })
  runOnce?: boolean;

  @Metadata({ data: "json, name=seedReplicationTime" })
  seedReplicationTime?: Date;

  @Metadata({ data: "json, name=serverId" })
  serverId?: string;

  @Metadata({ data: "json, name=serverType" })
  serverType?: ServerTypeEnum;

  @Metadata({ data: "json, name=state" })
  state?: ReplicationJobStateEnum;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=vmServer" })
  vmServer?: VmServer;
}
