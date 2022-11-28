import { SpeakeasyBase } from "../../../internal/utils";
import { AwsCorsConfiguration } from "./awscorsconfiguration";
/**
 * Contains information about a version 2 API in Amazon API Gateway.
**/
export declare class AwsApiGatewayV2ApiDetails extends SpeakeasyBase {
    apiEndpoint?: string;
    apiId?: string;
    apiKeySelectionExpression?: string;
    corsConfiguration?: AwsCorsConfiguration;
    createdDate?: string;
    description?: string;
    name?: string;
    protocolType?: string;
    routeSelectionExpression?: string;
    version?: string;
}
