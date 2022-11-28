import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";



// ClusterParameterGroupDetails
/** 
 * Contains the output from the <a>DescribeClusterParameters</a> action. 
**/
export class ClusterParameterGroupDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: Parameter })
  parameters?: Parameter[];
}
