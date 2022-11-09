import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TrainingData } from "./trainingdata";
import { TrainingData } from "./trainingdata";
import { ValidationData } from "./validationdata";


// TrainingDataResult
/** 
 * Sagemaker Groundtruth format manifest files for the input, output and validation datasets that are used and created during testing.
**/
export class TrainingDataResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Input" })
  input?: TrainingData;

  @Metadata({ data: "json, name=Output" })
  output?: TrainingData;

  @Metadata({ data: "json, name=Validation" })
  validation?: ValidationData;
}
