import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>This data type represents the information you need to connect to an Amazon RDS DB instance. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBInstance</code> </p> </li> <li> <p> <code>DescribeDBInstances</code> </p> </li> <li> <p> <code>DeleteDBInstance</code> </p> </li> </ul> <p>For the data structure that represents Amazon Aurora DB cluster endpoints, see <code>DBClusterEndpoint</code>.</p>
**/
export declare class Endpoint extends SpeakeasyBase {
    address?: string;
    hostedZoneId?: string;
    port?: number;
}
