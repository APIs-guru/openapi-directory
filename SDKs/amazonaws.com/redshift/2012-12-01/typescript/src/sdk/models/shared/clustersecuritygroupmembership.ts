import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClusterSecurityGroupMembership
/** 
 * Describes a cluster security group.
**/
export class ClusterSecurityGroupMembership extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clusterSecurityGroupName?: string;

  @SpeakeasyMetadata()
  status?: string;
}
