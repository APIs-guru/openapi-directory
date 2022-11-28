package shared

type TrainingOptionsBoosterTypeEnum string

const (
	TrainingOptionsBoosterTypeEnumBoosterTypeUnspecified TrainingOptionsBoosterTypeEnum = "BOOSTER_TYPE_UNSPECIFIED"
	TrainingOptionsBoosterTypeEnumGbtree                 TrainingOptionsBoosterTypeEnum = "GBTREE"
	TrainingOptionsBoosterTypeEnumDart                   TrainingOptionsBoosterTypeEnum = "DART"
)

type TrainingOptionsColorSpaceEnum string

const (
	TrainingOptionsColorSpaceEnumColorSpaceUnspecified TrainingOptionsColorSpaceEnum = "COLOR_SPACE_UNSPECIFIED"
	TrainingOptionsColorSpaceEnumRgb                   TrainingOptionsColorSpaceEnum = "RGB"
	TrainingOptionsColorSpaceEnumHsv                   TrainingOptionsColorSpaceEnum = "HSV"
	TrainingOptionsColorSpaceEnumYiq                   TrainingOptionsColorSpaceEnum = "YIQ"
	TrainingOptionsColorSpaceEnumYuv                   TrainingOptionsColorSpaceEnum = "YUV"
	TrainingOptionsColorSpaceEnumGrayscale             TrainingOptionsColorSpaceEnum = "GRAYSCALE"
)

type TrainingOptionsDartNormalizeTypeEnum string

const (
	TrainingOptionsDartNormalizeTypeEnumDartNormalizeTypeUnspecified TrainingOptionsDartNormalizeTypeEnum = "DART_NORMALIZE_TYPE_UNSPECIFIED"
	TrainingOptionsDartNormalizeTypeEnumTree                         TrainingOptionsDartNormalizeTypeEnum = "TREE"
	TrainingOptionsDartNormalizeTypeEnumForest                       TrainingOptionsDartNormalizeTypeEnum = "FOREST"
)

type TrainingOptionsDataFrequencyEnum string

const (
	TrainingOptionsDataFrequencyEnumDataFrequencyUnspecified TrainingOptionsDataFrequencyEnum = "DATA_FREQUENCY_UNSPECIFIED"
	TrainingOptionsDataFrequencyEnumAutoFrequency            TrainingOptionsDataFrequencyEnum = "AUTO_FREQUENCY"
	TrainingOptionsDataFrequencyEnumYearly                   TrainingOptionsDataFrequencyEnum = "YEARLY"
	TrainingOptionsDataFrequencyEnumQuarterly                TrainingOptionsDataFrequencyEnum = "QUARTERLY"
	TrainingOptionsDataFrequencyEnumMonthly                  TrainingOptionsDataFrequencyEnum = "MONTHLY"
	TrainingOptionsDataFrequencyEnumWeekly                   TrainingOptionsDataFrequencyEnum = "WEEKLY"
	TrainingOptionsDataFrequencyEnumDaily                    TrainingOptionsDataFrequencyEnum = "DAILY"
	TrainingOptionsDataFrequencyEnumHourly                   TrainingOptionsDataFrequencyEnum = "HOURLY"
	TrainingOptionsDataFrequencyEnumPerMinute                TrainingOptionsDataFrequencyEnum = "PER_MINUTE"
)

type TrainingOptionsDataSplitMethodEnum string

const (
	TrainingOptionsDataSplitMethodEnumDataSplitMethodUnspecified TrainingOptionsDataSplitMethodEnum = "DATA_SPLIT_METHOD_UNSPECIFIED"
	TrainingOptionsDataSplitMethodEnumRandom                     TrainingOptionsDataSplitMethodEnum = "RANDOM"
	TrainingOptionsDataSplitMethodEnumCustom                     TrainingOptionsDataSplitMethodEnum = "CUSTOM"
	TrainingOptionsDataSplitMethodEnumSequential                 TrainingOptionsDataSplitMethodEnum = "SEQUENTIAL"
	TrainingOptionsDataSplitMethodEnumNoSplit                    TrainingOptionsDataSplitMethodEnum = "NO_SPLIT"
	TrainingOptionsDataSplitMethodEnumAutoSplit                  TrainingOptionsDataSplitMethodEnum = "AUTO_SPLIT"
)

type TrainingOptionsDistanceTypeEnum string

