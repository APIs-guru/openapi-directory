import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DbParameterGroup
/** 
 * <p>Contains the details of an Amazon RDS DB parameter group. </p> <p>This data type is used as a response element in the <code>DescribeDBParameterGroups</code> action. </p>
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
