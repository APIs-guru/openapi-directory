import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsApiGatewayEndpointConfiguration
/** 
 * Contains information about the endpoints for the API.
**/
export class AwsApiGatewayEndpointConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Types" })
  types?: string[];
}
