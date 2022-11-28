import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlgorithmValidationProfile } from "./algorithmvalidationprofile";



// AlgorithmValidationSpecification
/** 
 * Specifies configurations for one or more training jobs that Amazon SageMaker runs to test the algorithm.
**/
export class AlgorithmValidationSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ValidationProfiles", elemType: AlgorithmValidationProfile })
  validationProfiles: AlgorithmValidationProfile[];

  @SpeakeasyMetadata({ data: "json, name=ValidationRole" })
  validationRole: string;
}
