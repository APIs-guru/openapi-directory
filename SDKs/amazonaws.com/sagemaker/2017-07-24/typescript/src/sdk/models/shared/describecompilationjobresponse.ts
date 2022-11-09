import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CompilationJobStatusEnum } from "./compilationjobstatusenum";
import { InputConfig } from "./inputconfig";
import { ModelArtifacts } from "./modelartifacts";
import { ModelDigests } from "./modeldigests";
import { OutputConfig } from "./outputconfig";
import { StoppingCondition } from "./stoppingcondition";
import { NeoVpcConfig } from "./neovpcconfig";


export class DescribeCompilationJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CompilationEndTime" })
  compilationEndTime?: Date;

  @Metadata({ data: "json, name=CompilationJobArn" })
  compilationJobArn: string;

  @Metadata({ data: "json, name=CompilationJobName" })
  compilationJobName: string;

  @Metadata({ data: "json, name=CompilationJobStatus" })
  compilationJobStatus: CompilationJobStatusEnum;

  @Metadata({ data: "json, name=CompilationStartTime" })
  compilationStartTime?: Date;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason: string;

  @Metadata({ data: "json, name=InferenceImage" })
  inferenceImage?: string;

  @Metadata({ data: "json, name=InputConfig" })
  inputConfig: InputConfig;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime: Date;

  @Metadata({ data: "json, name=ModelArtifacts" })
  modelArtifacts: ModelArtifacts;

  @Metadata({ data: "json, name=ModelDigests" })
  modelDigests?: ModelDigests;

  @Metadata({ data: "json, name=OutputConfig" })
  outputConfig: OutputConfig;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=StoppingCondition" })
  stoppingCondition: StoppingCondition;

  @Metadata({ data: "json, name=VpcConfig" })
  vpcConfig?: NeoVpcConfig;
}
