import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TrainingJobDefinition } from "./trainingjobdefinition";
import { TransformJobDefinition } from "./transformjobdefinition";


// AlgorithmValidationProfile
/** 
 * <p>Defines a training job and a batch transform job that Amazon SageMaker runs to validate your algorithm.</p> <p>The data provided in the validation profile is made available to your buyers on Amazon Web Services Marketplace.</p>
**/
export class AlgorithmValidationProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProfileName" })
  profileName: string;

  @Metadata({ data: "json, name=TrainingJobDefinition" })
  trainingJobDefinition: TrainingJobDefinition;

  @Metadata({ data: "json, name=TransformJobDefinition" })
  transformJobDefinition?: TransformJobDefinition;
}
