import { SpeakeasyBase } from "../../../internal/utils";
import { CompilationJobStatusEnum } from "./compilationjobstatusenum";
import { InputConfig } from "./inputconfig";
import { ModelArtifacts } from "./modelartifacts";
import { ModelDigests } from "./modeldigests";
import { OutputConfig } from "./outputconfig";
import { StoppingCondition } from "./stoppingcondition";
import { NeoVpcConfig } from "./neovpcconfig";
export declare class DescribeCompilationJobResponse extends SpeakeasyBase {
    compilationEndTime?: Date;
    compilationJobArn: string;
    compilationJobName: string;
    compilationJobStatus: CompilationJobStatusEnum;
    compilationStartTime?: Date;
    creationTime: Date;
    failureReason: string;
    inferenceImage?: string;
    inputConfig: InputConfig;
    lastModifiedTime: Date;
    modelArtifacts: ModelArtifacts;
    modelDigests?: ModelDigests;
    outputConfig: OutputConfig;
    roleArn: string;
    stoppingCondition: StoppingCondition;
    vpcConfig?: NeoVpcConfig;
}