const (
	TrainingOptionsDistanceTypeEnumDistanceTypeUnspecified TrainingOptionsDistanceTypeEnum = "DISTANCE_TYPE_UNSPECIFIED"
	TrainingOptionsDistanceTypeEnumEuclidean               TrainingOptionsDistanceTypeEnum = "EUCLIDEAN"
	TrainingOptionsDistanceTypeEnumCosine                  TrainingOptionsDistanceTypeEnum = "COSINE"
)

type TrainingOptionsFeedbackTypeEnum string

const (
	TrainingOptionsFeedbackTypeEnumFeedbackTypeUnspecified TrainingOptionsFeedbackTypeEnum = "FEEDBACK_TYPE_UNSPECIFIED"
	TrainingOptionsFeedbackTypeEnumImplicit                TrainingOptionsFeedbackTypeEnum = "IMPLICIT"
	TrainingOptionsFeedbackTypeEnumExplicit                TrainingOptionsFeedbackTypeEnum = "EXPLICIT"
)

type TrainingOptionsHolidayRegionEnum string

const (
	TrainingOptionsHolidayRegionEnumHolidayRegionUnspecified TrainingOptionsHolidayRegionEnum = "HOLIDAY_REGION_UNSPECIFIED"
	TrainingOptionsHolidayRegionEnumGlobal                   TrainingOptionsHolidayRegionEnum = "GLOBAL"
	TrainingOptionsHolidayRegionEnumNa                       TrainingOptionsHolidayRegionEnum = "NA"
	TrainingOptionsHolidayRegionEnumJapac                    TrainingOptionsHolidayRegionEnum = "JAPAC"
	TrainingOptionsHolidayRegionEnumEmea                     TrainingOptionsHolidayRegionEnum = "EMEA"
	TrainingOptionsHolidayRegionEnumLac                      TrainingOptionsHolidayRegionEnum = "LAC"
	TrainingOptionsHolidayRegionEnumAe                       TrainingOptionsHolidayRegionEnum = "AE"
	TrainingOptionsHolidayRegionEnumAr                       TrainingOptionsHolidayRegionEnum = "AR"
	TrainingOptionsHolidayRegionEnumAt                       TrainingOptionsHolidayRegionEnum = "AT"
	TrainingOptionsHolidayRegionEnumAu                       TrainingOptionsHolidayRegionEnum = "AU"
	TrainingOptionsHolidayRegionEnumBe                       TrainingOptionsHolidayRegionEnum = "BE"
	TrainingOptionsHolidayRegionEnumBr                       TrainingOptionsHolidayRegionEnum = "BR"
	TrainingOptionsHolidayRegionEnumCa                       TrainingOptionsHolidayRegionEnum = "CA"
	TrainingOptionsHolidayRegionEnumCh                       TrainingOptionsHolidayRegionEnum = "CH"
	TrainingOptionsHolidayRegionEnumCl                       TrainingOptionsHolidayRegionEnum = "CL"
	TrainingOptionsHolidayRegionEnumCn                       TrainingOptionsHolidayRegionEnum = "CN"
	TrainingOptionsHolidayRegionEnumCo                       TrainingOptionsHolidayRegionEnum = "CO"
	TrainingOptionsHolidayRegionEnumCs                       TrainingOptionsHolidayRegionEnum = "CS"
	TrainingOptionsHolidayRegionEnumCz                       TrainingOptionsHolidayRegionEnum = "CZ"
	TrainingOptionsHolidayRegionEnumDe                       TrainingOptionsHolidayRegionEnum = "DE"
	TrainingOptionsHolidayRegionEnumDk                       TrainingOptionsHolidayRegionEnum = "DK"
	TrainingOptionsHolidayRegionEnumDz                       TrainingOptionsHolidayRegionEnum = "DZ"
	TrainingOptionsHolidayRegionEnumEc                       TrainingOptionsHolidayRegionEnum = "EC"
	TrainingOptionsHolidayRegionEnumEe                       TrainingOptionsHolidayRegionEnum = "EE"
	TrainingOptionsHolidayRegionEnumEg                       TrainingOptionsHolidayRegionEnum = "EG"
	TrainingOptionsHolidayRegionEnumEs                       TrainingOptionsHolidayRegionEnum = "ES"
	TrainingOptionsHolidayRegionEnumFi                       TrainingOptionsHolidayRegionEnum = "FI"
	TrainingOptionsHolidayRegionEnumFr                       TrainingOptionsHolidayRegionEnum = "FR"
	TrainingOptionsHolidayRegionEnumGb                       TrainingOptionsHolidayRegionEnum = "GB"
	TrainingOptionsHolidayRegionEnumGr                       TrainingOptionsHolidayRegionEnum = "GR"
	TrainingOptionsHolidayRegionEnumHk                       TrainingOptionsHolidayRegionEnum = "HK"
	TrainingOptionsHolidayRegionEnumHu                       TrainingOptionsHolidayRegionEnum = "HU"
	TrainingOptionsHolidayRegionEnumID                       TrainingOptionsHolidayRegionEnum = "ID"
	TrainingOptionsHolidayRegionEnumIe                       TrainingOptionsHolidayRegionEnum = "IE"
	TrainingOptionsHolidayRegionEnumIl                       TrainingOptionsHolidayRegionEnum = "IL"
	TrainingOptionsHolidayRegionEnumIn                       TrainingOptionsHolidayRegionEnum = "IN"
	TrainingOptionsHolidayRegionEnumIr                       TrainingOptionsHolidayRegionEnum = "IR"
	TrainingOptionsHolidayRegionEnumIt                       TrainingOptionsHolidayRegionEnum = "IT"
	TrainingOptionsHolidayRegionEnumJp                       TrainingOptionsHolidayRegionEnum = "JP"
	TrainingOptionsHolidayRegionEnumKr                       TrainingOptionsHolidayRegionEnum = "KR"
	TrainingOptionsHolidayRegionEnumLv                       TrainingOptionsHolidayRegionEnum = "LV"
	TrainingOptionsHolidayRegionEnumMa                       TrainingOptionsHolidayRegionEnum = "MA"
	TrainingOptionsHolidayRegionEnumMx                       TrainingOptionsHolidayRegionEnum = "MX"
	TrainingOptionsHolidayRegionEnumMy                       TrainingOptionsHolidayRegionEnum = "MY"
	TrainingOptionsHolidayRegionEnumNg                       TrainingOptionsHolidayRegionEnum = "NG"
	TrainingOptionsHolidayRegionEnumNl                       TrainingOptionsHolidayRegionEnum = "NL"
	TrainingOptionsHolidayRegionEnumNo                       TrainingOptionsHolidayRegionEnum = "NO"
	TrainingOptionsHolidayRegionEnumNz                       TrainingOptionsHolidayRegionEnum = "NZ"
	TrainingOptionsHolidayRegionEnumPe                       TrainingOptionsHolidayRegionEnum = "PE"
	TrainingOptionsHolidayRegionEnumPh                       TrainingOptionsHolidayRegionEnum = "PH"
	TrainingOptionsHolidayRegionEnumPk                       TrainingOptionsHolidayRegionEnum = "PK"
	TrainingOptionsHolidayRegionEnumPl                       TrainingOptionsHolidayRegionEnum = "PL"
	TrainingOptionsHolidayRegionEnumPt                       TrainingOptionsHolidayRegionEnum = "PT"
	TrainingOptionsHolidayRegionEnumRo                       TrainingOptionsHolidayRegionEnum = "RO"
	TrainingOptionsHolidayRegionEnumRs                       TrainingOptionsHolidayRegionEnum = "RS"
	TrainingOptionsHolidayRegionEnumRu                       TrainingOptionsHolidayRegionEnum = "RU"
	TrainingOptionsHolidayRegionEnumSa                       TrainingOptionsHolidayRegionEnum = "SA"
	TrainingOptionsHolidayRegionEnumSe                       TrainingOptionsHolidayRegionEnum = "SE"
	TrainingOptionsHolidayRegionEnumSg                       TrainingOptionsHolidayRegionEnum = "SG"
	TrainingOptionsHolidayRegionEnumSi                       TrainingOptionsHolidayRegionEnum = "SI"
	TrainingOptionsHolidayRegionEnumSk                       TrainingOptionsHolidayRegionEnum = "SK"
	TrainingOptionsHolidayRegionEnumTh                       TrainingOptionsHolidayRegionEnum = "TH"
	TrainingOptionsHolidayRegionEnumTr                       TrainingOptionsHolidayRegionEnum = "TR"
	TrainingOptionsHolidayRegionEnumTw                       TrainingOptionsHolidayRegionEnum = "TW"
	TrainingOptionsHolidayRegionEnumUa                       TrainingOptionsHolidayRegionEnum = "UA"
	TrainingOptionsHolidayRegionEnumUs                       TrainingOptionsHolidayRegionEnum = "US"
	TrainingOptionsHolidayRegionEnumVe                       TrainingOptionsHolidayRegionEnum = "VE"
	TrainingOptionsHolidayRegionEnumVn                       TrainingOptionsHolidayRegionEnum = "VN"
	TrainingOptionsHolidayRegionEnumZa                       TrainingOptionsHolidayRegionEnum = "ZA"
)

