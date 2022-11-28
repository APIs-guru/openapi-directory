import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClusterVersion
/** 
 * Describes a cluster version, including the parameter group family and description of the version.
**/
export class ClusterVersion extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clusterParameterGroupFamily?: string;

  @SpeakeasyMetadata()
  clusterVersion?: string;

  @SpeakeasyMetadata()
  description?: string;
}
