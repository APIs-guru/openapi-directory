import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerDefinition } from "./containerdefinition";
import { InferenceExecutionConfig } from "./inferenceexecutionconfig";
import { Tag } from "./tag";
import { VpcConfig } from "./vpcconfig";
export declare class CreateModelInput extends SpeakeasyBase {
    containers?: ContainerDefinition[];
    enableNetworkIsolation?: boolean;
    executionRoleArn: string;
    inferenceExecutionConfig?: InferenceExecutionConfig;
    modelName: string;
    primaryContainer?: ContainerDefinition;
    tags?: Tag[];
    vpcConfig?: VpcConfig;
}
