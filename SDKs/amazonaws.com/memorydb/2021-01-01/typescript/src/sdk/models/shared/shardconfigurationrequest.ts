import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ShardConfigurationRequest
/** 
 * A request to configure the sharding properties of a cluster
**/
export class ShardConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ShardCount" })
  shardCount?: number;
}
