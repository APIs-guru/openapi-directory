import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes updates to the VPC configuration used by the application.
**/
export declare class VpcConfigurationUpdate extends SpeakeasyBase {
    securityGroupIdUpdates?: string[];
    subnetIdUpdates?: string[];
    vpcConfigurationId: string;
}
