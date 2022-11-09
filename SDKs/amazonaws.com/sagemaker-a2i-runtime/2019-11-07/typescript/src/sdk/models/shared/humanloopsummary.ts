import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HumanLoopStatusEnum } from "./humanloopstatusenum";


// HumanLoopSummary
/** 
 * Summary information about the human loop.
**/
export class HumanLoopSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=FlowDefinitionArn" })
  flowDefinitionArn?: string;

  @Metadata({ data: "json, name=HumanLoopName" })
  humanLoopName?: string;

  @Metadata({ data: "json, name=HumanLoopStatus" })
  humanLoopStatus?: HumanLoopStatusEnum;
}
