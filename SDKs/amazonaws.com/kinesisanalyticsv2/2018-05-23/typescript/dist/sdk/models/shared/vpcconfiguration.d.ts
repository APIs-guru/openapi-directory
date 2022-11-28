import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the parameters of a VPC used by the application.
**/
export declare class VpcConfiguration extends SpeakeasyBase {
    securityGroupIds: string[];
    subnetIds: string[];
}
