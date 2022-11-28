import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArimaOrder } from "./arimaorder";


export enum TrainingOptionsBoosterTypeEnum {
    BoosterTypeUnspecified = "BOOSTER_TYPE_UNSPECIFIED",
    Gbtree = "GBTREE",
    Dart = "DART"
}

export enum TrainingOptionsColorSpaceEnum {
    ColorSpaceUnspecified = "COLOR_SPACE_UNSPECIFIED",
    Rgb = "RGB",
    Hsv = "HSV",
    Yiq = "YIQ",
    Yuv = "YUV",
    Grayscale = "GRAYSCALE"
}

export enum TrainingOptionsDartNormalizeTypeEnum {
    DartNormalizeTypeUnspecified = "DART_NORMALIZE_TYPE_UNSPECIFIED",
    Tree = "TREE",
    Forest = "FOREST"
}

export enum TrainingOptionsDataFrequencyEnum {
    DataFrequencyUnspecified = "DATA_FREQUENCY_UNSPECIFIED",
    AutoFrequency = "AUTO_FREQUENCY",
    Yearly = "YEARLY",
    Quarterly = "QUARTERLY",
    Monthly = "MONTHLY",
    Weekly = "WEEKLY",
    Daily = "DAILY",
    Hourly = "HOURLY",
    PerMinute = "PER_MINUTE"
}

export enum TrainingOptionsDataSplitMethodEnum {
    DataSplitMethodUnspecified = "DATA_SPLIT_METHOD_UNSPECIFIED",
    Random = "RANDOM",
    Custom = "CUSTOM",
    Sequential = "SEQUENTIAL",
    NoSplit = "NO_SPLIT",
    AutoSplit = "AUTO_SPLIT"
}

export enum TrainingOptionsDistanceTypeEnum {
    DistanceTypeUnspecified = "DISTANCE_TYPE_UNSPECIFIED",
    Euclidean = "EUCLIDEAN",
    Cosine = "COSINE"
}

export enum TrainingOptionsFeedbackTypeEnum {
    FeedbackTypeUnspecified = "FEEDBACK_TYPE_UNSPECIFIED",
    Implicit = "IMPLICIT",
    Explicit = "EXPLICIT"
}

export enum TrainingOptionsHolidayRegionEnum {
    HolidayRegionUnspecified = "HOLIDAY_REGION_UNSPECIFIED",
    Global = "GLOBAL",
    Na = "NA",
    Japac = "JAPAC",
    Emea = "EMEA",
    Lac = "LAC",
    Ae = "AE",
    Ar = "AR",
    At = "AT",
    Au = "AU",
    Be = "BE",
    Br = "BR",
    Ca = "CA",
    Ch = "CH",
    Cl = "CL",
    Cn = "CN",
    Co = "CO",
    Cs = "CS",
    Cz = "CZ",
    De = "DE",
    Dk = "DK",
    Dz = "DZ",
    Ec = "EC",
    Ee = "EE",
    Eg = "EG",
    Es = "ES",
    Fi = "FI",
    Fr = "FR",
    Gb = "GB",
    Gr = "GR",
    Hk = "HK",
    Hu = "HU",
    Id = "ID",
    Ie = "IE",
    Il = "IL",
    In = "IN",
    Ir = "IR",
    It = "IT",
    Jp = "JP",
    Kr = "KR",
    Lv = "LV",
    Ma = "MA",
    Mx = "MX",
    My = "MY",
    Ng = "NG",
    Nl = "NL",
    No = "NO",
    Nz = "NZ",
    Pe = "PE",
    Ph = "PH",
    Pk = "PK",
    Pl = "PL",
    Pt = "PT",
    Ro = "RO",
    Rs = "RS",
    Ru = "RU",
    Sa = "SA",
    Se = "SE",
    Sg = "SG",
    Si = "SI",
    Sk = "SK",
    Th = "TH",
    Tr = "TR",
    Tw = "TW",
    Ua = "UA",
    Us = "US",
    Ve = "VE",
    Vn = "VN",
    Za = "ZA"
}

export enum TrainingOptionsHparamTuningObjectivesEnum {
    HparamTuningObjectiveUnspecified = "HPARAM_TUNING_OBJECTIVE_UNSPECIFIED",
    MeanAbsoluteError = "MEAN_ABSOLUTE_ERROR",
    MeanSquaredError = "MEAN_SQUARED_ERROR",
    MeanSquaredLogError = "MEAN_SQUARED_LOG_ERROR",
    MedianAbsoluteError = "MEDIAN_ABSOLUTE_ERROR",
    RSquared = "R_SQUARED",
    ExplainedVariance = "EXPLAINED_VARIANCE",
    Precision = "PRECISION",
    Recall = "RECALL",
    Accuracy = "ACCURACY",
    F1Score = "F1_SCORE",
    LogLoss = "LOG_LOSS",
    RocAuc = "ROC_AUC",
    DaviesBouldinIndex = "DAVIES_BOULDIN_INDEX",
    MeanAveragePrecision = "MEAN_AVERAGE_PRECISION",
    NormalizedDiscountedCumulativeGain = "NORMALIZED_DISCOUNTED_CUMULATIVE_GAIN",
    AverageRank = "AVERAGE_RANK"
}

