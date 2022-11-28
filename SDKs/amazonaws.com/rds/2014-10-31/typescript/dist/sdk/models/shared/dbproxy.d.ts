import { SpeakeasyBase } from "../../../internal/utils";
import { UserAuthConfigInfo } from "./userauthconfiginfo";
import { DbProxyStatusEnum } from "./dbproxystatusenum";
/**
 * <p>The data structure representing a proxy managed by the RDS Proxy.</p> <p>This data type is used as a response element in the <code>DescribeDBProxies</code> action.</p>
**/
export declare class DbProxy extends SpeakeasyBase {
    auth?: UserAuthConfigInfo[];
    createdDate?: Date;
    dbProxyArn?: string;
    dbProxyName?: string;
    debugLogging?: boolean;
    endpoint?: string;
    engineFamily?: string;
    idleClientTimeout?: number;
    requireTls?: boolean;
    roleArn?: string;
    status?: DbProxyStatusEnum;
    updatedDate?: Date;
    vpcId?: string;
    vpcSecurityGroupIds?: string[];
    vpcSubnetIds?: string[];
}
