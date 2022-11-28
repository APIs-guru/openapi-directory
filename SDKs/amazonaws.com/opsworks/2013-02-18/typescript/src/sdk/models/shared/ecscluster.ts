import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EcsCluster
/** 
 * Describes a registered Amazon ECS cluster.
**/
export class EcsCluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EcsClusterArn" })
  ecsClusterArn?: string;

  @SpeakeasyMetadata({ data: "json, name=EcsClusterName" })
  ecsClusterName?: string;

  @SpeakeasyMetadata({ data: "json, name=RegisteredAt" })
  registeredAt?: string;

  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId?: string;
}
