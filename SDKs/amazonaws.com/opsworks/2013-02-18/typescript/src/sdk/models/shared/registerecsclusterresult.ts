import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RegisterEcsClusterResult
/** 
 * Contains the response to a <code>RegisterEcsCluster</code> request.
**/
export class RegisterEcsClusterResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=EcsClusterArn" })
  ecsClusterArn?: string;
}
