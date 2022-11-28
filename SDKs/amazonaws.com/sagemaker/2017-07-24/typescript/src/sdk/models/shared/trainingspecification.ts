import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricDefinition } from "./metricdefinition";
import { HyperParameterSpecification } from "./hyperparameterspecification";
import { TrainingInstanceTypeEnum } from "./traininginstancetypeenum";
import { HyperParameterTuningJobObjective } from "./hyperparametertuningjobobjective";
import { ChannelSpecification } from "./channelspecification";



// TrainingSpecification
/** 
 * Defines how the algorithm is used for a training job.
**/
export class TrainingSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MetricDefinitions", elemType: MetricDefinition })
  metricDefinitions?: MetricDefinition[];

  @SpeakeasyMetadata({ data: "json, name=SupportedHyperParameters", elemType: HyperParameterSpecification })
  supportedHyperParameters?: HyperParameterSpecification[];

  @SpeakeasyMetadata({ data: "json, name=SupportedTrainingInstanceTypes" })
  supportedTrainingInstanceTypes: TrainingInstanceTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=SupportedTuningJobObjectiveMetrics", elemType: HyperParameterTuningJobObjective })
  supportedTuningJobObjectiveMetrics?: HyperParameterTuningJobObjective[];

  @SpeakeasyMetadata({ data: "json, name=SupportsDistributedTraining" })
  supportsDistributedTraining?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TrainingChannels", elemType: ChannelSpecification })
  trainingChannels: ChannelSpecification[];

  @SpeakeasyMetadata({ data: "json, name=TrainingImage" })
  trainingImage: string;

  @SpeakeasyMetadata({ data: "json, name=TrainingImageDigest" })
  trainingImageDigest?: string;
}
