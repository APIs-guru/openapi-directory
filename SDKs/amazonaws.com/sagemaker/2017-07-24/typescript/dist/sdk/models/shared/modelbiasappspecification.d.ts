import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Docker container image configuration object for the model bias job.
**/
export declare class ModelBiasAppSpecification extends SpeakeasyBase {
    configUri: string;
    environment?: Map<string, string>;
    imageUri: string;
}
