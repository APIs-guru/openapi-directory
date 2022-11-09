import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Describes the parameters of a VPC used by the application.
**/
export declare class VpcConfigurationDescription extends SpeakeasyBase {
    securityGroupIds: string[];
    subnetIds: string[];
    vpcConfigurationId: string;
    vpcId: string;
}
