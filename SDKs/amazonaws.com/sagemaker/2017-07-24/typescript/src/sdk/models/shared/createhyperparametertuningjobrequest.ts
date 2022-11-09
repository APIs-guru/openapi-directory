import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HyperParameterTuningJobConfig } from "./hyperparametertuningjobconfig";
import { Tag } from "./tag";
import { HyperParameterTrainingJobDefinition } from "./hyperparametertrainingjobdefinition";
import { HyperParameterTrainingJobDefinition } from "./hyperparametertrainingjobdefinition";
import { HyperParameterTuningJobWarmStartConfig } from "./hyperparametertuningjobwarmstartconfig";


export class CreateHyperParameterTuningJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=HyperParameterTuningJobConfig" })
  hyperParameterTuningJobConfig: HyperParameterTuningJobConfig;

  @Metadata({ data: "json, name=HyperParameterTuningJobName" })
  hyperParameterTuningJobName: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=TrainingJobDefinition" })
  trainingJobDefinition?: HyperParameterTrainingJobDefinition;

  @Metadata({ data: "json, name=TrainingJobDefinitions", elemType: shared.HyperParameterTrainingJobDefinition })
  trainingJobDefinitions?: HyperParameterTrainingJobDefinition[];

  @Metadata({ data: "json, name=WarmStartConfig" })
  warmStartConfig?: HyperParameterTuningJobWarmStartConfig;
}
