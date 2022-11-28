import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HumanLoopStatusEnum } from "./humanloopstatusenum";



// HumanLoopSummary
/** 
 * Summary information about the human loop.
**/
export class HumanLoopSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=FlowDefinitionArn" })
  flowDefinitionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=HumanLoopName" })
  humanLoopName?: string;

  @SpeakeasyMetadata({ data: "json, name=HumanLoopStatus" })
  humanLoopStatus?: HumanLoopStatusEnum;
}
