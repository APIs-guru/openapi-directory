import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DbClusterParameterGroup
/** 
 * <p>Contains the details of an Amazon Neptune DB cluster parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action.</p>
**/
export class DbClusterParameterGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbClusterParameterGroupArn?: string;

  @SpeakeasyMetadata()
  dbClusterParameterGroupName?: string;

  @SpeakeasyMetadata()
  dbParameterGroupFamily?: string;

  @SpeakeasyMetadata()
  description?: string;
}
