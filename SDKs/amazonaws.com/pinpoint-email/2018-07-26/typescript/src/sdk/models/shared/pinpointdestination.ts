import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PinpointDestination
/** 
 * An object that defines a Amazon Pinpoint destination for email events. You can use Amazon Pinpoint events to create attributes in Amazon Pinpoint projects. You can use these attributes to create segments for your campaigns.
**/
export class PinpointDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationArn" })
  applicationArn?: string;
}
