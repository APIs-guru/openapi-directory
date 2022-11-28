import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcEndpoint } from "./vpcendpoint";
import { VpcSecurityGroupMembership } from "./vpcsecuritygroupmembership";



// EndpointAccess
/** 
 * Describes a Redshift-managed VPC endpoint.
**/
export class EndpointAccess extends SpeakeasyBase {
  @SpeakeasyMetadata()
  address?: string;

  @SpeakeasyMetadata()
  clusterIdentifier?: string;

  @SpeakeasyMetadata()
  endpointCreateTime?: Date;

  @SpeakeasyMetadata()
  endpointName?: string;

  @SpeakeasyMetadata()
  endpointStatus?: string;

  @SpeakeasyMetadata()
  port?: number;

  @SpeakeasyMetadata()
  resourceOwner?: string;

  @SpeakeasyMetadata()
  subnetGroupName?: string;

  @SpeakeasyMetadata()
  vpcEndpoint?: VpcEndpoint;

  @SpeakeasyMetadata({ elemType: VpcSecurityGroupMembership })
  vpcSecurityGroups?: VpcSecurityGroupMembership[];
}
