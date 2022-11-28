import { SpeakeasyBase } from "../../../internal/utils";
import { RdsDbInstance } from "./rdsdbinstance";
/**
 * Contains the response to a <code>DescribeRdsDbInstances</code> request.
**/
export declare class DescribeRdsDbInstancesResult extends SpeakeasyBase {
    rdsDbInstances?: RdsDbInstance[];
}
