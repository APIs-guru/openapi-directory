import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArimaOrder } from "./arimaorder";

export enum TrainingOptionsBoosterTypeEnum {
    BoosterTypeUnspecified = "BOOSTER_TYPE_UNSPECIFIED"
,    Gbtree = "GBTREE"
,    Dart = "DART"
}

export enum TrainingOptionsColorSpaceEnum {
    ColorSpaceUnspecified = "COLOR_SPACE_UNSPECIFIED"
,    Rgb = "RGB"
,    Hsv = "HSV"
,    Yiq = "YIQ"
,    Yuv = "YUV"
,    Grayscale = "GRAYSCALE"
}

export enum TrainingOptionsDartNormalizeTypeEnum {
    DartNormalizeTypeUnspecified = "DART_NORMALIZE_TYPE_UNSPECIFIED"
,    Tree = "TREE"
,    Forest = "FOREST"
}

export enum TrainingOptionsDataFrequencyEnum {
    DataFrequencyUnspecified = "DATA_FREQUENCY_UNSPECIFIED"
,    AutoFrequency = "AUTO_FREQUENCY"
,    Yearly = "YEARLY"
,    Quarterly = "QUARTERLY"
,    Monthly = "MONTHLY"
,    Weekly = "WEEKLY"
,    Daily = "DAILY"
,    Hourly = "HOURLY"
,    PerMinute = "PER_MINUTE"
}

export enum TrainingOptionsDataSplitMethodEnum {
    DataSplitMethodUnspecified = "DATA_SPLIT_METHOD_UNSPECIFIED"
,    Random = "RANDOM"
,    Custom = "CUSTOM"
,    Sequential = "SEQUENTIAL"
,    NoSplit = "NO_SPLIT"
,    AutoSplit = "AUTO_SPLIT"
}

export enum TrainingOptionsDistanceTypeEnum {
    DistanceTypeUnspecified = "DISTANCE_TYPE_UNSPECIFIED"
,    Euclidean = "EUCLIDEAN"
,    Cosine = "COSINE"
}

export enum TrainingOptionsFeedbackTypeEnum {
    FeedbackTypeUnspecified = "FEEDBACK_TYPE_UNSPECIFIED"
,    Implicit = "IMPLICIT"
,    Explicit = "EXPLICIT"
}

export enum TrainingOptionsHolidayRegionEnum {
    HolidayRegionUnspecified = "HOLIDAY_REGION_UNSPECIFIED"
,    Global = "GLOBAL"
,    Na = "NA"
,    Japac = "JAPAC"
,    Emea = "EMEA"
,    Lac = "LAC"
,    Ae = "AE"
,    Ar = "AR"
,    At = "AT"
,    Au = "AU"
,    Be = "BE"
,    Br = "BR"
,    Ca = "CA"
,    Ch = "CH"
,    Cl = "CL"
,    Cn = "CN"
,    Co = "CO"
,    Cs = "CS"
,    Cz = "CZ"
,    De = "DE"
,    Dk = "DK"
,    Dz = "DZ"
,    Ec = "EC"
,    Ee = "EE"
,    Eg = "EG"
,    Es = "ES"
,    Fi = "FI"
,    Fr = "FR"
,    Gb = "GB"
,    Gr = "GR"
,    Hk = "HK"
,    Hu = "HU"
,    Id = "ID"
,    Ie = "IE"
,    Il = "IL"
,    In = "IN"
,    Ir = "IR"
,    It = "IT"
,    Jp = "JP"
,    Kr = "KR"
,    Lv = "LV"
,    Ma = "MA"
,    Mx = "MX"
,    My = "MY"
,    Ng = "NG"
,    Nl = "NL"
,    No = "NO"
,    Nz = "NZ"
,    Pe = "PE"
,    Ph = "PH"
,    Pk = "PK"
,    Pl = "PL"
,    Pt = "PT"
,    Ro = "RO"
,    Rs = "RS"
,    Ru = "RU"
,    Sa = "SA"
,    Se = "SE"
,    Sg = "SG"
,    Si = "SI"
,    Sk = "SK"
,    Th = "TH"
,    Tr = "TR"
,    Tw = "TW"
,    Ua = "UA"
,    Us = "US"
,    Ve = "VE"
,    Vn = "VN"
,    Za = "ZA"
}

