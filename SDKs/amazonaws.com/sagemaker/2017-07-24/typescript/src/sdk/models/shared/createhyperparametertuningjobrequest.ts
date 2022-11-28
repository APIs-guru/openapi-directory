import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HyperParameterTuningJobConfig } from "./hyperparametertuningjobconfig";
import { Tag } from "./tag";
import { HyperParameterTrainingJobDefinition } from "./hyperparametertrainingjobdefinition";
import { HyperParameterTuningJobWarmStartConfig } from "./hyperparametertuningjobwarmstartconfig";



export class CreateHyperParameterTuningJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HyperParameterTuningJobConfig" })
  hyperParameterTuningJobConfig: HyperParameterTuningJobConfig;

  @SpeakeasyMetadata({ data: "json, name=HyperParameterTuningJobName" })
  hyperParameterTuningJobName: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=TrainingJobDefinition" })
  trainingJobDefinition?: HyperParameterTrainingJobDefinition;

  @SpeakeasyMetadata({ data: "json, name=TrainingJobDefinitions", elemType: HyperParameterTrainingJobDefinition })
  trainingJobDefinitions?: HyperParameterTrainingJobDefinition[];

  @SpeakeasyMetadata({ data: "json, name=WarmStartConfig" })
  warmStartConfig?: HyperParameterTuningJobWarmStartConfig;
}