export enum TrainingOptionsKmeansInitializationMethodEnum {
    KmeansInitializationMethodUnspecified = "KMEANS_INITIALIZATION_METHOD_UNSPECIFIED",
    Random = "RANDOM",
    Custom = "CUSTOM",
    KmeansPlusPlus = "KMEANS_PLUS_PLUS"
}

export enum TrainingOptionsLearnRateStrategyEnum {
    LearnRateStrategyUnspecified = "LEARN_RATE_STRATEGY_UNSPECIFIED",
    LineSearch = "LINE_SEARCH",
    Constant = "CONSTANT"
}

export enum TrainingOptionsLossTypeEnum {
    LossTypeUnspecified = "LOSS_TYPE_UNSPECIFIED",
    MeanSquaredLoss = "MEAN_SQUARED_LOSS",
    MeanLogLoss = "MEAN_LOG_LOSS"
}

export enum TrainingOptionsOptimizationStrategyEnum {
    OptimizationStrategyUnspecified = "OPTIMIZATION_STRATEGY_UNSPECIFIED",
    BatchGradientDescent = "BATCH_GRADIENT_DESCENT",
    NormalEquation = "NORMAL_EQUATION"
}

export enum TrainingOptionsTreeMethodEnum {
    TreeMethodUnspecified = "TREE_METHOD_UNSPECIFIED",
    Auto = "AUTO",
    Exact = "EXACT",
    Approx = "APPROX",
    Hist = "HIST"
}


