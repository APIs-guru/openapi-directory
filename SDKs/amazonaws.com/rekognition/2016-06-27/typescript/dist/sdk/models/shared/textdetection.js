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
import { Geometry } from "./geometry";
import { TextTypesEnum } from "./texttypesenum";
// TextDetection
/**
 * <p>Information about a word or line of text detected by <a>DetectText</a>.</p> <p>The <code>DetectedText</code> field contains the text that Amazon Rekognition detected in the image. </p> <p>Every word and line has an identifier (<code>Id</code>). Each word belongs to a line and has a parent identifier (<code>ParentId</code>) that identifies the line of text in which the word appears. The word <code>Id</code> is also an index for the word within a line of words. </p> <p>For more information, see Detecting Text in the Amazon Rekognition Developer Guide.</p>
**/
var TextDetection = /** @class */ (function (_super) {
    __extends(TextDetection, _super);
    function TextDetection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Confidence" }),
        __metadata("design:type", Number)
    ], TextDetection.prototype, "confidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DetectedText" }),
        __metadata("design:type", String)
    ], TextDetection.prototype, "detectedText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Geometry" }),
        __metadata("design:type", Geometry)
    ], TextDetection.prototype, "geometry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", Number)
    ], TextDetection.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentId" }),
        __metadata("design:type", Number)
    ], TextDetection.prototype, "parentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], TextDetection.prototype, "type", void 0);
    return TextDetection;
}(SpeakeasyBase));
export { TextDetection };
