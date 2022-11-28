import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { PipelineExecutionStatusEnum } from "./pipelineexecutionstatusenum";
import { PipelineExperimentConfig } from "./pipelineexperimentconfig";
import { Parameter } from "./parameter";



// PipelineExecution
/** 
 * An execution of a pipeline.
**/
export class PipelineExecution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedBy" })
  createdBy?: UserContext;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedBy" })
  lastModifiedBy?: UserContext;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=PipelineArn" })
  pipelineArn?: string;

  @SpeakeasyMetadata({ data: "json, name=PipelineExecutionArn" })
  pipelineExecutionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=PipelineExecutionDescription" })
  pipelineExecutionDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=PipelineExecutionDisplayName" })
  pipelineExecutionDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=PipelineExecutionStatus" })
  pipelineExecutionStatus?: PipelineExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=PipelineExperimentConfig" })
  pipelineExperimentConfig?: PipelineExperimentConfig;

  @SpeakeasyMetadata({ data: "json, name=PipelineParameters", elemType: Parameter })
  pipelineParameters?: Parameter[];
}
