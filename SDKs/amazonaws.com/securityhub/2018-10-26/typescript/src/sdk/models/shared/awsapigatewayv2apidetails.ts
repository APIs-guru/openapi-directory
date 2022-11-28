import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsCorsConfiguration } from "./awscorsconfiguration";



// AwsApiGatewayV2ApiDetails
/** 
 * Contains information about a version 2 API in Amazon API Gateway.
**/
export class AwsApiGatewayV2ApiDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApiEndpoint" })
  apiEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=ApiId" })
  apiId?: string;

  @SpeakeasyMetadata({ data: "json, name=ApiKeySelectionExpression" })
  apiKeySelectionExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=CorsConfiguration" })
  corsConfiguration?: AwsCorsConfiguration;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ProtocolType" })
  protocolType?: string;

  @SpeakeasyMetadata({ data: "json, name=RouteSelectionExpression" })
  routeSelectionExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
