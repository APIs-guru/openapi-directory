import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Describes updates to the VPC configuration used by the application.
**/
export declare class VpcConfigurationUpdate extends SpeakeasyBase {
    securityGroupIdUpdates?: string[];
    subnetIdUpdates?: string[];
    vpcConfigurationId: string;
}