export enum TrainingOptionsHparamTuningObjectivesEnum {
    HparamTuningObjectiveUnspecified = "HPARAM_TUNING_OBJECTIVE_UNSPECIFIED"
,    MeanAbsoluteError = "MEAN_ABSOLUTE_ERROR"
,    MeanSquaredError = "MEAN_SQUARED_ERROR"
,    MeanSquaredLogError = "MEAN_SQUARED_LOG_ERROR"
,    MedianAbsoluteError = "MEDIAN_ABSOLUTE_ERROR"
,    RSquared = "R_SQUARED"
,    ExplainedVariance = "EXPLAINED_VARIANCE"
,    Precision = "PRECISION"
,    Recall = "RECALL"
,    Accuracy = "ACCURACY"
,    F1Score = "F1_SCORE"
,    LogLoss = "LOG_LOSS"
,    RocAuc = "ROC_AUC"
,    DaviesBouldinIndex = "DAVIES_BOULDIN_INDEX"
,    MeanAveragePrecision = "MEAN_AVERAGE_PRECISION"
,    NormalizedDiscountedCumulativeGain = "NORMALIZED_DISCOUNTED_CUMULATIVE_GAIN"
,    AverageRank = "AVERAGE_RANK"
}

export enum TrainingOptionsKmeansInitializationMethodEnum {
    KmeansInitializationMethodUnspecified = "KMEANS_INITIALIZATION_METHOD_UNSPECIFIED"
,    Random = "RANDOM"
,    Custom = "CUSTOM"
,    KmeansPlusPlus = "KMEANS_PLUS_PLUS"
}

export enum TrainingOptionsLearnRateStrategyEnum {
    LearnRateStrategyUnspecified = "LEARN_RATE_STRATEGY_UNSPECIFIED"
,    LineSearch = "LINE_SEARCH"
,    Constant = "CONSTANT"
}

export enum TrainingOptionsLossTypeEnum {
    LossTypeUnspecified = "LOSS_TYPE_UNSPECIFIED"
,    MeanSquaredLoss = "MEAN_SQUARED_LOSS"
,    MeanLogLoss = "MEAN_LOG_LOSS"
}

export enum TrainingOptionsOptimizationStrategyEnum {
    OptimizationStrategyUnspecified = "OPTIMIZATION_STRATEGY_UNSPECIFIED"
,    BatchGradientDescent = "BATCH_GRADIENT_DESCENT"
,    NormalEquation = "NORMAL_EQUATION"
}

export enum TrainingOptionsTreeMethodEnum {
    TreeMethodUnspecified = "TREE_METHOD_UNSPECIFIED"
,    Auto = "AUTO"
,    Exact = "EXACT"
,    Approx = "APPROX"
,    Hist = "HIST"
}


