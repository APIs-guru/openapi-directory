import { SpeakeasyBase } from "../../../internal/utils";
import { EdgePackagingJobStatusEnum } from "./edgepackagingjobstatusenum";
import { EdgeOutputConfig } from "./edgeoutputconfig";
import { EdgePresetDeploymentOutput } from "./edgepresetdeploymentoutput";
export declare class DescribeEdgePackagingJobResponse extends SpeakeasyBase {
    compilationJobName?: string;
    creationTime?: Date;
    edgePackagingJobArn: string;
    edgePackagingJobName: string;
    edgePackagingJobStatus: EdgePackagingJobStatusEnum;
    edgePackagingJobStatusMessage?: string;
    lastModifiedTime?: Date;
    modelArtifact?: string;
    modelName?: string;
    modelSignature?: string;
    modelVersion?: string;
    outputConfig?: EdgeOutputConfig;
    presetDeploymentOutput?: EdgePresetDeploymentOutput;
    resourceKey?: string;
    roleArn?: string;
}
