import { SpeakeasyBase } from "../../../internal/utils";
import { ArimaOrder } from "./arimaorder";
export declare enum TrainingOptionsBoosterTypeEnum {
    BoosterTypeUnspecified = "BOOSTER_TYPE_UNSPECIFIED",
    Gbtree = "GBTREE",
    Dart = "DART"
}
export declare enum TrainingOptionsColorSpaceEnum {
    ColorSpaceUnspecified = "COLOR_SPACE_UNSPECIFIED",
    Rgb = "RGB",
    Hsv = "HSV",
    Yiq = "YIQ",
    Yuv = "YUV",
    Grayscale = "GRAYSCALE"
}
export declare enum TrainingOptionsDartNormalizeTypeEnum {
    DartNormalizeTypeUnspecified = "DART_NORMALIZE_TYPE_UNSPECIFIED",
    Tree = "TREE",
    Forest = "FOREST"
}
export declare enum TrainingOptionsDataFrequencyEnum {
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
export declare enum TrainingOptionsDataSplitMethodEnum {
    DataSplitMethodUnspecified = "DATA_SPLIT_METHOD_UNSPECIFIED",
    Random = "RANDOM",
    Custom = "CUSTOM",
    Sequential = "SEQUENTIAL",
    NoSplit = "NO_SPLIT",
    AutoSplit = "AUTO_SPLIT"
}
export declare enum TrainingOptionsDistanceTypeEnum {
    DistanceTypeUnspecified = "DISTANCE_TYPE_UNSPECIFIED",
    Euclidean = "EUCLIDEAN",
    Cosine = "COSINE"
}
export declare enum TrainingOptionsFeedbackTypeEnum {
    FeedbackTypeUnspecified = "FEEDBACK_TYPE_UNSPECIFIED",
    Implicit = "IMPLICIT",
    Explicit = "EXPLICIT"
}
export declare enum TrainingOptionsHolidayRegionEnum {
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
export declare enum TrainingOptionsHparamTuningObjectivesEnum {
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
export declare enum TrainingOptionsKmeansInitializationMethodEnum {
    KmeansInitializationMethodUnspecified = "KMEANS_INITIALIZATION_METHOD_UNSPECIFIED",
    Random = "RANDOM",
    Custom = "CUSTOM",
    KmeansPlusPlus = "KMEANS_PLUS_PLUS"
}
export declare enum TrainingOptionsLearnRateStrategyEnum {
    LearnRateStrategyUnspecified = "LEARN_RATE_STRATEGY_UNSPECIFIED",
    LineSearch = "LINE_SEARCH",
    Constant = "CONSTANT"
}
export declare enum TrainingOptionsLossTypeEnum {
    LossTypeUnspecified = "LOSS_TYPE_UNSPECIFIED",
    MeanSquaredLoss = "MEAN_SQUARED_LOSS",
    MeanLogLoss = "MEAN_LOG_LOSS"
}
export declare enum TrainingOptionsOptimizationStrategyEnum {
    OptimizationStrategyUnspecified = "OPTIMIZATION_STRATEGY_UNSPECIFIED",
    BatchGradientDescent = "BATCH_GRADIENT_DESCENT",
    NormalEquation = "NORMAL_EQUATION"
}
export declare enum TrainingOptionsTreeMethodEnum {
    TreeMethodUnspecified = "TREE_METHOD_UNSPECIFIED",
    Auto = "AUTO",
    Exact = "EXACT",
    Approx = "APPROX",
    Hist = "HIST"
}
/**
 * Options used in model training.
**/
export declare class TrainingOptions extends SpeakeasyBase {
    adjustStepChanges?: boolean;
    autoArima?: boolean;
    autoArimaMaxOrder?: string;
    batchSize?: string;
    boosterType?: TrainingOptionsBoosterTypeEnum;
    calculatePValues?: boolean;
    cleanSpikesAndDips?: boolean;
    colorSpace?: TrainingOptionsColorSpaceEnum;
    colsampleBylevel?: number;
    colsampleBynode?: number;
    colsampleBytree?: number;
    dartNormalizeType?: TrainingOptionsDartNormalizeTypeEnum;
    dataFrequency?: TrainingOptionsDataFrequencyEnum;
    dataSplitColumn?: string;
    dataSplitEvalFraction?: number;
    dataSplitMethod?: TrainingOptionsDataSplitMethodEnum;
    decomposeTimeSeries?: boolean;
    distanceType?: TrainingOptionsDistanceTypeEnum;
    dropout?: number;
    earlyStop?: boolean;
    enableGlobalExplain?: boolean;
    feedbackType?: TrainingOptionsFeedbackTypeEnum;
    hiddenUnits?: string[];
    holidayRegion?: TrainingOptionsHolidayRegionEnum;
    horizon?: string;
    hparamTuningObjectives?: TrainingOptionsHparamTuningObjectivesEnum[];
    includeDrift?: boolean;
    initialLearnRate?: number;
    inputLabelColumns?: string[];
    integratedGradientsNumSteps?: string;
    itemColumn?: string;
    kmeansInitializationColumn?: string;
    kmeansInitializationMethod?: TrainingOptionsKmeansInitializationMethodEnum;
    l1Regularization?: number;
    l2Regularization?: number;
    labelClassWeights?: Map<string, number>;
    learnRate?: number;
    learnRateStrategy?: TrainingOptionsLearnRateStrategyEnum;
    lossType?: TrainingOptionsLossTypeEnum;
    maxIterations?: string;
    maxParallelTrials?: string;
    maxTimeSeriesLength?: string;
    maxTreeDepth?: string;
    minRelativeProgress?: number;
    minSplitLoss?: number;
    minTimeSeriesLength?: string;
    minTreeChildWeight?: string;
    modelUri?: string;
    nonSeasonalOrder?: ArimaOrder;
    numClusters?: string;
    numFactors?: string;
    numParallelTree?: string;
    numTrials?: string;
    optimizationStrategy?: TrainingOptionsOptimizationStrategyEnum;
    preserveInputStructs?: boolean;
    sampledShapleyNumPaths?: string;
    subsample?: number;
    timeSeriesDataColumn?: string;
    timeSeriesIdColumn?: string;
    timeSeriesIdColumns?: string[];
    timeSeriesLengthFraction?: number;
    timeSeriesTimestampColumn?: string;
    treeMethod?: TrainingOptionsTreeMethodEnum;
    trendSmoothingWindowSize?: string;
    userColumn?: string;
    walsAlpha?: number;
    warmStart?: boolean;
}
