import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReplicaConfigurationRequest
/** 
 * A request to configure the number of replicas in a shard
**/
export class ReplicaConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplicaCount" })
  replicaCount?: number;
}
