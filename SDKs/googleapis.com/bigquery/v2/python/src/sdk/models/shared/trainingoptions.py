from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import arimaorder

class TrainingOptionsBoosterTypeEnum(str, Enum):
    BOOSTER_TYPE_UNSPECIFIED = "BOOSTER_TYPE_UNSPECIFIED"
    GBTREE = "GBTREE"
    DART = "DART"

class TrainingOptionsColorSpaceEnum(str, Enum):
    COLOR_SPACE_UNSPECIFIED = "COLOR_SPACE_UNSPECIFIED"
    RGB = "RGB"
    HSV = "HSV"
    YIQ = "YIQ"
    YUV = "YUV"
    GRAYSCALE = "GRAYSCALE"

class TrainingOptionsDartNormalizeTypeEnum(str, Enum):
    DART_NORMALIZE_TYPE_UNSPECIFIED = "DART_NORMALIZE_TYPE_UNSPECIFIED"
    TREE = "TREE"
    FOREST = "FOREST"

class TrainingOptionsDataFrequencyEnum(str, Enum):
    DATA_FREQUENCY_UNSPECIFIED = "DATA_FREQUENCY_UNSPECIFIED"
    AUTO_FREQUENCY = "AUTO_FREQUENCY"
    YEARLY = "YEARLY"
    QUARTERLY = "QUARTERLY"
    MONTHLY = "MONTHLY"
    WEEKLY = "WEEKLY"
    DAILY = "DAILY"
    HOURLY = "HOURLY"
    PER_MINUTE = "PER_MINUTE"

class TrainingOptionsDataSplitMethodEnum(str, Enum):
    DATA_SPLIT_METHOD_UNSPECIFIED = "DATA_SPLIT_METHOD_UNSPECIFIED"
    RANDOM = "RANDOM"
    CUSTOM = "CUSTOM"
    SEQUENTIAL = "SEQUENTIAL"
    NO_SPLIT = "NO_SPLIT"
    AUTO_SPLIT = "AUTO_SPLIT"

class TrainingOptionsDistanceTypeEnum(str, Enum):
    DISTANCE_TYPE_UNSPECIFIED = "DISTANCE_TYPE_UNSPECIFIED"
    EUCLIDEAN = "EUCLIDEAN"
    COSINE = "COSINE"

class TrainingOptionsFeedbackTypeEnum(str, Enum):
    FEEDBACK_TYPE_UNSPECIFIED = "FEEDBACK_TYPE_UNSPECIFIED"
    IMPLICIT = "IMPLICIT"
    EXPLICIT = "EXPLICIT"

class TrainingOptionsHolidayRegionEnum(str, Enum):
    HOLIDAY_REGION_UNSPECIFIED = "HOLIDAY_REGION_UNSPECIFIED"
    GLOBAL = "GLOBAL"
    NA = "NA"
    JAPAC = "JAPAC"
    EMEA = "EMEA"
    LAC = "LAC"
    AE = "AE"
    AR = "AR"
    AT = "AT"
    AU = "AU"
    BE = "BE"
    BR = "BR"
    CA = "CA"
    CH = "CH"
    CL = "CL"
    CN = "CN"
    CO = "CO"
    CS = "CS"
    CZ = "CZ"
    DE = "DE"
    DK = "DK"
    DZ = "DZ"
    EC = "EC"
    EE = "EE"
    EG = "EG"
    ES = "ES"
    FI = "FI"
    FR = "FR"
    GB = "GB"
    GR = "GR"
    HK = "HK"
    HU = "HU"
    ID = "ID"
    IE = "IE"
    IL = "IL"
    IN = "IN"
    IR = "IR"
    IT = "IT"
    JP = "JP"
    KR = "KR"
    LV = "LV"
    MA = "MA"
    MX = "MX"
    MY = "MY"
    NG = "NG"
    NL = "NL"
    NO = "NO"
    NZ = "NZ"
    PE = "PE"
    PH = "PH"
    PK = "PK"
    PL = "PL"
    PT = "PT"
    RO = "RO"
    RS = "RS"
    RU = "RU"
    SA = "SA"
    SE = "SE"
    SG = "SG"
    SI = "SI"
    SK = "SK"
    TH = "TH"
    TR = "TR"
    TW = "TW"
    UA = "UA"
    US = "US"
    VE = "VE"
    VN = "VN"
    ZA = "ZA"

