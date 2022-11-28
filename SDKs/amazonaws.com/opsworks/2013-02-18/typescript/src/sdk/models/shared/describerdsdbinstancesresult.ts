import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RdsDbInstance } from "./rdsdbinstance";



// DescribeRdsDbInstancesResult
/** 
 * Contains the response to a <code>DescribeRdsDbInstances</code> request.
**/
export class DescribeRdsDbInstancesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RdsDbInstances", elemType: RdsDbInstance })
  rdsDbInstances?: RdsDbInstance[];
}
