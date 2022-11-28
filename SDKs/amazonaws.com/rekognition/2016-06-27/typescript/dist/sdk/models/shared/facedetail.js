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
import { AgeRange } from "./agerange";
import { Beard } from "./beard";
import { BoundingBox } from "./boundingbox";
import { Emotion } from "./emotion";
import { Eyeglasses } from "./eyeglasses";
import { EyeOpen } from "./eyeopen";
import { Gender } from "./gender";
import { Landmark } from "./landmark";
import { MouthOpen } from "./mouthopen";
import { Mustache } from "./mustache";
import { Pose } from "./pose";
import { ImageQuality } from "./imagequality";
import { Smile } from "./smile";
import { Sunglasses } from "./sunglasses";
// FaceDetail
/**
 * <p>Structure containing attributes of the face that the algorithm detected.</p> <p>A <code>FaceDetail</code> object contains either the default facial attributes or all facial attributes. The default attributes are <code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>.</p> <p> <a>GetFaceDetection</a> is the only Amazon Rekognition Video stored video operation that can return a <code>FaceDetail</code> object with all attributes. To specify which attributes to return, use the <code>FaceAttributes</code> input parameter for <a>StartFaceDetection</a>. The following Amazon Rekognition Video operations return only the default attributes. The corresponding Start operations don't have a <code>FaceAttributes</code> input parameter.</p> <ul> <li> <p>GetCelebrityRecognition</p> </li> <li> <p>GetPersonTracking</p> </li> <li> <p>GetFaceSearch</p> </li> </ul> <p>The Amazon Rekognition Image <a>DetectFaces</a> and <a>IndexFaces</a> operations can return all facial attributes. To specify which attributes to return, use the <code>Attributes</code> input parameter for <code>DetectFaces</code>. For <code>IndexFaces</code>, use the <code>DetectAttributes</code> input parameter.</p>
**/
var FaceDetail = /** @class */ (function (_super) {
    __extends(FaceDetail, _super);
    function FaceDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AgeRange" }),
        __metadata("design:type", AgeRange)
    ], FaceDetail.prototype, "ageRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Beard" }),
        __metadata("design:type", Beard)
    ], FaceDetail.prototype, "beard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BoundingBox" }),
        __metadata("design:type", BoundingBox)
    ], FaceDetail.prototype, "boundingBox", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Confidence" }),
        __metadata("design:type", Number)
    ], FaceDetail.prototype, "confidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Emotions", elemType: Emotion }),
        __metadata("design:type", Array)
    ], FaceDetail.prototype, "emotions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Eyeglasses" }),
        __metadata("design:type", Eyeglasses)
    ], FaceDetail.prototype, "eyeglasses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EyesOpen" }),
        __metadata("design:type", EyeOpen)
    ], FaceDetail.prototype, "eyesOpen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Gender" }),
        __metadata("design:type", Gender)
    ], FaceDetail.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Landmarks", elemType: Landmark }),
        __metadata("design:type", Array)
    ], FaceDetail.prototype, "landmarks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MouthOpen" }),
        __metadata("design:type", MouthOpen)
    ], FaceDetail.prototype, "mouthOpen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Mustache" }),
        __metadata("design:type", Mustache)
    ], FaceDetail.prototype, "mustache", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Pose" }),
        __metadata("design:type", Pose)
    ], FaceDetail.prototype, "pose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Quality" }),
        __metadata("design:type", ImageQuality)
    ], FaceDetail.prototype, "quality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Smile" }),
        __metadata("design:type", Smile)
    ], FaceDetail.prototype, "smile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Sunglasses" }),
        __metadata("design:type", Sunglasses)
    ], FaceDetail.prototype, "sunglasses", void 0);
    return FaceDetail;
}(SpeakeasyBase));
export { FaceDetail };
