import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ModelPackageValidationProfile } from "./modelpackagevalidationprofile";


// ModelPackageValidationSpecification
/** 
 * Specifies batch transform jobs that Amazon SageMaker runs to validate your model package.
**/
export class ModelPackageValidationSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=ValidationProfiles", elemType: shared.ModelPackageValidationProfile })
  validationProfiles: ModelPackageValidationProfile[];

  @Metadata({ data: "json, name=ValidationRole" })
  validationRole: string;
}