class TrainingOptionsHparamTuningObjectivesEnum(str, Enum):
    HPARAM_TUNING_OBJECTIVE_UNSPECIFIED = "HPARAM_TUNING_OBJECTIVE_UNSPECIFIED"
    MEAN_ABSOLUTE_ERROR = "MEAN_ABSOLUTE_ERROR"
    MEAN_SQUARED_ERROR = "MEAN_SQUARED_ERROR"
    MEAN_SQUARED_LOG_ERROR = "MEAN_SQUARED_LOG_ERROR"
    MEDIAN_ABSOLUTE_ERROR = "MEDIAN_ABSOLUTE_ERROR"
    R_SQUARED = "R_SQUARED"
    EXPLAINED_VARIANCE = "EXPLAINED_VARIANCE"
    PRECISION = "PRECISION"
    RECALL = "RECALL"
    ACCURACY = "ACCURACY"
    F1_SCORE = "F1_SCORE"
    LOG_LOSS = "LOG_LOSS"
    ROC_AUC = "ROC_AUC"
    DAVIES_BOULDIN_INDEX = "DAVIES_BOULDIN_INDEX"
    MEAN_AVERAGE_PRECISION = "MEAN_AVERAGE_PRECISION"
    NORMALIZED_DISCOUNTED_CUMULATIVE_GAIN = "NORMALIZED_DISCOUNTED_CUMULATIVE_GAIN"
    AVERAGE_RANK = "AVERAGE_RANK"

class TrainingOptionsKmeansInitializationMethodEnum(str, Enum):
    KMEANS_INITIALIZATION_METHOD_UNSPECIFIED = "KMEANS_INITIALIZATION_METHOD_UNSPECIFIED"
    RANDOM = "RANDOM"
    CUSTOM = "CUSTOM"
    KMEANS_PLUS_PLUS = "KMEANS_PLUS_PLUS"

class TrainingOptionsLearnRateStrategyEnum(str, Enum):
    LEARN_RATE_STRATEGY_UNSPECIFIED = "LEARN_RATE_STRATEGY_UNSPECIFIED"
    LINE_SEARCH = "LINE_SEARCH"
    CONSTANT = "CONSTANT"

class TrainingOptionsLossTypeEnum(str, Enum):
    LOSS_TYPE_UNSPECIFIED = "LOSS_TYPE_UNSPECIFIED"
    MEAN_SQUARED_LOSS = "MEAN_SQUARED_LOSS"
    MEAN_LOG_LOSS = "MEAN_LOG_LOSS"

class TrainingOptionsOptimizationStrategyEnum(str, Enum):
    OPTIMIZATION_STRATEGY_UNSPECIFIED = "OPTIMIZATION_STRATEGY_UNSPECIFIED"
    BATCH_GRADIENT_DESCENT = "BATCH_GRADIENT_DESCENT"
    NORMAL_EQUATION = "NORMAL_EQUATION"

class TrainingOptionsTreeMethodEnum(str, Enum):
    TREE_METHOD_UNSPECIFIED = "TREE_METHOD_UNSPECIFIED"
    AUTO = "AUTO"
    EXACT = "EXACT"
    APPROX = "APPROX"
    HIST = "HIST"


