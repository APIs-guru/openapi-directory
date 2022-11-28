import { SpeakeasyBase } from "../../../internal/utils";
import { AwsApiGatewayEndpointConfiguration } from "./awsapigatewayendpointconfiguration";
/**
 * Contains information about a REST API in version 1 of Amazon API Gateway.
**/
export declare class AwsApiGatewayRestApiDetails extends SpeakeasyBase {
    apiKeySource?: string;
    binaryMediaTypes?: string[];
    createdDate?: string;
    description?: string;
    endpointConfiguration?: AwsApiGatewayEndpointConfiguration;
    id?: string;
    minimumCompressionSize?: number;
    name?: string;
    version?: string;
}
