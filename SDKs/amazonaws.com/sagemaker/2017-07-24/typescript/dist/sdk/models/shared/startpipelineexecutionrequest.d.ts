import { SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";
export declare class StartPipelineExecutionRequest extends SpeakeasyBase {
    clientRequestToken: string;
    pipelineExecutionDescription?: string;
    pipelineExecutionDisplayName?: string;
    pipelineName: string;
    pipelineParameters?: Parameter[];
}
