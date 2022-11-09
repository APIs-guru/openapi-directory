import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StandardsSubscriptionRequest
/** 
 * The standard that you want to enable.
**/
export class StandardsSubscriptionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=StandardsArn" })
  standardsArn: string;

  @Metadata({ data: "json, name=StandardsInput" })
  standardsInput?: Map<string, string>;
}
