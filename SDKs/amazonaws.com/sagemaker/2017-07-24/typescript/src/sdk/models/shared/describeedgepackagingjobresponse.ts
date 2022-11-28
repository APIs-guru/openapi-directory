import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EdgePackagingJobStatusEnum } from "./edgepackagingjobstatusenum";
import { EdgeOutputConfig } from "./edgeoutputconfig";
import { EdgePresetDeploymentOutput } from "./edgepresetdeploymentoutput";



export class DescribeEdgePackagingJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CompilationJobName" })
  compilationJobName?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=EdgePackagingJobArn" })
  edgePackagingJobArn: string;

  @SpeakeasyMetadata({ data: "json, name=EdgePackagingJobName" })
  edgePackagingJobName: string;

  @SpeakeasyMetadata({ data: "json, name=EdgePackagingJobStatus" })
  edgePackagingJobStatus: EdgePackagingJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=EdgePackagingJobStatusMessage" })
  edgePackagingJobStatusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ModelArtifact" })
  modelArtifact?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelName" })
  modelName?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelSignature" })
  modelSignature?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelVersion" })
  modelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputConfig" })
  outputConfig?: EdgeOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=PresetDeploymentOutput" })
  presetDeploymentOutput?: EdgePresetDeploymentOutput;

  @SpeakeasyMetadata({ data: "json, name=ResourceKey" })
  resourceKey?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}
