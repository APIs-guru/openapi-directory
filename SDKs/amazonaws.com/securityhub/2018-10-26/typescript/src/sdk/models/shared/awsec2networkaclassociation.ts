import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEc2NetworkAclAssociation
/** 
 * An association between the network ACL and a subnet.
**/
export class AwsEc2NetworkAclAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NetworkAclAssociationId" })
  networkAclAssociationId?: string;

  @SpeakeasyMetadata({ data: "json, name=NetworkAclId" })
  networkAclId?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetId" })
  subnetId?: string;
}
