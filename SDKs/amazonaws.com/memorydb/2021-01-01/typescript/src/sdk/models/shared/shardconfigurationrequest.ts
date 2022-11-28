import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ShardConfigurationRequest
/** 
 * A request to configure the sharding properties of a cluster
**/
export class ShardConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ShardCount" })
  shardCount?: number;
}
