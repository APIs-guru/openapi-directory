import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A complex type that controls whether access logs are written for the distribution.
**/
export declare class AwsCloudFrontDistributionLogging extends SpeakeasyBase {
    bucket?: string;
    enabled?: boolean;
    includeCookies?: boolean;
    prefix?: string;
}
