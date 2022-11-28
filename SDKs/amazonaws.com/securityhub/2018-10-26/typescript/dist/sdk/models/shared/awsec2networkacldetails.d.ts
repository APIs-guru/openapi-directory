import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2NetworkAclAssociation } from "./awsec2networkaclassociation";
import { AwsEc2NetworkAclEntry } from "./awsec2networkaclentry";
/**
 * Contains details about an EC2 network access control list (ACL).
**/
export declare class AwsEc2NetworkAclDetails extends SpeakeasyBase {
    associations?: AwsEc2NetworkAclAssociation[];
    entries?: AwsEc2NetworkAclEntry[];
    isDefault?: boolean;
    networkAclId?: string;
    ownerId?: string;
    vpcId?: string;
}
