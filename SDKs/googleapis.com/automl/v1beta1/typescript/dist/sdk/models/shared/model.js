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
import { ImageClassificationModelMetadata } from "./imageclassificationmodelmetadata";
import { ImageObjectDetectionModelMetadata } from "./imageobjectdetectionmodelmetadata";
import { TablesModelMetadata } from "./tablesmodelmetadata";
import { TextClassificationModelMetadata } from "./textclassificationmodelmetadata";
import { TextExtractionModelMetadata } from "./textextractionmodelmetadata";
import { TranslationModelMetadata } from "./translationmodelmetadata";
export var ModelDeploymentStateEnum;
(function (ModelDeploymentStateEnum) {
    ModelDeploymentStateEnum["DeploymentStateUnspecified"] = "DEPLOYMENT_STATE_UNSPECIFIED";
    ModelDeploymentStateEnum["Deployed"] = "DEPLOYED";
    ModelDeploymentStateEnum["Undeployed"] = "UNDEPLOYED";
})(ModelDeploymentStateEnum || (ModelDeploymentStateEnum = {}));
// Model
/**
 * API proto representing a trained machine learning model.
**/
var Model = /** @class */ (function (_super) {
    __extends(Model, _super);
    function Model() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Model.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datasetId" }),
        __metadata("design:type", String)
    ], Model.prototype, "datasetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deploymentState" }),
        __metadata("design:type", String)
    ], Model.prototype, "deploymentState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Model.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageClassificationModelMetadata" }),
        __metadata("design:type", ImageClassificationModelMetadata)
    ], Model.prototype, "imageClassificationModelMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageObjectDetectionModelMetadata" }),
        __metadata("design:type", ImageObjectDetectionModelMetadata)
    ], Model.prototype, "imageObjectDetectionModelMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Model.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tablesModelMetadata" }),
        __metadata("design:type", TablesModelMetadata)
    ], Model.prototype, "tablesModelMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textClassificationModelMetadata" }),
        __metadata("design:type", TextClassificationModelMetadata)
    ], Model.prototype, "textClassificationModelMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textExtractionModelMetadata" }),
        __metadata("design:type", TextExtractionModelMetadata)
    ], Model.prototype, "textExtractionModelMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textSentimentModelMetadata" }),
        __metadata("design:type", Map)
    ], Model.prototype, "textSentimentModelMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=translationModelMetadata" }),
        __metadata("design:type", TranslationModelMetadata)
    ], Model.prototype, "translationModelMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Model.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoClassificationModelMetadata" }),
        __metadata("design:type", Map)
    ], Model.prototype, "videoClassificationModelMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoObjectTrackingModelMetadata" }),
        __metadata("design:type", Map)
    ], Model.prototype, "videoObjectTrackingModelMetadata", void 0);
    return Model;
}(SpeakeasyBase));
export { Model };