// TrainingOptions
/** 
 * Options used in model training.
**/
export class TrainingOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adjustStepChanges" })
  adjustStepChanges?: boolean;

  @SpeakeasyMetadata({ data: "json, name=autoArima" })
  autoArima?: boolean;

  @SpeakeasyMetadata({ data: "json, name=autoArimaMaxOrder" })
  autoArimaMaxOrder?: string;

  @SpeakeasyMetadata({ data: "json, name=batchSize" })
  batchSize?: string;

  @SpeakeasyMetadata({ data: "json, name=boosterType" })
  boosterType?: TrainingOptionsBoosterTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=calculatePValues" })
  calculatePValues?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cleanSpikesAndDips" })
  cleanSpikesAndDips?: boolean;

  @SpeakeasyMetadata({ data: "json, name=colorSpace" })
  colorSpace?: TrainingOptionsColorSpaceEnum;

  @SpeakeasyMetadata({ data: "json, name=colsampleBylevel" })
  colsampleBylevel?: number;

  @SpeakeasyMetadata({ data: "json, name=colsampleBynode" })
  colsampleBynode?: number;

  @SpeakeasyMetadata({ data: "json, name=colsampleBytree" })
  colsampleBytree?: number;

  @SpeakeasyMetadata({ data: "json, name=dartNormalizeType" })
  dartNormalizeType?: TrainingOptionsDartNormalizeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=dataFrequency" })
  dataFrequency?: TrainingOptionsDataFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=dataSplitColumn" })
  dataSplitColumn?: string;

  @SpeakeasyMetadata({ data: "json, name=dataSplitEvalFraction" })
  dataSplitEvalFraction?: number;

  @SpeakeasyMetadata({ data: "json, name=dataSplitMethod" })
  dataSplitMethod?: TrainingOptionsDataSplitMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=decomposeTimeSeries" })
  decomposeTimeSeries?: boolean;

  @SpeakeasyMetadata({ data: "json, name=distanceType" })
  distanceType?: TrainingOptionsDistanceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=dropout" })
  dropout?: number;

  @SpeakeasyMetadata({ data: "json, name=earlyStop" })
  earlyStop?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableGlobalExplain" })
  enableGlobalExplain?: boolean;

  @SpeakeasyMetadata({ data: "json, name=feedbackType" })
  feedbackType?: TrainingOptionsFeedbackTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=hiddenUnits" })
  hiddenUnits?: string[];

  @SpeakeasyMetadata({ data: "json, name=holidayRegion" })
  holidayRegion?: TrainingOptionsHolidayRegionEnum;

  @SpeakeasyMetadata({ data: "json, name=horizon" })
  horizon?: string;

  @SpeakeasyMetadata({ data: "json, name=hparamTuningObjectives" })
  hparamTuningObjectives?: TrainingOptionsHparamTuningObjectivesEnum[];

  @SpeakeasyMetadata({ data: "json, name=includeDrift" })
  includeDrift?: boolean;

  @SpeakeasyMetadata({ data: "json, name=initialLearnRate" })
  initialLearnRate?: number;

  @SpeakeasyMetadata({ data: "json, name=inputLabelColumns" })
  inputLabelColumns?: string[];

  @SpeakeasyMetadata({ data: "json, name=integratedGradientsNumSteps" })
  integratedGradientsNumSteps?: string;

  @SpeakeasyMetadata({ data: "json, name=itemColumn" })
  itemColumn?: string;

  @SpeakeasyMetadata({ data: "json, name=kmeansInitializationColumn" })
  kmeansInitializationColumn?: string;

  @SpeakeasyMetadata({ data: "json, name=kmeansInitializationMethod" })
  kmeansInitializationMethod?: TrainingOptionsKmeansInitializationMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=l1Regularization" })
  l1Regularization?: number;

  @SpeakeasyMetadata({ data: "json, name=l2Regularization" })
  l2Regularization?: number;

  @SpeakeasyMetadata({ data: "json, name=labelClassWeights" })
  labelClassWeights?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=learnRate" })
  learnRate?: number;

  @SpeakeasyMetadata({ data: "json, name=learnRateStrategy" })
  learnRateStrategy?: TrainingOptionsLearnRateStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=lossType" })
  lossType?: TrainingOptionsLossTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=maxIterations" })
  maxIterations?: string;

  @SpeakeasyMetadata({ data: "json, name=maxParallelTrials" })
  maxParallelTrials?: string;

  @SpeakeasyMetadata({ data: "json, name=maxTimeSeriesLength" })
  maxTimeSeriesLength?: string;

  @SpeakeasyMetadata({ data: "json, name=maxTreeDepth" })
  maxTreeDepth?: string;

  @SpeakeasyMetadata({ data: "json, name=minRelativeProgress" })
  minRelativeProgress?: number;

  @SpeakeasyMetadata({ data: "json, name=minSplitLoss" })
  minSplitLoss?: number;

  @SpeakeasyMetadata({ data: "json, name=minTimeSeriesLength" })
  minTimeSeriesLength?: string;

  @SpeakeasyMetadata({ data: "json, name=minTreeChildWeight" })
  minTreeChildWeight?: string;

  @SpeakeasyMetadata({ data: "json, name=modelUri" })
  modelUri?: string;

  @SpeakeasyMetadata({ data: "json, name=nonSeasonalOrder" })
  nonSeasonalOrder?: ArimaOrder;

  @SpeakeasyMetadata({ data: "json, name=numClusters" })
  numClusters?: string;

  @SpeakeasyMetadata({ data: "json, name=numFactors" })
  numFactors?: string;

  @SpeakeasyMetadata({ data: "json, name=numParallelTree" })
  numParallelTree?: string;

  @SpeakeasyMetadata({ data: "json, name=numTrials" })
  numTrials?: string;

  @SpeakeasyMetadata({ data: "json, name=optimizationStrategy" })
  optimizationStrategy?: TrainingOptionsOptimizationStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=preserveInputStructs" })
  preserveInputStructs?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sampledShapleyNumPaths" })
  sampledShapleyNumPaths?: string;

  @SpeakeasyMetadata({ data: "json, name=subsample" })
  subsample?: number;

  @SpeakeasyMetadata({ data: "json, name=timeSeriesDataColumn" })
  timeSeriesDataColumn?: string;

  @SpeakeasyMetadata({ data: "json, name=timeSeriesIdColumn" })
  timeSeriesIdColumn?: string;

  @SpeakeasyMetadata({ data: "json, name=timeSeriesIdColumns" })
  timeSeriesIdColumns?: string[];

  @SpeakeasyMetadata({ data: "json, name=timeSeriesLengthFraction" })
  timeSeriesLengthFraction?: number;

  @SpeakeasyMetadata({ data: "json, name=timeSeriesTimestampColumn" })
  timeSeriesTimestampColumn?: string;

  @SpeakeasyMetadata({ data: "json, name=treeMethod" })
  treeMethod?: TrainingOptionsTreeMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=trendSmoothingWindowSize" })
  trendSmoothingWindowSize?: string;

  @SpeakeasyMetadata({ data: "json, name=userColumn" })
  userColumn?: string;

  @SpeakeasyMetadata({ data: "json, name=walsAlpha" })
  walsAlpha?: number;

  @SpeakeasyMetadata({ data: "json, name=warmStart" })
  warmStart?: boolean;
}
