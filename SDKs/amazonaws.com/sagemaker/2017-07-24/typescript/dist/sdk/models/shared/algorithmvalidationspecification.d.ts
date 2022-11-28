import { SpeakeasyBase } from "../../../internal/utils";
import { AlgorithmValidationProfile } from "./algorithmvalidationprofile";
/**
 * Specifies configurations for one or more training jobs that Amazon SageMaker runs to test the algorithm.
**/
export declare class AlgorithmValidationSpecification extends SpeakeasyBase {
    validationProfiles: AlgorithmValidationProfile[];
    validationRole: string;
}
