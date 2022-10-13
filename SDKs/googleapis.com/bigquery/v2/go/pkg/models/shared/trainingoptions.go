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

type TrainingOptions struct {
	AdjustStepChanges           *bool                                          `json:"adjustStepChanges"`
	AutoArima                   *bool                                          `json:"autoArima"`
	AutoArimaMaxOrder           *string                                        `json:"autoArimaMaxOrder"`
	BatchSize                   *string                                        `json:"batchSize"`
	BoosterType                 *TrainingOptionsBoosterTypeEnum                `json:"boosterType"`
	CalculatePValues            *bool                                          `json:"calculatePValues"`
	CleanSpikesAndDips          *bool                                          `json:"cleanSpikesAndDips"`
	ColorSpace                  *TrainingOptionsColorSpaceEnum                 `json:"colorSpace"`
	ColsampleBylevel            *float64                                       `json:"colsampleBylevel"`
	ColsampleBynode             *float64                                       `json:"colsampleBynode"`
	ColsampleBytree             *float64                                       `json:"colsampleBytree"`
	DartNormalizeType           *TrainingOptionsDartNormalizeTypeEnum          `json:"dartNormalizeType"`
	DataFrequency               *TrainingOptionsDataFrequencyEnum              `json:"dataFrequency"`
	DataSplitColumn             *string                                        `json:"dataSplitColumn"`
	DataSplitEvalFraction       *float64                                       `json:"dataSplitEvalFraction"`
	DataSplitMethod             *TrainingOptionsDataSplitMethodEnum            `json:"dataSplitMethod"`
	DecomposeTimeSeries         *bool                                          `json:"decomposeTimeSeries"`
	DistanceType                *TrainingOptionsDistanceTypeEnum               `json:"distanceType"`
	Dropout                     *float64                                       `json:"dropout"`
	EarlyStop                   *bool                                          `json:"earlyStop"`
	EnableGlobalExplain         *bool                                          `json:"enableGlobalExplain"`
	FeedbackType                *TrainingOptionsFeedbackTypeEnum               `json:"feedbackType"`
	HiddenUnits                 []string                                       `json:"hiddenUnits"`
	HolidayRegion               *TrainingOptionsHolidayRegionEnum              `json:"holidayRegion"`
	Horizon                     *string                                        `json:"horizon"`
	HparamTuningObjectives      []TrainingOptionsHparamTuningObjectivesEnum    `json:"hparamTuningObjectives"`
	IncludeDrift                *bool                                          `json:"includeDrift"`
	InitialLearnRate            *float64                                       `json:"initialLearnRate"`
	InputLabelColumns           []string                                       `json:"inputLabelColumns"`
	IntegratedGradientsNumSteps *string                                        `json:"integratedGradientsNumSteps"`
	ItemColumn                  *string                                        `json:"itemColumn"`
	KmeansInitializationColumn  *string                                        `json:"kmeansInitializationColumn"`
	KmeansInitializationMethod  *TrainingOptionsKmeansInitializationMethodEnum `json:"kmeansInitializationMethod"`
	L1Regularization            *float64                                       `json:"l1Regularization"`
	L2Regularization            *float64                                       `json:"l2Regularization"`
	LabelClassWeights           map[string]float64                             `json:"labelClassWeights"`
	LearnRate                   *float64                                       `json:"learnRate"`
	LearnRateStrategy           *TrainingOptionsLearnRateStrategyEnum          `json:"learnRateStrategy"`
	LossType                    *TrainingOptionsLossTypeEnum                   `json:"lossType"`
	MaxIterations               *string                                        `json:"maxIterations"`
	MaxParallelTrials           *string                                        `json:"maxParallelTrials"`
	MaxTimeSeriesLength         *string                                        `json:"maxTimeSeriesLength"`
	MaxTreeDepth                *string                                        `json:"maxTreeDepth"`
	MinRelativeProgress         *float64                                       `json:"minRelativeProgress"`
	MinSplitLoss                *float64                                       `json:"minSplitLoss"`
	MinTimeSeriesLength         *string                                        `json:"minTimeSeriesLength"`
	MinTreeChildWeight          *string                                        `json:"minTreeChildWeight"`
	ModelURI                    *string                                        `json:"modelUri"`
	NonSeasonalOrder            *ArimaOrder                                    `json:"nonSeasonalOrder"`
	NumClusters                 *string                                        `json:"numClusters"`
	NumFactors                  *string                                        `json:"numFactors"`
	NumParallelTree             *string                                        `json:"numParallelTree"`
	NumTrials                   *string                                        `json:"numTrials"`
	OptimizationStrategy        *TrainingOptionsOptimizationStrategyEnum       `json:"optimizationStrategy"`
	PreserveInputStructs        *bool                                          `json:"preserveInputStructs"`
	SampledShapleyNumPaths      *string                                        `json:"sampledShapleyNumPaths"`
	Subsample                   *float64                                       `json:"subsample"`
	TimeSeriesDataColumn        *string                                        `json:"timeSeriesDataColumn"`
	TimeSeriesIDColumn          *string                                        `json:"timeSeriesIdColumn"`
	TimeSeriesIDColumns         []string                                       `json:"timeSeriesIdColumns"`
	TimeSeriesLengthFraction    *float64                                       `json:"timeSeriesLengthFraction"`
	TimeSeriesTimestampColumn   *string                                        `json:"timeSeriesTimestampColumn"`
	TreeMethod                  *TrainingOptionsTreeMethodEnum                 `json:"treeMethod"`
	TrendSmoothingWindowSize    *string                                        `json:"trendSmoothingWindowSize"`
	UserColumn                  *string                                        `json:"userColumn"`
	WalsAlpha                   *float64                                       `json:"walsAlpha"`
	WarmStart                   *bool                                          `json:"warmStart"`
}
