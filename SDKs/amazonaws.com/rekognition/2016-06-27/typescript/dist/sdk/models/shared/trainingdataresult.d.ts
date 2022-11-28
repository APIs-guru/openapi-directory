import { SpeakeasyBase } from "../../../internal/utils";
import { TrainingData } from "./trainingdata";
import { ValidationData } from "./validationdata";
/**
 * Sagemaker Groundtruth format manifest files for the input, output and validation datasets that are used and created during testing.
**/
export declare class TrainingDataResult extends SpeakeasyBase {
    input?: TrainingData;
    output?: TrainingData;
    validation?: ValidationData;
}
