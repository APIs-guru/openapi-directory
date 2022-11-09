import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=MetricDefinitions", elemType: shared.MetricDefinition })
  metricDefinitions?: MetricDefinition[];

  @Metadata({ data: "json, name=SupportedHyperParameters", elemType: shared.HyperParameterSpecification })
  supportedHyperParameters?: HyperParameterSpecification[];

  @Metadata({ data: "json, name=SupportedTrainingInstanceTypes" })
  supportedTrainingInstanceTypes: TrainingInstanceTypeEnum[];

  @Metadata({ data: "json, name=SupportedTuningJobObjectiveMetrics", elemType: shared.HyperParameterTuningJobObjective })
  supportedTuningJobObjectiveMetrics?: HyperParameterTuningJobObjective[];

  @Metadata({ data: "json, name=SupportsDistributedTraining" })
  supportsDistributedTraining?: boolean;

  @Metadata({ data: "json, name=TrainingChannels", elemType: shared.ChannelSpecification })
  trainingChannels: ChannelSpecification[];

  @Metadata({ data: "json, name=TrainingImage" })
  trainingImage: string;

  @Metadata({ data: "json, name=TrainingImageDigest" })
  trainingImageDigest?: string;
}
