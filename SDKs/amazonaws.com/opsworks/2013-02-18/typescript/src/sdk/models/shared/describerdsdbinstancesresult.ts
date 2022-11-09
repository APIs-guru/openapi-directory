import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RdsDbInstance } from "./rdsdbinstance";


// DescribeRdsDbInstancesResult
/** 
 * Contains the response to a <code>DescribeRdsDbInstances</code> request.
**/
export class DescribeRdsDbInstancesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=RdsDbInstances", elemType: shared.RdsDbInstance })
  rdsDbInstances?: RdsDbInstance[];
}
