import { SpeakeasyBase } from "../../../internal/utils";
import { ModelPackageValidationProfile } from "./modelpackagevalidationprofile";
/**
 * Specifies batch transform jobs that Amazon SageMaker runs to validate your model package.
**/
export declare class ModelPackageValidationSpecification extends SpeakeasyBase {
    validationProfiles: ModelPackageValidationProfile[];
    validationRole: string;
}
