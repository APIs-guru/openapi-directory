import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreatePipelineRequest extends SpeakeasyBase {
    clientRequestToken: string;
    pipelineDefinition: string;
    pipelineDescription?: string;
    pipelineDisplayName?: string;
    pipelineName: string;
    roleArn: string;
    tags?: Tag[];
}