// TrainingOptions
/** 
 * Options used in model training.
**/
export class TrainingOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=adjustStepChanges" })
  adjustStepChanges?: boolean;

  @Metadata({ data: "json, name=autoArima" })
  autoArima?: boolean;

  @Metadata({ data: "json, name=autoArimaMaxOrder" })
  autoArimaMaxOrder?: string;

  @Metadata({ data: "json, name=batchSize" })
  batchSize?: string;

  @Metadata({ data: "json, name=boosterType" })
  boosterType?: TrainingOptionsBoosterTypeEnum;

  @Metadata({ data: "json, name=calculatePValues" })
  calculatePValues?: boolean;

  @Metadata({ data: "json, name=cleanSpikesAndDips" })
  cleanSpikesAndDips?: boolean;

  @Metadata({ data: "json, name=colorSpace" })
  colorSpace?: TrainingOptionsColorSpaceEnum;

  @Metadata({ data: "json, name=colsampleBylevel" })
  colsampleBylevel?: number;

  @Metadata({ data: "json, name=colsampleBynode" })
  colsampleBynode?: number;

  @Metadata({ data: "json, name=colsampleBytree" })
  colsampleBytree?: number;

  @Metadata({ data: "json, name=dartNormalizeType" })
  dartNormalizeType?: TrainingOptionsDartNormalizeTypeEnum;

  @Metadata({ data: "json, name=dataFrequency" })
  dataFrequency?: TrainingOptionsDataFrequencyEnum;

  @Metadata({ data: "json, name=dataSplitColumn" })
  dataSplitColumn?: string;

  @Metadata({ data: "json, name=dataSplitEvalFraction" })
  dataSplitEvalFraction?: number;

  @Metadata({ data: "json, name=dataSplitMethod" })
  dataSplitMethod?: TrainingOptionsDataSplitMethodEnum;

  @Metadata({ data: "json, name=decomposeTimeSeries" })
  decomposeTimeSeries?: boolean;

  @Metadata({ data: "json, name=distanceType" })
  distanceType?: TrainingOptionsDistanceTypeEnum;

  @Metadata({ data: "json, name=dropout" })
  dropout?: number;

  @Metadata({ data: "json, name=earlyStop" })
  earlyStop?: boolean;

  @Metadata({ data: "json, name=enableGlobalExplain" })
  enableGlobalExplain?: boolean;

  @Metadata({ data: "json, name=feedbackType" })
  feedbackType?: TrainingOptionsFeedbackTypeEnum;

  @Metadata({ data: "json, name=hiddenUnits" })
  hiddenUnits?: string[];

  @Metadata({ data: "json, name=holidayRegion" })
  holidayRegion?: TrainingOptionsHolidayRegionEnum;

  @Metadata({ data: "json, name=horizon" })
  horizon?: string;

  @Metadata({ data: "json, name=hparamTuningObjectives" })
  hparamTuningObjectives?: TrainingOptionsHparamTuningObjectivesEnum[];

  @Metadata({ data: "json, name=includeDrift" })
  includeDrift?: boolean;

  @Metadata({ data: "json, name=initialLearnRate" })
  initialLearnRate?: number;

  @Metadata({ data: "json, name=inputLabelColumns" })
  inputLabelColumns?: string[];

  @Metadata({ data: "json, name=integratedGradientsNumSteps" })
  integratedGradientsNumSteps?: string;

  @Metadata({ data: "json, name=itemColumn" })
  itemColumn?: string;

  @Metadata({ data: "json, name=kmeansInitializationColumn" })
  kmeansInitializationColumn?: string;

  @Metadata({ data: "json, name=kmeansInitializationMethod" })
  kmeansInitializationMethod?: TrainingOptionsKmeansInitializationMethodEnum;

  @Metadata({ data: "json, name=l1Regularization" })
  l1Regularization?: number;

  @Metadata({ data: "json, name=l2Regularization" })
  l2Regularization?: number;

  @Metadata({ data: "json, name=labelClassWeights" })
  labelClassWeights?: Map<string, number>;

  @Metadata({ data: "json, name=learnRate" })
  learnRate?: number;

  @Metadata({ data: "json, name=learnRateStrategy" })
  learnRateStrategy?: TrainingOptionsLearnRateStrategyEnum;

  @Metadata({ data: "json, name=lossType" })
  lossType?: TrainingOptionsLossTypeEnum;

  @Metadata({ data: "json, name=maxIterations" })
  maxIterations?: string;

  @Metadata({ data: "json, name=maxParallelTrials" })
  maxParallelTrials?: string;

  @Metadata({ data: "json, name=maxTimeSeriesLength" })
  maxTimeSeriesLength?: string;

  @Metadata({ data: "json, name=maxTreeDepth" })
  maxTreeDepth?: string;

  @Metadata({ data: "json, name=minRelativeProgress" })
  minRelativeProgress?: number;

  @Metadata({ data: "json, name=minSplitLoss" })
  minSplitLoss?: number;

  @Metadata({ data: "json, name=minTimeSeriesLength" })
  minTimeSeriesLength?: string;

  @Metadata({ data: "json, name=minTreeChildWeight" })
  minTreeChildWeight?: string;

  @Metadata({ data: "json, name=modelUri" })
  modelUri?: string;

  @Metadata({ data: "json, name=nonSeasonalOrder" })
  nonSeasonalOrder?: ArimaOrder;

  @Metadata({ data: "json, name=numClusters" })
  numClusters?: string;

  @Metadata({ data: "json, name=numFactors" })
  numFactors?: string;

  @Metadata({ data: "json, name=numParallelTree" })
  numParallelTree?: string;

  @Metadata({ data: "json, name=numTrials" })
  numTrials?: string;

  @Metadata({ data: "json, name=optimizationStrategy" })
  optimizationStrategy?: TrainingOptionsOptimizationStrategyEnum;

  @Metadata({ data: "json, name=preserveInputStructs" })
  preserveInputStructs?: boolean;

  @Metadata({ data: "json, name=sampledShapleyNumPaths" })
  sampledShapleyNumPaths?: string;

  @Metadata({ data: "json, name=subsample" })
  subsample?: number;

  @Metadata({ data: "json, name=timeSeriesDataColumn" })
  timeSeriesDataColumn?: string;

  @Metadata({ data: "json, name=timeSeriesIdColumn" })
  timeSeriesIdColumn?: string;

  @Metadata({ data: "json, name=timeSeriesIdColumns" })
  timeSeriesIdColumns?: string[];

  @Metadata({ data: "json, name=timeSeriesLengthFraction" })
  timeSeriesLengthFraction?: number;

  @Metadata({ data: "json, name=timeSeriesTimestampColumn" })
  timeSeriesTimestampColumn?: string;

  @Metadata({ data: "json, name=treeMethod" })
  treeMethod?: TrainingOptionsTreeMethodEnum;

  @Metadata({ data: "json, name=trendSmoothingWindowSize" })
  trendSmoothingWindowSize?: string;

  @Metadata({ data: "json, name=userColumn" })
  userColumn?: string;

  @Metadata({ data: "json, name=walsAlpha" })
  walsAlpha?: number;

  @Metadata({ data: "json, name=warmStart" })
  warmStart?: boolean;
}
