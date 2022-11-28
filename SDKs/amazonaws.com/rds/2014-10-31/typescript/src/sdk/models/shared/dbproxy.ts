import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserAuthConfigInfo } from "./userauthconfiginfo";
import { DbProxyStatusEnum } from "./dbproxystatusenum";



// DbProxy
/** 
 * <p>The data structure representing a proxy managed by the RDS Proxy.</p> <p>This data type is used as a response element in the <code>DescribeDBProxies</code> action.</p>
**/
export class DbProxy extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: UserAuthConfigInfo })
  auth?: UserAuthConfigInfo[];

  @SpeakeasyMetadata()
  createdDate?: Date;

  @SpeakeasyMetadata()
  dbProxyArn?: string;

  @SpeakeasyMetadata()
  dbProxyName?: string;

  @SpeakeasyMetadata()
  debugLogging?: boolean;

  @SpeakeasyMetadata()
  endpoint?: string;

  @SpeakeasyMetadata()
  engineFamily?: string;

  @SpeakeasyMetadata()
  idleClientTimeout?: number;

  @SpeakeasyMetadata()
  requireTls?: boolean;

  @SpeakeasyMetadata()
  roleArn?: string;

  @SpeakeasyMetadata()
  status?: DbProxyStatusEnum;

  @SpeakeasyMetadata()
  updatedDate?: Date;

  @SpeakeasyMetadata()
  vpcId?: string;

  @SpeakeasyMetadata()
  vpcSecurityGroupIds?: string[];

  @SpeakeasyMetadata()
  vpcSubnetIds?: string[];
}
