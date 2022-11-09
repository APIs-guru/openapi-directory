import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CacheHitResult } from "./cachehitresult";
import { PipelineExecutionStepMetadata } from "./pipelineexecutionstepmetadata";
import { StepStatusEnum } from "./stepstatusenum";


// PipelineExecutionStep
/** 
 * An execution of a step in a pipeline.
**/
export class PipelineExecutionStep extends SpeakeasyBase {
  @Metadata({ data: "json, name=CacheHitResult" })
  cacheHitResult?: CacheHitResult;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=Metadata" })
  metadata?: PipelineExecutionStepMetadata;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=StepName" })
  stepName?: string;

  @Metadata({ data: "json, name=StepStatus" })
  stepStatus?: StepStatusEnum;
}
