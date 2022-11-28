import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ModelPackageValidationProfile } from "./modelpackagevalidationprofile";



// ModelPackageValidationSpecification
/** 
 * Specifies batch transform jobs that Amazon SageMaker runs to validate your model package.
**/
export class ModelPackageValidationSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ValidationProfiles", elemType: ModelPackageValidationProfile })
  validationProfiles: ModelPackageValidationProfile[];

  @SpeakeasyMetadata({ data: "json, name=ValidationRole" })
  validationRole: string;
}
