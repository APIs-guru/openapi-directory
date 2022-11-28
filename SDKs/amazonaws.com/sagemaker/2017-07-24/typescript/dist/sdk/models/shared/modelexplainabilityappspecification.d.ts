import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Docker container image configuration object for the model explainability job.
**/
export declare class ModelExplainabilityAppSpecification extends SpeakeasyBase {
    configUri: string;
    environment?: Map<string, string>;
    imageUri: string;
}
