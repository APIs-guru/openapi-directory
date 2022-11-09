import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsApiGatewayEndpointConfiguration } from "./awsapigatewayendpointconfiguration";


// AwsApiGatewayRestApiDetails
/** 
 * Contains information about a REST API in version 1 of Amazon API Gateway.
**/
export class AwsApiGatewayRestApiDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApiKeySource" })
  apiKeySource?: string;

  @Metadata({ data: "json, name=BinaryMediaTypes" })
  binaryMediaTypes?: string[];

  @Metadata({ data: "json, name=CreatedDate" })
  createdDate?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EndpointConfiguration" })
  endpointConfiguration?: AwsApiGatewayEndpointConfiguration;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=MinimumCompressionSize" })
  minimumCompressionSize?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
