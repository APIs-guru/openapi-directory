import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbProxyEndpointStatusEnum } from "./dbproxyendpointstatusenum";
import { DbProxyEndpointTargetRoleEnum } from "./dbproxyendpointtargetroleenum";



// DbProxyEndpoint
/** 
 * <p>The data structure representing an endpoint associated with a DB proxy. RDS automatically creates one endpoint for each DB proxy. For Aurora DB clusters, you can associate additional endpoints with the same DB proxy. These endpoints can be read/write or read-only. They can also reside in different VPCs than the associated DB proxy.</p> <p>This data type is used as a response element in the <code>DescribeDBProxyEndpoints</code> operation.</p>
**/
export class DbProxyEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata()
  createdDate?: Date;

  @SpeakeasyMetadata()
  dbProxyEndpointArn?: string;

  @SpeakeasyMetadata()
  dbProxyEndpointName?: string;

  @SpeakeasyMetadata()
  dbProxyName?: string;

  @SpeakeasyMetadata()
  endpoint?: string;

  @SpeakeasyMetadata()
  isDefault?: boolean;

  @SpeakeasyMetadata()
  status?: DbProxyEndpointStatusEnum;

  @SpeakeasyMetadata()
  targetRole?: DbProxyEndpointTargetRoleEnum;

  @SpeakeasyMetadata()
  vpcId?: string;

  @SpeakeasyMetadata()
  vpcSecurityGroupIds?: string[];

  @SpeakeasyMetadata()
  vpcSubnetIds?: string[];
}
