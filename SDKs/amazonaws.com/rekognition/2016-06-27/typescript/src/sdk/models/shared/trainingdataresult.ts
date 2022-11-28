import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrainingData } from "./trainingdata";
import { ValidationData } from "./validationdata";



// TrainingDataResult
/** 
 * Sagemaker Groundtruth format manifest files for the input, output and validation datasets that are used and created during testing.
**/
export class TrainingDataResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Input" })
  input?: TrainingData;

  @SpeakeasyMetadata({ data: "json, name=Output" })
  output?: TrainingData;

  @SpeakeasyMetadata({ data: "json, name=Validation" })
  validation?: ValidationData;
}
