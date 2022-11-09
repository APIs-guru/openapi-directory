import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReplicaConfigurationRequest
/** 
 * A request to configure the number of replicas in a shard
**/
export class ReplicaConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReplicaCount" })
  replicaCount?: number;
}
