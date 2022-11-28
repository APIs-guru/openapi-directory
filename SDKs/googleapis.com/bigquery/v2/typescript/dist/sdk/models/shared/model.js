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
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { HparamSearchSpaces } from "./hparamsearchspaces";
import { ModelReference } from "./modelreference";
import { TrainingRunInput } from "./trainingrun";
import { StandardSqlField } from "./standardsqlfield";
import { HparamTuningTrial } from "./hparamtuningtrial";
import { TrainingRun } from "./trainingrun";
export var ModelModelTypeEnum;
(function (ModelModelTypeEnum) {
    ModelModelTypeEnum["ModelTypeUnspecified"] = "MODEL_TYPE_UNSPECIFIED";
    ModelModelTypeEnum["LinearRegression"] = "LINEAR_REGRESSION";
    ModelModelTypeEnum["LogisticRegression"] = "LOGISTIC_REGRESSION";
    ModelModelTypeEnum["Kmeans"] = "KMEANS";
    ModelModelTypeEnum["MatrixFactorization"] = "MATRIX_FACTORIZATION";
    ModelModelTypeEnum["DnnClassifier"] = "DNN_CLASSIFIER";
    ModelModelTypeEnum["Tensorflow"] = "TENSORFLOW";
    ModelModelTypeEnum["DnnRegressor"] = "DNN_REGRESSOR";
    ModelModelTypeEnum["BoostedTreeRegressor"] = "BOOSTED_TREE_REGRESSOR";
    ModelModelTypeEnum["BoostedTreeClassifier"] = "BOOSTED_TREE_CLASSIFIER";
    ModelModelTypeEnum["Arima"] = "ARIMA";
    ModelModelTypeEnum["AutomlRegressor"] = "AUTOML_REGRESSOR";
    ModelModelTypeEnum["AutomlClassifier"] = "AUTOML_CLASSIFIER";
    ModelModelTypeEnum["Pca"] = "PCA";
    ModelModelTypeEnum["DnnLinearCombinedClassifier"] = "DNN_LINEAR_COMBINED_CLASSIFIER";
    ModelModelTypeEnum["DnnLinearCombinedRegressor"] = "DNN_LINEAR_COMBINED_REGRESSOR";
    ModelModelTypeEnum["Autoencoder"] = "AUTOENCODER";
    ModelModelTypeEnum["ArimaPlus"] = "ARIMA_PLUS";
    ModelModelTypeEnum["RandomForestRegressor"] = "RANDOM_FOREST_REGRESSOR";
    ModelModelTypeEnum["RandomForestClassifier"] = "RANDOM_FOREST_CLASSIFIER";
})(ModelModelTypeEnum || (ModelModelTypeEnum = {}));
var ModelInput = /** @class */ (function (_super) {
    __extends(ModelInput, _super);
    function ModelInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bestTrialId" }),
        __metadata("design:type", String)
    ], ModelInput.prototype, "bestTrialId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ModelInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionConfiguration" }),
        __metadata("design:type", EncryptionConfiguration)
    ], ModelInput.prototype, "encryptionConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expirationTime" }),
        __metadata("design:type", String)
    ], ModelInput.prototype, "expirationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendlyName" }),
        __metadata("design:type", String)
    ], ModelInput.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hparamSearchSpaces" }),
        __metadata("design:type", HparamSearchSpaces)
    ], ModelInput.prototype, "hparamSearchSpaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ModelInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modelReference" }),
        __metadata("design:type", ModelReference)
    ], ModelInput.prototype, "modelReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trainingRuns", elemType: TrainingRunInput }),
        __metadata("design:type", Array)
    ], ModelInput.prototype, "trainingRuns", void 0);
    return ModelInput;
}(SpeakeasyBase));
export { ModelInput };
var Model = /** @class */ (function (_super) {
    __extends(Model, _super);
    function Model() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bestTrialId" }),
        __metadata("design:type", String)
    ], Model.prototype, "bestTrialId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationTime" }),
        __metadata("design:type", String)
    ], Model.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultTrialId" }),
        __metadata("design:type", String)
    ], Model.prototype, "defaultTrialId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Model.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionConfiguration" }),
        __metadata("design:type", EncryptionConfiguration)
    ], Model.prototype, "encryptionConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Model.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expirationTime" }),
        __metadata("design:type", String)
    ], Model.prototype, "expirationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=featureColumns", elemType: StandardSqlField }),
        __metadata("design:type", Array)
    ], Model.prototype, "featureColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendlyName" }),
        __metadata("design:type", String)
    ], Model.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hparamSearchSpaces" }),
        __metadata("design:type", HparamSearchSpaces)
    ], Model.prototype, "hparamSearchSpaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hparamTrials", elemType: HparamTuningTrial }),
        __metadata("design:type", Array)
    ], Model.prototype, "hparamTrials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labelColumns", elemType: StandardSqlField }),
        __metadata("design:type", Array)
    ], Model.prototype, "labelColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Model.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedTime" }),
        __metadata("design:type", String)
    ], Model.prototype, "lastModifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], Model.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modelReference" }),
        __metadata("design:type", ModelReference)
    ], Model.prototype, "modelReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modelType" }),
        __metadata("design:type", String)
    ], Model.prototype, "modelType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=optimalTrialIds" }),
        __metadata("design:type", Array)
    ], Model.prototype, "optimalTrialIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trainingRuns", elemType: TrainingRun }),
        __metadata("design:type", Array)
    ], Model.prototype, "trainingRuns", void 0);
    return Model;
}(SpeakeasyBase));
export { Model };
