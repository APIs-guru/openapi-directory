import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsApiGatewayAccessLogSettings
/** 
 * Contains information about settings for logging access for the stage.
**/
export class AwsApiGatewayAccessLogSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationArn" })
  destinationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Format" })
  format?: string;
}
