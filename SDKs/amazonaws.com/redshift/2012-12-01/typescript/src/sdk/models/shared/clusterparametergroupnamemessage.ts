import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClusterParameterGroupNameMessage
/** 
 * <p/>
**/
export class ClusterParameterGroupNameMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  parameterGroupName?: string;

  @SpeakeasyMetadata()
  parameterGroupStatus?: string;
}