@dataclass_json
@dataclass
class TrainingOptions:
    adjust_step_changes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adjustStepChanges' }})
    auto_arima: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoArima' }})
    auto_arima_max_order: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoArimaMaxOrder' }})
    batch_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchSize' }})
    booster_type: Optional[TrainingOptionsBoosterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boosterType' }})
    calculate_p_values: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calculatePValues' }})
    clean_spikes_and_dips: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cleanSpikesAndDips' }})
    color_space: Optional[TrainingOptionsColorSpaceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colorSpace' }})
    colsample_bylevel: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colsampleBylevel' }})
    colsample_bynode: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colsampleBynode' }})
    colsample_bytree: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colsampleBytree' }})
    dart_normalize_type: Optional[TrainingOptionsDartNormalizeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dartNormalizeType' }})
    data_frequency: Optional[TrainingOptionsDataFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataFrequency' }})
    data_split_column: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSplitColumn' }})
    data_split_eval_fraction: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSplitEvalFraction' }})
    data_split_method: Optional[TrainingOptionsDataSplitMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSplitMethod' }})
    decompose_time_series: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decomposeTimeSeries' }})
    distance_type: Optional[TrainingOptionsDistanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distanceType' }})
    dropout: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dropout' }})
    early_stop: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'earlyStop' }})
    enable_global_explain: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableGlobalExplain' }})
    feedback_type: Optional[TrainingOptionsFeedbackTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feedbackType' }})
    hidden_units: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hiddenUnits' }})
    holiday_region: Optional[TrainingOptionsHolidayRegionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'holidayRegion' }})
    horizon: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'horizon' }})
    hparam_tuning_objectives: Optional[List[TrainingOptionsHparamTuningObjectivesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hparamTuningObjectives' }})
    include_drift: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeDrift' }})
    initial_learn_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initialLearnRate' }})
    input_label_columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputLabelColumns' }})
    integrated_gradients_num_steps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integratedGradientsNumSteps' }})
    item_column: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemColumn' }})
    kmeans_initialization_column: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmeansInitializationColumn' }})
    kmeans_initialization_method: Optional[TrainingOptionsKmeansInitializationMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmeansInitializationMethod' }})
    l1_regularization: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'l1Regularization' }})
    l2_regularization: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'l2Regularization' }})
    label_class_weights: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelClassWeights' }})
    learn_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'learnRate' }})
    learn_rate_strategy: Optional[TrainingOptionsLearnRateStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'learnRateStrategy' }})
    loss_type: Optional[TrainingOptionsLossTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lossType' }})
    max_iterations: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxIterations' }})
    max_parallel_trials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxParallelTrials' }})
    max_time_series_length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxTimeSeriesLength' }})
    max_tree_depth: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxTreeDepth' }})
    min_relative_progress: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minRelativeProgress' }})
    min_split_loss: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minSplitLoss' }})
    min_time_series_length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minTimeSeriesLength' }})
    min_tree_child_weight: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minTreeChildWeight' }})
    model_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelUri' }})
    non_seasonal_order: Optional[arimaorder.ArimaOrder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonSeasonalOrder' }})
    num_clusters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numClusters' }})
    num_factors: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numFactors' }})
    num_parallel_tree: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numParallelTree' }})
    num_trials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numTrials' }})
    optimization_strategy: Optional[TrainingOptionsOptimizationStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'optimizationStrategy' }})
    preserve_input_structs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preserveInputStructs' }})
    sampled_shapley_num_paths: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampledShapleyNumPaths' }})
    subsample: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subsample' }})
    time_series_data_column: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSeriesDataColumn' }})
    time_series_id_column: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSeriesIdColumn' }})
    time_series_id_columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSeriesIdColumns' }})
    time_series_length_fraction: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSeriesLengthFraction' }})
    time_series_timestamp_column: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSeriesTimestampColumn' }})
    tree_method: Optional[TrainingOptionsTreeMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'treeMethod' }})
    trend_smoothing_window_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trendSmoothingWindowSize' }})
    user_column: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userColumn' }})
    wals_alpha: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'walsAlpha' }})
    warm_start: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warmStart' }})
    
