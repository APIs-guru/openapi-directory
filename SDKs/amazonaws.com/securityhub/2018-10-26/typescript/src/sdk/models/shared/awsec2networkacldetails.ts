import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsEc2NetworkAclAssociation } from "./awsec2networkaclassociation";
import { AwsEc2NetworkAclEntry } from "./awsec2networkaclentry";


// AwsEc2NetworkAclDetails
/** 
 * Contains details about an EC2 network access control list (ACL).
**/
export class AwsEc2NetworkAclDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Associations", elemType: shared.AwsEc2NetworkAclAssociation })
  associations?: AwsEc2NetworkAclAssociation[];

  @Metadata({ data: "json, name=Entries", elemType: shared.AwsEc2NetworkAclEntry })
  entries?: AwsEc2NetworkAclEntry[];

  @Metadata({ data: "json, name=IsDefault" })
  isDefault?: boolean;

  @Metadata({ data: "json, name=NetworkAclId" })
  networkAclId?: string;

  @Metadata({ data: "json, name=OwnerId" })
  ownerId?: string;

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