type TrainingOptionsHparamTuningObjectivesEnum string

const (
	TrainingOptionsHparamTuningObjectivesEnumHparamTuningObjectiveUnspecified   TrainingOptionsHparamTuningObjectivesEnum = "HPARAM_TUNING_OBJECTIVE_UNSPECIFIED"
	TrainingOptionsHparamTuningObjectivesEnumMeanAbsoluteError                  TrainingOptionsHparamTuningObjectivesEnum = "MEAN_ABSOLUTE_ERROR"
	TrainingOptionsHparamTuningObjectivesEnumMeanSquaredError                   TrainingOptionsHparamTuningObjectivesEnum = "MEAN_SQUARED_ERROR"
	TrainingOptionsHparamTuningObjectivesEnumMeanSquaredLogError                TrainingOptionsHparamTuningObjectivesEnum = "MEAN_SQUARED_LOG_ERROR"
	TrainingOptionsHparamTuningObjectivesEnumMedianAbsoluteError                TrainingOptionsHparamTuningObjectivesEnum = "MEDIAN_ABSOLUTE_ERROR"
	TrainingOptionsHparamTuningObjectivesEnumRSquared                           TrainingOptionsHparamTuningObjectivesEnum = "R_SQUARED"
	TrainingOptionsHparamTuningObjectivesEnumExplainedVariance                  TrainingOptionsHparamTuningObjectivesEnum = "EXPLAINED_VARIANCE"
	TrainingOptionsHparamTuningObjectivesEnumPrecision                          TrainingOptionsHparamTuningObjectivesEnum = "PRECISION"
	TrainingOptionsHparamTuningObjectivesEnumRecall                             TrainingOptionsHparamTuningObjectivesEnum = "RECALL"
	TrainingOptionsHparamTuningObjectivesEnumAccuracy                           TrainingOptionsHparamTuningObjectivesEnum = "ACCURACY"
	TrainingOptionsHparamTuningObjectivesEnumF1Score                            TrainingOptionsHparamTuningObjectivesEnum = "F1_SCORE"
	TrainingOptionsHparamTuningObjectivesEnumLogLoss                            TrainingOptionsHparamTuningObjectivesEnum = "LOG_LOSS"
	TrainingOptionsHparamTuningObjectivesEnumRocAuc                             TrainingOptionsHparamTuningObjectivesEnum = "ROC_AUC"
	TrainingOptionsHparamTuningObjectivesEnumDaviesBouldinIndex                 TrainingOptionsHparamTuningObjectivesEnum = "DAVIES_BOULDIN_INDEX"
	TrainingOptionsHparamTuningObjectivesEnumMeanAveragePrecision               TrainingOptionsHparamTuningObjectivesEnum = "MEAN_AVERAGE_PRECISION"
	TrainingOptionsHparamTuningObjectivesEnumNormalizedDiscountedCumulativeGain TrainingOptionsHparamTuningObjectivesEnum = "NORMALIZED_DISCOUNTED_CUMULATIVE_GAIN"
	TrainingOptionsHparamTuningObjectivesEnumAverageRank                        TrainingOptionsHparamTuningObjectivesEnum = "AVERAGE_RANK"
)

