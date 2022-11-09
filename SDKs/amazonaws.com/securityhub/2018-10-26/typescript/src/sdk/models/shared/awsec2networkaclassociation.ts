import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEc2NetworkAclAssociation
/** 
 * An association between the network ACL and a subnet.
**/
export class AwsEc2NetworkAclAssociation extends SpeakeasyBase {
  @Metadata({ data: "json, name=NetworkAclAssociationId" })
  networkAclAssociationId?: string;

  @Metadata({ data: "json, name=NetworkAclId" })
  networkAclId?: string;

  @Metadata({ data: "json, name=SubnetId" })
  subnetId?: string;
}
