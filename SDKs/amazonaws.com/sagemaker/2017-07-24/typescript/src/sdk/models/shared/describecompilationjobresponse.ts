import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompilationJobStatusEnum } from "./compilationjobstatusenum";
import { InputConfig } from "./inputconfig";
import { ModelArtifacts } from "./modelartifacts";
import { ModelDigests } from "./modeldigests";
import { OutputConfig } from "./outputconfig";
import { StoppingCondition } from "./stoppingcondition";
import { NeoVpcConfig } from "./neovpcconfig";



export class DescribeCompilationJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CompilationEndTime" })
  compilationEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=CompilationJobArn" })
  compilationJobArn: string;

  @SpeakeasyMetadata({ data: "json, name=CompilationJobName" })
  compilationJobName: string;

  @SpeakeasyMetadata({ data: "json, name=CompilationJobStatus" })
  compilationJobStatus: CompilationJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=CompilationStartTime" })
  compilationStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason: string;

  @SpeakeasyMetadata({ data: "json, name=InferenceImage" })
  inferenceImage?: string;

  @SpeakeasyMetadata({ data: "json, name=InputConfig" })
  inputConfig: InputConfig;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime: Date;

  @SpeakeasyMetadata({ data: "json, name=ModelArtifacts" })
  modelArtifacts: ModelArtifacts;

  @SpeakeasyMetadata({ data: "json, name=ModelDigests" })
  modelDigests?: ModelDigests;

  @SpeakeasyMetadata({ data: "json, name=OutputConfig" })
  outputConfig: OutputConfig;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=StoppingCondition" })
  stoppingCondition: StoppingCondition;

  @SpeakeasyMetadata({ data: "json, name=VpcConfig" })
  vpcConfig?: NeoVpcConfig;
}
