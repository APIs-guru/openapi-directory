import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>This data type represents the information you need to connect to an Amazon Aurora DB cluster. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBClusterEndpoint</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>ModifyDBClusterEndpoint</code> </p> </li> <li> <p> <code>DeleteDBClusterEndpoint</code> </p> </li> </ul> <p>For the data structure that represents Amazon RDS DB instance endpoints, see <code>Endpoint</code>.</p>
**/
export declare class DbClusterEndpoint extends SpeakeasyBase {
    customEndpointType?: string;
    dbClusterEndpointArn?: string;
    dbClusterEndpointIdentifier?: string;
    dbClusterEndpointResourceIdentifier?: string;
    dbClusterIdentifier?: string;
    endpoint?: string;
    endpointType?: string;
    excludedMembers?: string[];
    staticMembers?: string[];
    status?: string;
}
