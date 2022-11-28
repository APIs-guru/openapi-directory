import { SpeakeasyBase } from "../../../internal/utils";
import { ModelSummary } from "./modelsummary";
export declare class ListModelsOutput extends SpeakeasyBase {
    models: ModelSummary[];
    nextToken?: string;
}
