import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DbParameterGroup
/** 
 * <p>Contains the details of an Amazon Neptune DB parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action.</p>
**/
export class DbParameterGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbParameterGroupArn?: string;

  @SpeakeasyMetadata()
  dbParameterGroupFamily?: string;

  @SpeakeasyMetadata()
  dbParameterGroupName?: string;

  @SpeakeasyMetadata()
  description?: string;
}
