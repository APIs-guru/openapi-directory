import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StandardsSubscriptionRequest
/** 
 * The standard that you want to enable.
**/
export class StandardsSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StandardsArn" })
  standardsArn: string;

  @SpeakeasyMetadata({ data: "json, name=StandardsInput" })
  standardsInput?: Map<string, string>;
}
