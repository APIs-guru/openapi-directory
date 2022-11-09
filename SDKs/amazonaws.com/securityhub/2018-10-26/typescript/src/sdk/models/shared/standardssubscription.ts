import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StandardsStatusEnum } from "./standardsstatusenum";


// StandardsSubscription
/** 
 * A resource that represents your subscription to a supported standard.
**/
export class StandardsSubscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=StandardsArn" })
  standardsArn: string;

  @Metadata({ data: "json, name=StandardsInput" })
  standardsInput: Map<string, string>;

  @Metadata({ data: "json, name=StandardsStatus" })
  standardsStatus: StandardsStatusEnum;

  @Metadata({ data: "json, name=StandardsSubscriptionArn" })
  standardsSubscriptionArn: string;
}