type TrainingOptionsKmeansInitializationMethodEnum string

const (
	TrainingOptionsKmeansInitializationMethodEnumKmeansInitializationMethodUnspecified TrainingOptionsKmeansInitializationMethodEnum = "KMEANS_INITIALIZATION_METHOD_UNSPECIFIED"
	TrainingOptionsKmeansInitializationMethodEnumRandom                                TrainingOptionsKmeansInitializationMethodEnum = "RANDOM"
	TrainingOptionsKmeansInitializationMethodEnumCustom                                TrainingOptionsKmeansInitializationMethodEnum = "CUSTOM"
	TrainingOptionsKmeansInitializationMethodEnumKmeansPlusPlus                        TrainingOptionsKmeansInitializationMethodEnum = "KMEANS_PLUS_PLUS"
)

type TrainingOptionsLearnRateStrategyEnum string

const (
	TrainingOptionsLearnRateStrategyEnumLearnRateStrategyUnspecified TrainingOptionsLearnRateStrategyEnum = "LEARN_RATE_STRATEGY_UNSPECIFIED"
	TrainingOptionsLearnRateStrategyEnumLineSearch                   TrainingOptionsLearnRateStrategyEnum = "LINE_SEARCH"
	TrainingOptionsLearnRateStrategyEnumConstant                     TrainingOptionsLearnRateStrategyEnum = "CONSTANT"
)

