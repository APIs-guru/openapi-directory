var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArimaOrder } from "./arimaorder";
export var TrainingOptionsBoosterTypeEnum;
(function (TrainingOptionsBoosterTypeEnum) {
    TrainingOptionsBoosterTypeEnum["BoosterTypeUnspecified"] = "BOOSTER_TYPE_UNSPECIFIED";
    TrainingOptionsBoosterTypeEnum["Gbtree"] = "GBTREE";
    TrainingOptionsBoosterTypeEnum["Dart"] = "DART";
})(TrainingOptionsBoosterTypeEnum || (TrainingOptionsBoosterTypeEnum = {}));
export var TrainingOptionsColorSpaceEnum;
(function (TrainingOptionsColorSpaceEnum) {
    TrainingOptionsColorSpaceEnum["ColorSpaceUnspecified"] = "COLOR_SPACE_UNSPECIFIED";
    TrainingOptionsColorSpaceEnum["Rgb"] = "RGB";
    TrainingOptionsColorSpaceEnum["Hsv"] = "HSV";
    TrainingOptionsColorSpaceEnum["Yiq"] = "YIQ";
    TrainingOptionsColorSpaceEnum["Yuv"] = "YUV";
    TrainingOptionsColorSpaceEnum["Grayscale"] = "GRAYSCALE";
})(TrainingOptionsColorSpaceEnum || (TrainingOptionsColorSpaceEnum = {}));
export var TrainingOptionsDartNormalizeTypeEnum;
(function (TrainingOptionsDartNormalizeTypeEnum) {
    TrainingOptionsDartNormalizeTypeEnum["DartNormalizeTypeUnspecified"] = "DART_NORMALIZE_TYPE_UNSPECIFIED";
    TrainingOptionsDartNormalizeTypeEnum["Tree"] = "TREE";
    TrainingOptionsDartNormalizeTypeEnum["Forest"] = "FOREST";
})(TrainingOptionsDartNormalizeTypeEnum || (TrainingOptionsDartNormalizeTypeEnum = {}));
export var TrainingOptionsDataFrequencyEnum;
(function (TrainingOptionsDataFrequencyEnum) {
    TrainingOptionsDataFrequencyEnum["DataFrequencyUnspecified"] = "DATA_FREQUENCY_UNSPECIFIED";
    TrainingOptionsDataFrequencyEnum["AutoFrequency"] = "AUTO_FREQUENCY";
    TrainingOptionsDataFrequencyEnum["Yearly"] = "YEARLY";
    TrainingOptionsDataFrequencyEnum["Quarterly"] = "QUARTERLY";
    TrainingOptionsDataFrequencyEnum["Monthly"] = "MONTHLY";
    TrainingOptionsDataFrequencyEnum["Weekly"] = "WEEKLY";
    TrainingOptionsDataFrequencyEnum["Daily"] = "DAILY";
    TrainingOptionsDataFrequencyEnum["Hourly"] = "HOURLY";
    TrainingOptionsDataFrequencyEnum["PerMinute"] = "PER_MINUTE";
})(TrainingOptionsDataFrequencyEnum || (TrainingOptionsDataFrequencyEnum = {}));
export var TrainingOptionsDataSplitMethodEnum;
(function (TrainingOptionsDataSplitMethodEnum) {
    TrainingOptionsDataSplitMethodEnum["DataSplitMethodUnspecified"] = "DATA_SPLIT_METHOD_UNSPECIFIED";
    TrainingOptionsDataSplitMethodEnum["Random"] = "RANDOM";
    TrainingOptionsDataSplitMethodEnum["Custom"] = "CUSTOM";
    TrainingOptionsDataSplitMethodEnum["Sequential"] = "SEQUENTIAL";
    TrainingOptionsDataSplitMethodEnum["NoSplit"] = "NO_SPLIT";
    TrainingOptionsDataSplitMethodEnum["AutoSplit"] = "AUTO_SPLIT";
})(TrainingOptionsDataSplitMethodEnum || (TrainingOptionsDataSplitMethodEnum = {}));
export var TrainingOptionsDistanceTypeEnum;
(function (TrainingOptionsDistanceTypeEnum) {
    TrainingOptionsDistanceTypeEnum["DistanceTypeUnspecified"] = "DISTANCE_TYPE_UNSPECIFIED";
    TrainingOptionsDistanceTypeEnum["Euclidean"] = "EUCLIDEAN";
    TrainingOptionsDistanceTypeEnum["Cosine"] = "COSINE";
})(TrainingOptionsDistanceTypeEnum || (TrainingOptionsDistanceTypeEnum = {}));
export var TrainingOptionsFeedbackTypeEnum;
(function (TrainingOptionsFeedbackTypeEnum) {
    TrainingOptionsFeedbackTypeEnum["FeedbackTypeUnspecified"] = "FEEDBACK_TYPE_UNSPECIFIED";
    TrainingOptionsFeedbackTypeEnum["Implicit"] = "IMPLICIT";
    TrainingOptionsFeedbackTypeEnum["Explicit"] = "EXPLICIT";
})(TrainingOptionsFeedbackTypeEnum || (TrainingOptionsFeedbackTypeEnum = {}));
export var TrainingOptionsHolidayRegionEnum;
(function (TrainingOptionsHolidayRegionEnum) {
    TrainingOptionsHolidayRegionEnum["HolidayRegionUnspecified"] = "HOLIDAY_REGION_UNSPECIFIED";
    TrainingOptionsHolidayRegionEnum["Global"] = "GLOBAL";
    TrainingOptionsHolidayRegionEnum["Na"] = "NA";
    TrainingOptionsHolidayRegionEnum["Japac"] = "JAPAC";
    TrainingOptionsHolidayRegionEnum["Emea"] = "EMEA";
    TrainingOptionsHolidayRegionEnum["Lac"] = "LAC";
    TrainingOptionsHolidayRegionEnum["Ae"] = "AE";
    TrainingOptionsHolidayRegionEnum["Ar"] = "AR";
    TrainingOptionsHolidayRegionEnum["At"] = "AT";
    TrainingOptionsHolidayRegionEnum["Au"] = "AU";
    TrainingOptionsHolidayRegionEnum["Be"] = "BE";
    TrainingOptionsHolidayRegionEnum["Br"] = "BR";
    TrainingOptionsHolidayRegionEnum["Ca"] = "CA";
    TrainingOptionsHolidayRegionEnum["Ch"] = "CH";
    TrainingOptionsHolidayRegionEnum["Cl"] = "CL";
    TrainingOptionsHolidayRegionEnum["Cn"] = "CN";
    TrainingOptionsHolidayRegionEnum["Co"] = "CO";
    TrainingOptionsHolidayRegionEnum["Cs"] = "CS";
    TrainingOptionsHolidayRegionEnum["Cz"] = "CZ";
    TrainingOptionsHolidayRegionEnum["De"] = "DE";
    TrainingOptionsHolidayRegionEnum["Dk"] = "DK";
    TrainingOptionsHolidayRegionEnum["Dz"] = "DZ";
    TrainingOptionsHolidayRegionEnum["Ec"] = "EC";
    TrainingOptionsHolidayRegionEnum["Ee"] = "EE";
    TrainingOptionsHolidayRegionEnum["Eg"] = "EG";
    TrainingOptionsHolidayRegionEnum["Es"] = "ES";
    TrainingOptionsHolidayRegionEnum["Fi"] = "FI";
    TrainingOptionsHolidayRegionEnum["Fr"] = "FR";
    TrainingOptionsHolidayRegionEnum["Gb"] = "GB";
    TrainingOptionsHolidayRegionEnum["Gr"] = "GR";
    TrainingOptionsHolidayRegionEnum["Hk"] = "HK";
    TrainingOptionsHolidayRegionEnum["Hu"] = "HU";
    TrainingOptionsHolidayRegionEnum["Id"] = "ID";
    TrainingOptionsHolidayRegionEnum["Ie"] = "IE";
    TrainingOptionsHolidayRegionEnum["Il"] = "IL";
    TrainingOptionsHolidayRegionEnum["In"] = "IN";
    TrainingOptionsHolidayRegionEnum["Ir"] = "IR";
    TrainingOptionsHolidayRegionEnum["It"] = "IT";
    TrainingOptionsHolidayRegionEnum["Jp"] = "JP";
    TrainingOptionsHolidayRegionEnum["Kr"] = "KR";
    TrainingOptionsHolidayRegionEnum["Lv"] = "LV";
    TrainingOptionsHolidayRegionEnum["Ma"] = "MA";
    TrainingOptionsHolidayRegionEnum["Mx"] = "MX";
    TrainingOptionsHolidayRegionEnum["My"] = "MY";
    TrainingOptionsHolidayRegionEnum["Ng"] = "NG";
    TrainingOptionsHolidayRegionEnum["Nl"] = "NL";
    TrainingOptionsHolidayRegionEnum["No"] = "NO";
    TrainingOptionsHolidayRegionEnum["Nz"] = "NZ";
    TrainingOptionsHolidayRegionEnum["Pe"] = "PE";
    TrainingOptionsHolidayRegionEnum["Ph"] = "PH";
    TrainingOptionsHolidayRegionEnum["Pk"] = "PK";
    TrainingOptionsHolidayRegionEnum["Pl"] = "PL";
    TrainingOptionsHolidayRegionEnum["Pt"] = "PT";
    TrainingOptionsHolidayRegionEnum["Ro"] = "RO";
    TrainingOptionsHolidayRegionEnum["Rs"] = "RS";
    TrainingOptionsHolidayRegionEnum["Ru"] = "RU";
    TrainingOptionsHolidayRegionEnum["Sa"] = "SA";
    TrainingOptionsHolidayRegionEnum["Se"] = "SE";
    TrainingOptionsHolidayRegionEnum["Sg"] = "SG";
    TrainingOptionsHolidayRegionEnum["Si"] = "SI";
    TrainingOptionsHolidayRegionEnum["Sk"] = "SK";
    TrainingOptionsHolidayRegionEnum["Th"] = "TH";
    TrainingOptionsHolidayRegionEnum["Tr"] = "TR";
    TrainingOptionsHolidayRegionEnum["Tw"] = "TW";
    TrainingOptionsHolidayRegionEnum["Ua"] = "UA";
    TrainingOptionsHolidayRegionEnum["Us"] = "US";
    TrainingOptionsHolidayRegionEnum["Ve"] = "VE";
    TrainingOptionsHolidayRegionEnum["Vn"] = "VN";
    TrainingOptionsHolidayRegionEnum["Za"] = "ZA";
})(TrainingOptionsHolidayRegionEnum || (TrainingOptionsHolidayRegionEnum = {}));
export var TrainingOptionsHparamTuningObjectivesEnum;
(function (TrainingOptionsHparamTuningObjectivesEnum) {
    TrainingOptionsHparamTuningObjectivesEnum["HparamTuningObjectiveUnspecified"] = "HPARAM_TUNING_OBJECTIVE_UNSPECIFIED";
    TrainingOptionsHparamTuningObjectivesEnum["MeanAbsoluteError"] = "MEAN_ABSOLUTE_ERROR";
    TrainingOptionsHparamTuningObjectivesEnum["MeanSquaredError"] = "MEAN_SQUARED_ERROR";
    TrainingOptionsHparamTuningObjectivesEnum["MeanSquaredLogError"] = "MEAN_SQUARED_LOG_ERROR";
    TrainingOptionsHparamTuningObjectivesEnum["MedianAbsoluteError"] = "MEDIAN_ABSOLUTE_ERROR";
    TrainingOptionsHparamTuningObjectivesEnum["RSquared"] = "R_SQUARED";
    TrainingOptionsHparamTuningObjectivesEnum["ExplainedVariance"] = "EXPLAINED_VARIANCE";
    TrainingOptionsHparamTuningObjectivesEnum["Precision"] = "PRECISION";
    TrainingOptionsHparamTuningObjectivesEnum["Recall"] = "RECALL";
    TrainingOptionsHparamTuningObjectivesEnum["Accuracy"] = "ACCURACY";
    TrainingOptionsHparamTuningObjectivesEnum["F1Score"] = "F1_SCORE";
    TrainingOptionsHparamTuningObjectivesEnum["LogLoss"] = "LOG_LOSS";
    TrainingOptionsHparamTuningObjectivesEnum["RocAuc"] = "ROC_AUC";
    TrainingOptionsHparamTuningObjectivesEnum["DaviesBouldinIndex"] = "DAVIES_BOULDIN_INDEX";
    TrainingOptionsHparamTuningObjectivesEnum["MeanAveragePrecision"] = "MEAN_AVERAGE_PRECISION";
    TrainingOptionsHparamTuningObjectivesEnum["NormalizedDiscountedCumulativeGain"] = "NORMALIZED_DISCOUNTED_CUMULATIVE_GAIN";
    TrainingOptionsHparamTuningObjectivesEnum["AverageRank"] = "AVERAGE_RANK";
})(TrainingOptionsHparamTuningObjectivesEnum || (TrainingOptionsHparamTuningObjectivesEnum = {}));
export var TrainingOptionsKmeansInitializationMethodEnum;
(function (TrainingOptionsKmeansInitializationMethodEnum) {
    TrainingOptionsKmeansInitializationMethodEnum["KmeansInitializationMethodUnspecified"] = "KMEANS_INITIALIZATION_METHOD_UNSPECIFIED";
    TrainingOptionsKmeansInitializationMethodEnum["Random"] = "RANDOM";
    TrainingOptionsKmeansInitializationMethodEnum["Custom"] = "CUSTOM";
    TrainingOptionsKmeansInitializationMethodEnum["KmeansPlusPlus"] = "KMEANS_PLUS_PLUS";
})(TrainingOptionsKmeansInitializationMethodEnum || (TrainingOptionsKmeansInitializationMethodEnum = {}));
export var TrainingOptionsLearnRateStrategyEnum;
(function (TrainingOptionsLearnRateStrategyEnum) {
    TrainingOptionsLearnRateStrategyEnum["LearnRateStrategyUnspecified"] = "LEARN_RATE_STRATEGY_UNSPECIFIED";
    TrainingOptionsLearnRateStrategyEnum["LineSearch"] = "LINE_SEARCH";
    TrainingOptionsLearnRateStrategyEnum["Constant"] = "CONSTANT";
})(TrainingOptionsLearnRateStrategyEnum || (TrainingOptionsLearnRateStrategyEnum = {}));
export var TrainingOptionsLossTypeEnum;
(function (TrainingOptionsLossTypeEnum) {
    TrainingOptionsLossTypeEnum["LossTypeUnspecified"] = "LOSS_TYPE_UNSPECIFIED";
    TrainingOptionsLossTypeEnum["MeanSquaredLoss"] = "MEAN_SQUARED_LOSS";
    TrainingOptionsLossTypeEnum["MeanLogLoss"] = "MEAN_LOG_LOSS";
})(TrainingOptionsLossTypeEnum || (TrainingOptionsLossTypeEnum = {}));
export var TrainingOptionsOptimizationStrategyEnum;
(function (TrainingOptionsOptimizationStrategyEnum) {
    TrainingOptionsOptimizationStrategyEnum["OptimizationStrategyUnspecified"] = "OPTIMIZATION_STRATEGY_UNSPECIFIED";
    TrainingOptionsOptimizationStrategyEnum["BatchGradientDescent"] = "BATCH_GRADIENT_DESCENT";
    TrainingOptionsOptimizationStrategyEnum["NormalEquation"] = "NORMAL_EQUATION";
})(TrainingOptionsOptimizationStrategyEnum || (TrainingOptionsOptimizationStrategyEnum = {}));
export var TrainingOptionsTreeMethodEnum;
(function (TrainingOptionsTreeMethodEnum) {
    TrainingOptionsTreeMethodEnum["TreeMethodUnspecified"] = "TREE_METHOD_UNSPECIFIED";
    TrainingOptionsTreeMethodEnum["Auto"] = "AUTO";
    TrainingOptionsTreeMethodEnum["Exact"] = "EXACT";
    TrainingOptionsTreeMethodEnum["Approx"] = "APPROX";
    TrainingOptionsTreeMethodEnum["Hist"] = "HIST";
})(TrainingOptionsTreeMethodEnum || (TrainingOptionsTreeMethodEnum = {}));
// TrainingOptions
/**
 * Options used in model training.
**/
var TrainingOptions = /** @class */ (function (_super) {
    __extends(TrainingOptions, _super);
    function TrainingOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adjustStepChanges" }),
        __metadata("design:type", Boolean)
    ], TrainingOptions.prototype, "adjustStepChanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoArima" }),
        __metadata("design:type", Boolean)
    ], TrainingOptions.prototype, "autoArima", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoArimaMaxOrder" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "autoArimaMaxOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=batchSize" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "batchSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boosterType" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "boosterType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=calculatePValues" }),
        __metadata("design:type", Boolean)
    ], TrainingOptions.prototype, "calculatePValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cleanSpikesAndDips" }),
        __metadata("design:type", Boolean)
    ], TrainingOptions.prototype, "cleanSpikesAndDips", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=colorSpace" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "colorSpace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=colsampleBylevel" }),
        __metadata("design:type", Number)
    ], TrainingOptions.prototype, "colsampleBylevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=colsampleBynode" }),
        __metadata("design:type", Number)
    ], TrainingOptions.prototype, "colsampleBynode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=colsampleBytree" }),
        __metadata("design:type", Number)
    ], TrainingOptions.prototype, "colsampleBytree", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dartNormalizeType" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "dartNormalizeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataFrequency" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "dataFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSplitColumn" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "dataSplitColumn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSplitEvalFraction" }),
        __metadata("design:type", Number)
    ], TrainingOptions.prototype, "dataSplitEvalFraction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSplitMethod" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "dataSplitMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decomposeTimeSeries" }),
        __metadata("design:type", Boolean)
    ], TrainingOptions.prototype, "decomposeTimeSeries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distanceType" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "distanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dropout" }),
        __metadata("design:type", Number)
    ], TrainingOptions.prototype, "dropout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=earlyStop" }),
        __metadata("design:type", Boolean)
    ], TrainingOptions.prototype, "earlyStop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableGlobalExplain" }),
        __metadata("design:type", Boolean)
    ], TrainingOptions.prototype, "enableGlobalExplain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feedbackType" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "feedbackType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hiddenUnits" }),
        __metadata("design:type", Array)
    ], TrainingOptions.prototype, "hiddenUnits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=holidayRegion" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "holidayRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=horizon" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "horizon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hparamTuningObjectives" }),
        __metadata("design:type", Array)
    ], TrainingOptions.prototype, "hparamTuningObjectives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeDrift" }),
        __metadata("design:type", Boolean)
    ], TrainingOptions.prototype, "includeDrift", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initialLearnRate" }),
        __metadata("design:type", Number)
    ], TrainingOptions.prototype, "initialLearnRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputLabelColumns" }),
        __metadata("design:type", Array)
    ], TrainingOptions.prototype, "inputLabelColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integratedGradientsNumSteps" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "integratedGradientsNumSteps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemColumn" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "itemColumn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kmeansInitializationColumn" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "kmeansInitializationColumn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kmeansInitializationMethod" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "kmeansInitializationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=l1Regularization" }),
        __metadata("design:type", Number)
    ], TrainingOptions.prototype, "l1Regularization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=l2Regularization" }),
        __metadata("design:type", Number)
    ], TrainingOptions.prototype, "l2Regularization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labelClassWeights" }),
        __metadata("design:type", Map)
    ], TrainingOptions.prototype, "labelClassWeights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=learnRate" }),
        __metadata("design:type", Number)
    ], TrainingOptions.prototype, "learnRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=learnRateStrategy" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "learnRateStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lossType" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "lossType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxIterations" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "maxIterations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxParallelTrials" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "maxParallelTrials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxTimeSeriesLength" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "maxTimeSeriesLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxTreeDepth" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "maxTreeDepth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minRelativeProgress" }),
        __metadata("design:type", Number)
    ], TrainingOptions.prototype, "minRelativeProgress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minSplitLoss" }),
        __metadata("design:type", Number)
    ], TrainingOptions.prototype, "minSplitLoss", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minTimeSeriesLength" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "minTimeSeriesLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minTreeChildWeight" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "minTreeChildWeight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modelUri" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "modelUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nonSeasonalOrder" }),
        __metadata("design:type", ArimaOrder)
    ], TrainingOptions.prototype, "nonSeasonalOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numClusters" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "numClusters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numFactors" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "numFactors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numParallelTree" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "numParallelTree", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numTrials" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "numTrials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=optimizationStrategy" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "optimizationStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preserveInputStructs" }),
        __metadata("design:type", Boolean)
    ], TrainingOptions.prototype, "preserveInputStructs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sampledShapleyNumPaths" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "sampledShapleyNumPaths", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subsample" }),
        __metadata("design:type", Number)
    ], TrainingOptions.prototype, "subsample", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeSeriesDataColumn" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "timeSeriesDataColumn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeSeriesIdColumn" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "timeSeriesIdColumn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeSeriesIdColumns" }),
        __metadata("design:type", Array)
    ], TrainingOptions.prototype, "timeSeriesIdColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeSeriesLengthFraction" }),
        __metadata("design:type", Number)
    ], TrainingOptions.prototype, "timeSeriesLengthFraction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeSeriesTimestampColumn" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "timeSeriesTimestampColumn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treeMethod" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "treeMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trendSmoothingWindowSize" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "trendSmoothingWindowSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userColumn" }),
        __metadata("design:type", String)
    ], TrainingOptions.prototype, "userColumn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=walsAlpha" }),
        __metadata("design:type", Number)
    ], TrainingOptions.prototype, "walsAlpha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=warmStart" }),
        __metadata("design:type", Boolean)
    ], TrainingOptions.prototype, "warmStart", void 0);
    return TrainingOptions;
}(SpeakeasyBase));
export { TrainingOptions };
