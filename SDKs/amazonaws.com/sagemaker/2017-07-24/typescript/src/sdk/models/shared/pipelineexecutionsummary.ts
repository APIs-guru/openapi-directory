import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PipelineExecutionStatusEnum } from "./pipelineexecutionstatusenum";


// PipelineExecutionSummary
/** 
 * A pipeline execution summary.
**/
export class PipelineExecutionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=PipelineExecutionArn" })
  pipelineExecutionArn?: string;

  @Metadata({ data: "json, name=PipelineExecutionDescription" })
  pipelineExecutionDescription?: string;

  @Metadata({ data: "json, name=PipelineExecutionDisplayName" })
  pipelineExecutionDisplayName?: string;

  @Metadata({ data: "json, name=PipelineExecutionStatus" })
  pipelineExecutionStatus?: PipelineExecutionStatusEnum;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;
}
