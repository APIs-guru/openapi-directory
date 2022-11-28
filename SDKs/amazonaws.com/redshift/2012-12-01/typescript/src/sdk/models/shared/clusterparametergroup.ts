import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// ClusterParameterGroup
/** 
 * Describes a parameter group.
**/
export class ClusterParameterGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  parameterGroupFamily?: string;

  @SpeakeasyMetadata()
  parameterGroupName?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
