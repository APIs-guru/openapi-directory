import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserContext } from "./usercontext";
import { UserContext } from "./usercontext";
import { PipelineExecutionStatusEnum } from "./pipelineexecutionstatusenum";
import { PipelineExperimentConfig } from "./pipelineexperimentconfig";
import { Parameter } from "./parameter";


// PipelineExecution
/** 
 * An execution of a pipeline.
**/
export class PipelineExecution extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedBy" })
  createdBy?: UserContext;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=LastModifiedBy" })
  lastModifiedBy?: UserContext;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=PipelineArn" })
  pipelineArn?: string;

  @Metadata({ data: "json, name=PipelineExecutionArn" })
  pipelineExecutionArn?: string;

  @Metadata({ data: "json, name=PipelineExecutionDescription" })
  pipelineExecutionDescription?: string;

  @Metadata({ data: "json, name=PipelineExecutionDisplayName" })
  pipelineExecutionDisplayName?: string;

  @Metadata({ data: "json, name=PipelineExecutionStatus" })
  pipelineExecutionStatus?: PipelineExecutionStatusEnum;

  @Metadata({ data: "json, name=PipelineExperimentConfig" })
  pipelineExperimentConfig?: PipelineExperimentConfig;

  @Metadata({ data: "json, name=PipelineParameters", elemType: shared.Parameter })
  pipelineParameters?: Parameter[];
}
