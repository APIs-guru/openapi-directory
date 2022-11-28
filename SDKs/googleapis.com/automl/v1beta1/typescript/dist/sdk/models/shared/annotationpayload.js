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
import { ClassificationAnnotation } from "./classificationannotation";
import { ImageObjectDetectionAnnotation } from "./imageobjectdetectionannotation";
import { TablesAnnotation } from "./tablesannotation";
import { TextExtractionAnnotation } from "./textextractionannotation";
import { TextSentimentAnnotation } from "./textsentimentannotation";
import { TranslationAnnotation } from "./translationannotation";
import { VideoClassificationAnnotation } from "./videoclassificationannotation";
import { VideoObjectTrackingAnnotation } from "./videoobjecttrackingannotation";
// AnnotationPayload
/**
 * Contains annotation information that is relevant to AutoML.
**/
var AnnotationPayload = /** @class */ (function (_super) {
    __extends(AnnotationPayload, _super);
    function AnnotationPayload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotationSpecId" }),
        __metadata("design:type", String)
    ], AnnotationPayload.prototype, "annotationSpecId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=classification" }),
        __metadata("design:type", ClassificationAnnotation)
    ], AnnotationPayload.prototype, "classification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], AnnotationPayload.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageObjectDetection" }),
        __metadata("design:type", ImageObjectDetectionAnnotation)
    ], AnnotationPayload.prototype, "imageObjectDetection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tables" }),
        __metadata("design:type", TablesAnnotation)
    ], AnnotationPayload.prototype, "tables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textExtraction" }),
        __metadata("design:type", TextExtractionAnnotation)
    ], AnnotationPayload.prototype, "textExtraction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textSentiment" }),
        __metadata("design:type", TextSentimentAnnotation)
    ], AnnotationPayload.prototype, "textSentiment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=translation" }),
        __metadata("design:type", TranslationAnnotation)
    ], AnnotationPayload.prototype, "translation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoClassification" }),
        __metadata("design:type", VideoClassificationAnnotation)
    ], AnnotationPayload.prototype, "videoClassification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoObjectTracking" }),
        __metadata("design:type", VideoObjectTrackingAnnotation)
    ], AnnotationPayload.prototype, "videoObjectTracking", void 0);
    return AnnotationPayload;
}(SpeakeasyBase));
export { AnnotationPayload };
