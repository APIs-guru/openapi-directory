import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsApiGatewayEndpointConfiguration
/** 
 * Contains information about the endpoints for the API.
**/
export class AwsApiGatewayEndpointConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Types" })
  types?: string[];
}
