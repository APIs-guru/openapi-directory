import { SpeakeasyBase } from "../../../internal/utils";
import { InferenceSpecification } from "./inferencespecification";
import { Tag } from "./tag";
import { TrainingSpecification } from "./trainingspecification";
import { AlgorithmValidationSpecification } from "./algorithmvalidationspecification";
export declare class CreateAlgorithmInput extends SpeakeasyBase {
    algorithmDescription?: string;
    algorithmName: string;
    certifyForMarketplace?: boolean;
    inferenceSpecification?: InferenceSpecification;
    tags?: Tag[];
    trainingSpecification: TrainingSpecification;
    validationSpecification?: AlgorithmValidationSpecification;
}
