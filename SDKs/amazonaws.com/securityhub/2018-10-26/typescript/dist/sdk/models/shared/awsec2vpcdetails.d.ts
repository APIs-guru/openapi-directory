import { SpeakeasyBase } from "../../../internal/utils";
import { CidrBlockAssociation } from "./cidrblockassociation";
import { Ipv6CidrBlockAssociation } from "./ipv6cidrblockassociation";
/**
 * Details about an EC2 VPC.
**/
export declare class AwsEc2VpcDetails extends SpeakeasyBase {
    cidrBlockAssociationSet?: CidrBlockAssociation[];
    dhcpOptionsId?: string;
    ipv6CidrBlockAssociationSet?: Ipv6CidrBlockAssociation[];
    state?: string;
}
