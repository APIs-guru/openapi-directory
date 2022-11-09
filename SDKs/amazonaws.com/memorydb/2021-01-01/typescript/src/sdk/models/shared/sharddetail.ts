import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ShardConfiguration } from "./shardconfiguration";


// ShardDetail
/** 
 * Provides details of a shard in a snapshot
**/
export class ShardDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=Configuration" })
  configuration?: ShardConfiguration;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Size" })
  size?: string;

  @Metadata({ data: "json, name=SnapshotCreationTime" })
  snapshotCreationTime?: Date;
}
