import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StandardsStatusEnum } from "./standardsstatusenum";



// StandardsSubscription
/** 
 * A resource that represents your subscription to a supported standard.
**/
export class StandardsSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StandardsArn" })
  standardsArn: string;

  @SpeakeasyMetadata({ data: "json, name=StandardsInput" })
  standardsInput: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=StandardsStatus" })
  standardsStatus: StandardsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StandardsSubscriptionArn" })
  standardsSubscriptionArn: string;
}
