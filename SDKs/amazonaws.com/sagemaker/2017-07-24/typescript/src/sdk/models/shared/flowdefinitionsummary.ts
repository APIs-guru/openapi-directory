import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FlowDefinitionStatusEnum } from "./flowdefinitionstatusenum";



// FlowDefinitionSummary
/** 
 * Contains summary information about the flow definition.
**/
export class FlowDefinitionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=FlowDefinitionArn" })
  flowDefinitionArn: string;

  @SpeakeasyMetadata({ data: "json, name=FlowDefinitionName" })
  flowDefinitionName: string;

  @SpeakeasyMetadata({ data: "json, name=FlowDefinitionStatus" })
  flowDefinitionStatus: FlowDefinitionStatusEnum;
}
