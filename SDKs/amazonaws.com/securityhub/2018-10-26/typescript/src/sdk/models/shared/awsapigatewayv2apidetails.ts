import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsCorsConfiguration } from "./awscorsconfiguration";


// AwsApiGatewayV2ApiDetails
/** 
 * Contains information about a version 2 API in Amazon API Gateway.
**/
export class AwsApiGatewayV2ApiDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApiEndpoint" })
  apiEndpoint?: string;

  @Metadata({ data: "json, name=ApiId" })
  apiId?: string;

  @Metadata({ data: "json, name=ApiKeySelectionExpression" })
  apiKeySelectionExpression?: string;

  @Metadata({ data: "json, name=CorsConfiguration" })
  corsConfiguration?: AwsCorsConfiguration;

  @Metadata({ data: "json, name=CreatedDate" })
  createdDate?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ProtocolType" })
  protocolType?: string;

  @Metadata({ data: "json, name=RouteSelectionExpression" })
  routeSelectionExpression?: string;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
