import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsApiGatewayEndpointConfiguration } from "./awsapigatewayendpointconfiguration";



// AwsApiGatewayRestApiDetails
/** 
 * Contains information about a REST API in version 1 of Amazon API Gateway.
**/
export class AwsApiGatewayRestApiDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApiKeySource" })
  apiKeySource?: string;

  @SpeakeasyMetadata({ data: "json, name=BinaryMediaTypes" })
  binaryMediaTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointConfiguration" })
  endpointConfiguration?: AwsApiGatewayEndpointConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=MinimumCompressionSize" })
  minimumCompressionSize?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
