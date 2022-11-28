import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShardConfiguration } from "./shardconfiguration";



// ShardDetail
/** 
 * Provides details of a shard in a snapshot
**/
export class ShardDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Configuration" })
  configuration?: ShardConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Size" })
  size?: string;

  @SpeakeasyMetadata({ data: "json, name=SnapshotCreationTime" })
  snapshotCreationTime?: Date;
}
