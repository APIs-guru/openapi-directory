import { SpeakeasyBase } from "../../../internal/utils";
import { Ec2SecurityGroup } from "./ec2securitygroup";
import { IpRange } from "./iprange";
export declare class DbSecurityGroup extends SpeakeasyBase {
    dbSecurityGroupDescription?: string;
    dbSecurityGroupName?: string;
    ec2SecurityGroups?: Ec2SecurityGroup[];
    ipRanges?: IpRange[];
    ownerId?: string;
    vpcId?: string;
}
