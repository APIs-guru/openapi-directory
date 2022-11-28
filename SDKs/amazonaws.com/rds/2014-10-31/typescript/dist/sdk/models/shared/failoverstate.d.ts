import { SpeakeasyBase } from "../../../internal/utils";
import { FailoverStatusEnum } from "./failoverstatusenum";
/**
 * Contains the state of scheduled or in-process failover operations on an Aurora global database (<a>GlobalCluster</a>). This Data type is empty unless a failover operation is scheduled or is currently underway on the Aurora global database.
**/
export declare class FailoverState extends SpeakeasyBase {
    fromDbClusterArn?: string;
    status?: FailoverStatusEnum;
    toDbClusterArn?: string;
}
