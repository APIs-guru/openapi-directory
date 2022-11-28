import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides details about an auto scaling group.
**/
export declare class AwsAutoScalingAutoScalingGroupDetails extends SpeakeasyBase {
    createdTime?: string;
    healthCheckGracePeriod?: number;
    healthCheckType?: string;
    launchConfigurationName?: string;
    loadBalancerNames?: string[];
}
