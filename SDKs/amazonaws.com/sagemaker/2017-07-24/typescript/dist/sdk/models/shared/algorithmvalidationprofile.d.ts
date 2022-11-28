import { SpeakeasyBase } from "../../../internal/utils";
import { TrainingJobDefinition } from "./trainingjobdefinition";
import { TransformJobDefinition } from "./transformjobdefinition";
/**
 * <p>Defines a training job and a batch transform job that Amazon SageMaker runs to validate your algorithm.</p> <p>The data provided in the validation profile is made available to your buyers on Amazon Web Services Marketplace.</p>
**/
export declare class AlgorithmValidationProfile extends SpeakeasyBase {
    profileName: string;
    trainingJobDefinition: TrainingJobDefinition;
    transformJobDefinition?: TransformJobDefinition;
}
