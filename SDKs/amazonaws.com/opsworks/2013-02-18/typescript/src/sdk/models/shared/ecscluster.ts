import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EcsCluster
/** 
 * Describes a registered Amazon ECS cluster.
**/
export class EcsCluster extends SpeakeasyBase {
  @Metadata({ data: "json, name=EcsClusterArn" })
  ecsClusterArn?: string;

  @Metadata({ data: "json, name=EcsClusterName" })
  ecsClusterName?: string;

  @Metadata({ data: "json, name=RegisteredAt" })
  registeredAt?: string;

  @Metadata({ data: "json, name=StackId" })
  stackId?: string;
}
