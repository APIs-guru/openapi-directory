import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheHitResult } from "./cachehitresult";
import { PipelineExecutionStepMetadata } from "./pipelineexecutionstepmetadata";
import { StepStatusEnum } from "./stepstatusenum";



// PipelineExecutionStep
/** 
 * An execution of a step in a pipeline.
**/
export class PipelineExecutionStep extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CacheHitResult" })
  cacheHitResult?: CacheHitResult;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata?: PipelineExecutionStepMetadata;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=StepName" })
  stepName?: string;

  @SpeakeasyMetadata({ data: "json, name=StepStatus" })
  stepStatus?: StepStatusEnum;
}
