import { SpeakeasyBase } from "../../../internal/utils";
import { MetricDefinition } from "./metricdefinition";
import { HyperParameterSpecification } from "./hyperparameterspecification";
import { TrainingInstanceTypeEnum } from "./traininginstancetypeenum";
import { HyperParameterTuningJobObjective } from "./hyperparametertuningjobobjective";
import { ChannelSpecification } from "./channelspecification";
/**
 * Defines how the algorithm is used for a training job.
**/
export declare class TrainingSpecification extends SpeakeasyBase {
    metricDefinitions?: MetricDefinition[];
    supportedHyperParameters?: HyperParameterSpecification[];
    supportedTrainingInstanceTypes: TrainingInstanceTypeEnum[];
    supportedTuningJobObjectiveMetrics?: HyperParameterTuningJobObjective[];
    supportsDistributedTraining?: boolean;
    trainingChannels: ChannelSpecification[];
    trainingImage: string;
    trainingImageDigest?: string;
}
