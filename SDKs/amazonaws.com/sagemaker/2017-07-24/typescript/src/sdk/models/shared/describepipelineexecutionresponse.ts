import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserContext } from "./usercontext";
import { UserContext } from "./usercontext";
import { PipelineExecutionStatusEnum } from "./pipelineexecutionstatusenum";
import { PipelineExperimentConfig } from "./pipelineexperimentconfig";


export class DescribePipelineExecutionResponse extends SpeakeasyBase {
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
}
