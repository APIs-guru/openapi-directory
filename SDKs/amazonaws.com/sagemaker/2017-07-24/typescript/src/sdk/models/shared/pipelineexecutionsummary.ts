import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PipelineExecutionStatusEnum } from "./pipelineexecutionstatusenum";



// PipelineExecutionSummary
/** 
 * A pipeline execution summary.
**/
export class PipelineExecutionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PipelineExecutionArn" })
  pipelineExecutionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=PipelineExecutionDescription" })
  pipelineExecutionDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=PipelineExecutionDisplayName" })
  pipelineExecutionDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=PipelineExecutionStatus" })
  pipelineExecutionStatus?: PipelineExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;
}
