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
import { ImageClassificationDatasetMetadata } from "./imageclassificationdatasetmetadata";
import { TablesDatasetMetadata } from "./tablesdatasetmetadata";
import { TextClassificationDatasetMetadata } from "./textclassificationdatasetmetadata";
import { TextSentimentDatasetMetadata } from "./textsentimentdatasetmetadata";
import { TranslationDatasetMetadata } from "./translationdatasetmetadata";
// Dataset
/**
 * A workspace for solving a single, particular machine learning (ML) problem. A workspace contains examples that may be annotated.
**/
var Dataset = /** @class */ (function (_super) {
    __extends(Dataset, _super);
    function Dataset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Dataset.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Dataset.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Dataset.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Dataset.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exampleCount" }),
        __metadata("design:type", Number)
    ], Dataset.prototype, "exampleCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageClassificationDatasetMetadata" }),
        __metadata("design:type", ImageClassificationDatasetMetadata)
    ], Dataset.prototype, "imageClassificationDatasetMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageObjectDetectionDatasetMetadata" }),
        __metadata("design:type", Map)
    ], Dataset.prototype, "imageObjectDetectionDatasetMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Dataset.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tablesDatasetMetadata" }),
        __metadata("design:type", TablesDatasetMetadata)
    ], Dataset.prototype, "tablesDatasetMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textClassificationDatasetMetadata" }),
        __metadata("design:type", TextClassificationDatasetMetadata)
    ], Dataset.prototype, "textClassificationDatasetMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textExtractionDatasetMetadata" }),
        __metadata("design:type", Map)
    ], Dataset.prototype, "textExtractionDatasetMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textSentimentDatasetMetadata" }),
        __metadata("design:type", TextSentimentDatasetMetadata)
    ], Dataset.prototype, "textSentimentDatasetMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=translationDatasetMetadata" }),
        __metadata("design:type", TranslationDatasetMetadata)
    ], Dataset.prototype, "translationDatasetMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoClassificationDatasetMetadata" }),
        __metadata("design:type", Map)
    ], Dataset.prototype, "videoClassificationDatasetMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoObjectTrackingDatasetMetadata" }),
        __metadata("design:type", Map)
    ], Dataset.prototype, "videoObjectTrackingDatasetMetadata", void 0);
    return Dataset;
}(SpeakeasyBase));
export { Dataset };
