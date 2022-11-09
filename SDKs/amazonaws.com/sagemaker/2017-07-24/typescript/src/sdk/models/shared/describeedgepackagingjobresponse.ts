import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EdgePackagingJobStatusEnum } from "./edgepackagingjobstatusenum";
import { EdgeOutputConfig } from "./edgeoutputconfig";
import { EdgePresetDeploymentOutput } from "./edgepresetdeploymentoutput";


export class DescribeEdgePackagingJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CompilationJobName" })
  compilationJobName?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=EdgePackagingJobArn" })
  edgePackagingJobArn: string;

  @Metadata({ data: "json, name=EdgePackagingJobName" })
  edgePackagingJobName: string;

  @Metadata({ data: "json, name=EdgePackagingJobStatus" })
  edgePackagingJobStatus: EdgePackagingJobStatusEnum;

  @Metadata({ data: "json, name=EdgePackagingJobStatusMessage" })
  edgePackagingJobStatusMessage?: string;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=ModelArtifact" })
  modelArtifact?: string;

  @Metadata({ data: "json, name=ModelName" })
  modelName?: string;

  @Metadata({ data: "json, name=ModelSignature" })
  modelSignature?: string;

  @Metadata({ data: "json, name=ModelVersion" })
  modelVersion?: string;

  @Metadata({ data: "json, name=OutputConfig" })
  outputConfig?: EdgeOutputConfig;

  @Metadata({ data: "json, name=PresetDeploymentOutput" })
  presetDeploymentOutput?: EdgePresetDeploymentOutput;

  @Metadata({ data: "json, name=ResourceKey" })
  resourceKey?: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}
