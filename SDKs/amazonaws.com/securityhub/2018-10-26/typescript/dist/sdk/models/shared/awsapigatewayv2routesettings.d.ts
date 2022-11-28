import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains route settings for a stage.
**/
export declare class AwsApiGatewayV2RouteSettings extends SpeakeasyBase {
    dataTraceEnabled?: boolean;
    detailedMetricsEnabled?: boolean;
    loggingLevel?: string;
    throttlingBurstLimit?: number;
    throttlingRateLimit?: number;
}
