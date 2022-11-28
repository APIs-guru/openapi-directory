import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResumeClusterMessage
/** 
 * Describes a resume cluster operation. For example, a scheduled action to run the <code>ResumeCluster</code> API operation. 
**/
export class ResumeClusterMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clusterIdentifier: string;
}
