import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FlowDefinitionStatusEnum } from "./flowdefinitionstatusenum";


// FlowDefinitionSummary
/** 
 * Contains summary information about the flow definition.
**/
export class FlowDefinitionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=FlowDefinitionArn" })
  flowDefinitionArn: string;

  @Metadata({ data: "json, name=FlowDefinitionName" })
  flowDefinitionName: string;

  @Metadata({ data: "json, name=FlowDefinitionStatus" })
  flowDefinitionStatus: FlowDefinitionStatusEnum;
}