type TrainingOptionsLossTypeEnum string

const (
	TrainingOptionsLossTypeEnumLossTypeUnspecified TrainingOptionsLossTypeEnum = "LOSS_TYPE_UNSPECIFIED"
	TrainingOptionsLossTypeEnumMeanSquaredLoss     TrainingOptionsLossTypeEnum = "MEAN_SQUARED_LOSS"
	TrainingOptionsLossTypeEnumMeanLogLoss         TrainingOptionsLossTypeEnum = "MEAN_LOG_LOSS"
)

type TrainingOptionsOptimizationStrategyEnum string

const (
	TrainingOptionsOptimizationStrategyEnumOptimizationStrategyUnspecified TrainingOptionsOptimizationStrategyEnum = "OPTIMIZATION_STRATEGY_UNSPECIFIED"
	TrainingOptionsOptimizationStrategyEnumBatchGradientDescent            TrainingOptionsOptimizationStrategyEnum = "BATCH_GRADIENT_DESCENT"
	TrainingOptionsOptimizationStrategyEnumNormalEquation                  TrainingOptionsOptimizationStrategyEnum = "NORMAL_EQUATION"
)

type TrainingOptionsTreeMethodEnum string

const (
	TrainingOptionsTreeMethodEnumTreeMethodUnspecified TrainingOptionsTreeMethodEnum = "TREE_METHOD_UNSPECIFIED"
	TrainingOptionsTreeMethodEnumAuto                  TrainingOptionsTreeMethodEnum = "AUTO"
	TrainingOptionsTreeMethodEnumExact                 TrainingOptionsTreeMethodEnum = "EXACT"
	TrainingOptionsTreeMethodEnumApprox                TrainingOptionsTreeMethodEnum = "APPROX"
	TrainingOptionsTreeMethodEnumHist                  TrainingOptionsTreeMethodEnum = "HIST"
)

