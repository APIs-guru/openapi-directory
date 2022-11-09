import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AlgorithmValidationProfile } from "./algorithmvalidationprofile";


// AlgorithmValidationSpecification
/** 
 * Specifies configurations for one or more training jobs that Amazon SageMaker runs to test the algorithm.
**/
export class AlgorithmValidationSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=ValidationProfiles", elemType: shared.AlgorithmValidationProfile })
  validationProfiles: AlgorithmValidationProfile[];

  @Metadata({ data: "json, name=ValidationRole" })
  validationRole: string;
}
