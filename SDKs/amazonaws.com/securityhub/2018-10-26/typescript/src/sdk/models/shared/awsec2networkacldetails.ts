import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2NetworkAclAssociation } from "./awsec2networkaclassociation";
import { AwsEc2NetworkAclEntry } from "./awsec2networkaclentry";



// AwsEc2NetworkAclDetails
/** 
 * Contains details about an EC2 network access control list (ACL).
**/
export class AwsEc2NetworkAclDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Associations", elemType: AwsEc2NetworkAclAssociation })
  associations?: AwsEc2NetworkAclAssociation[];

  @SpeakeasyMetadata({ data: "json, name=Entries", elemType: AwsEc2NetworkAclEntry })
  entries?: AwsEc2NetworkAclEntry[];

  @SpeakeasyMetadata({ data: "json, name=IsDefault" })
  isDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=NetworkAclId" })
  networkAclId?: string;

  @SpeakeasyMetadata({ data: "json, name=OwnerId" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
