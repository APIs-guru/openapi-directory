import { SpeakeasyBase } from "../../../internal/utils";
import { DbProxyEndpointStatusEnum } from "./dbproxyendpointstatusenum";
import { DbProxyEndpointTargetRoleEnum } from "./dbproxyendpointtargetroleenum";
/**
 * <p>The data structure representing an endpoint associated with a DB proxy. RDS automatically creates one endpoint for each DB proxy. For Aurora DB clusters, you can associate additional endpoints with the same DB proxy. These endpoints can be read/write or read-only. They can also reside in different VPCs than the associated DB proxy.</p> <p>This data type is used as a response element in the <code>DescribeDBProxyEndpoints</code> operation.</p>
**/
export declare class DbProxyEndpoint extends SpeakeasyBase {
    createdDate?: Date;
    dbProxyEndpointArn?: string;
    dbProxyEndpointName?: string;
    dbProxyName?: string;
    endpoint?: string;
    isDefault?: boolean;
    status?: DbProxyEndpointStatusEnum;
    targetRole?: DbProxyEndpointTargetRoleEnum;
    vpcId?: string;
    vpcSecurityGroupIds?: string[];
    vpcSubnetIds?: string[];
}
