import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsApiGatewayAccessLogSettings
/** 
 * Contains information about settings for logging access for the stage.
**/
export class AwsApiGatewayAccessLogSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationArn" })
  destinationArn?: string;

  @Metadata({ data: "json, name=Format" })
  format?: string;
}
