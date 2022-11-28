import { SpeakeasyBase } from "../../../internal/utils";
import { HumanLoopActivationConfig } from "./humanloopactivationconfig";
import { HumanLoopConfig } from "./humanloopconfig";
import { HumanLoopRequestSource } from "./humanlooprequestsource";
import { FlowDefinitionOutputConfig } from "./flowdefinitionoutputconfig";
import { Tag } from "./tag";
export declare class CreateFlowDefinitionRequest extends SpeakeasyBase {
    flowDefinitionName: string;
    humanLoopActivationConfig?: HumanLoopActivationConfig;
    humanLoopConfig: HumanLoopConfig;
    humanLoopRequestSource?: HumanLoopRequestSource;
    outputConfig: FlowDefinitionOutputConfig;
    roleArn: string;
    tags?: Tag[];
}
