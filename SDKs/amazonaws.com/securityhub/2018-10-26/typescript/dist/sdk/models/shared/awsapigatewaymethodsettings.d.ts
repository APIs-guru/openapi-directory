import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines settings for a method for the stage.
**/
export declare class AwsApiGatewayMethodSettings extends SpeakeasyBase {
    cacheDataEncrypted?: boolean;
    cacheTtlInSeconds?: number;
    cachingEnabled?: boolean;
    dataTraceEnabled?: boolean;
    httpMethod?: string;
    loggingLevel?: string;
    metricsEnabled?: boolean;
    requireAuthorizationForCacheControl?: boolean;
    resourcePath?: string;
    throttlingBurstLimit?: number;
    throttlingRateLimit?: number;
    unauthorizedCacheControlHeaderStrategy?: string;
}
