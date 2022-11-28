import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerDefinition } from "./containerdefinition";
import { InferenceExecutionConfig } from "./inferenceexecutionconfig";
import { VpcConfig } from "./vpcconfig";
export declare class DescribeModelOutput extends SpeakeasyBase {
    containers?: ContainerDefinition[];
    creationTime: Date;
    enableNetworkIsolation?: boolean;
    executionRoleArn: string;
    inferenceExecutionConfig?: InferenceExecutionConfig;
    modelArn: string;
    modelName: string;
    primaryContainer?: ContainerDefinition;
    vpcConfig?: VpcConfig;
}