// TrainingOptions
// Options used in model training.
type TrainingOptions struct {
	AdjustStepChanges           *bool                                          `json:"adjustStepChanges,omitempty"`
	AutoArima                   *bool                                          `json:"autoArima,omitempty"`
	AutoArimaMaxOrder           *string                                        `json:"autoArimaMaxOrder,omitempty"`
	BatchSize                   *string                                        `json:"batchSize,omitempty"`
	BoosterType                 *TrainingOptionsBoosterTypeEnum                `json:"boosterType,omitempty"`
	CalculatePValues            *bool                                          `json:"calculatePValues,omitempty"`
	CleanSpikesAndDips          *bool                                          `json:"cleanSpikesAndDips,omitempty"`
	ColorSpace                  *TrainingOptionsColorSpaceEnum                 `json:"colorSpace,omitempty"`
	ColsampleBylevel            *float64                                       `json:"colsampleBylevel,omitempty"`
	ColsampleBynode             *float64                                       `json:"colsampleBynode,omitempty"`
	ColsampleBytree             *float64                                       `json:"colsampleBytree,omitempty"`
	DartNormalizeType           *TrainingOptionsDartNormalizeTypeEnum          `json:"dartNormalizeType,omitempty"`
	DataFrequency               *TrainingOptionsDataFrequencyEnum              `json:"dataFrequency,omitempty"`
	DataSplitColumn             *string                                        `json:"dataSplitColumn,omitempty"`
	DataSplitEvalFraction       *float64                                       `json:"dataSplitEvalFraction,omitempty"`
	DataSplitMethod             *TrainingOptionsDataSplitMethodEnum            `json:"dataSplitMethod,omitempty"`
	DecomposeTimeSeries         *bool                                          `json:"decomposeTimeSeries,omitempty"`
	DistanceType                *TrainingOptionsDistanceTypeEnum               `json:"distanceType,omitempty"`
	Dropout                     *float64                                       `json:"dropout,omitempty"`
	EarlyStop                   *bool                                          `json:"earlyStop,omitempty"`
	EnableGlobalExplain         *bool                                          `json:"enableGlobalExplain,omitempty"`
	FeedbackType                *TrainingOptionsFeedbackTypeEnum               `json:"feedbackType,omitempty"`
	HiddenUnits                 []string                                       `json:"hiddenUnits,omitempty"`
	HolidayRegion               *TrainingOptionsHolidayRegionEnum              `json:"holidayRegion,omitempty"`
	Horizon                     *string                                        `json:"horizon,omitempty"`
	HparamTuningObjectives      []TrainingOptionsHparamTuningObjectivesEnum    `json:"hparamTuningObjectives,omitempty"`
	IncludeDrift                *bool                                          `json:"includeDrift,omitempty"`
	InitialLearnRate            *float64                                       `json:"initialLearnRate,omitempty"`
	InputLabelColumns           []string                                       `json:"inputLabelColumns,omitempty"`
	IntegratedGradientsNumSteps *string                                        `json:"integratedGradientsNumSteps,omitempty"`
	ItemColumn                  *string                                        `json:"itemColumn,omitempty"`
	KmeansInitializationColumn  *string                                        `json:"kmeansInitializationColumn,omitempty"`
	KmeansInitializationMethod  *TrainingOptionsKmeansInitializationMethodEnum `json:"kmeansInitializationMethod,omitempty"`
	L1Regularization            *float64                                       `json:"l1Regularization,omitempty"`
	L2Regularization            *float64                                       `json:"l2Regularization,omitempty"`
	LabelClassWeights           map[string]float64                             `json:"labelClassWeights,omitempty"`
	LearnRate                   *float64                                       `json:"learnRate,omitempty"`
	LearnRateStrategy           *TrainingOptionsLearnRateStrategyEnum          `json:"learnRateStrategy,omitempty"`
	LossType                    *TrainingOptionsLossTypeEnum                   `json:"lossType,omitempty"`
	MaxIterations               *string                                        `json:"maxIterations,omitempty"`
	MaxParallelTrials           *string                                        `json:"maxParallelTrials,omitempty"`
	MaxTimeSeriesLength         *string                                        `json:"maxTimeSeriesLength,omitempty"`
	MaxTreeDepth                *string                                        `json:"maxTreeDepth,omitempty"`
	MinRelativeProgress         *float64                                       `json:"minRelativeProgress,omitempty"`
	MinSplitLoss                *float64                                       `json:"minSplitLoss,omitempty"`
	MinTimeSeriesLength         *string                                        `json:"minTimeSeriesLength,omitempty"`
	MinTreeChildWeight          *string                                        `json:"minTreeChildWeight,omitempty"`
	ModelURI                    *string                                        `json:"modelUri,omitempty"`
	NonSeasonalOrder            *ArimaOrder                                    `json:"nonSeasonalOrder,omitempty"`
	NumClusters                 *string                                        `json:"numClusters,omitempty"`
	NumFactors                  *string                                        `json:"numFactors,omitempty"`
	NumParallelTree             *string                                        `json:"numParallelTree,omitempty"`
	NumTrials                   *string                                        `json:"numTrials,omitempty"`
	OptimizationStrategy        *TrainingOptionsOptimizationStrategyEnum       `json:"optimizationStrategy,omitempty"`
	PreserveInputStructs        *bool                                          `json:"preserveInputStructs,omitempty"`
	SampledShapleyNumPaths      *string                                        `json:"sampledShapleyNumPaths,omitempty"`
	Subsample                   *float64                                       `json:"subsample,omitempty"`
	TimeSeriesDataColumn        *string                                        `json:"timeSeriesDataColumn,omitempty"`
	TimeSeriesIDColumn          *string                                        `json:"timeSeriesIdColumn,omitempty"`
	TimeSeriesIDColumns         []string                                       `json:"timeSeriesIdColumns,omitempty"`
	TimeSeriesLengthFraction    *float64                                       `json:"timeSeriesLengthFraction,omitempty"`
	TimeSeriesTimestampColumn   *string                                        `json:"timeSeriesTimestampColumn,omitempty"`
	TreeMethod                  *TrainingOptionsTreeMethodEnum                 `json:"treeMethod,omitempty"`
	TrendSmoothingWindowSize    *string                                        `json:"trendSmoothingWindowSize,omitempty"`
	UserColumn                  *string                                        `json:"userColumn,omitempty"`
	WalsAlpha                   *float64                                       `json:"walsAlpha,omitempty"`
	WarmStart                   *bool                                          `json:"warmStart,omitempty"`
}
