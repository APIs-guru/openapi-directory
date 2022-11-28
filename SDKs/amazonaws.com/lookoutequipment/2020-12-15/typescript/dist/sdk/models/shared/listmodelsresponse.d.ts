import { SpeakeasyBase } from "../../../internal/utils";
import { ModelSummary } from "./modelsummary";
export declare class ListModelsResponse extends SpeakeasyBase {
    modelSummaries?: ModelSummary[];
    nextToken?: string;
}
