import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegisterEcsClusterResult
/** 
 * Contains the response to a <code>RegisterEcsCluster</code> request.
**/
export class RegisterEcsClusterResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EcsClusterArn" })
  ecsClusterArn?: string;
}
