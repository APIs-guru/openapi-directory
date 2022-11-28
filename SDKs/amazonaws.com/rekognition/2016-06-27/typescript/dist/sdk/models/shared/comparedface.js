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
import { BoundingBox } from "./boundingbox";
import { Emotion } from "./emotion";
import { Landmark } from "./landmark";
import { Pose } from "./pose";
import { ImageQuality } from "./imagequality";
import { Smile } from "./smile";
// ComparedFace
/**
 * Provides face metadata for target image faces that are analyzed by <code>CompareFaces</code> and <code>RecognizeCelebrities</code>.
**/
var ComparedFace = /** @class */ (function (_super) {
    __extends(ComparedFace, _super);
    function ComparedFace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BoundingBox" }),
        __metadata("design:type", BoundingBox)
    ], ComparedFace.prototype, "boundingBox", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Confidence" }),
        __metadata("design:type", Number)
    ], ComparedFace.prototype, "confidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Emotions", elemType: Emotion }),
        __metadata("design:type", Array)
    ], ComparedFace.prototype, "emotions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Landmarks", elemType: Landmark }),
        __metadata("design:type", Array)
    ], ComparedFace.prototype, "landmarks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Pose" }),
        __metadata("design:type", Pose)
    ], ComparedFace.prototype, "pose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Quality" }),
        __metadata("design:type", ImageQuality)
    ], ComparedFace.prototype, "quality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Smile" }),
        __metadata("design:type", Smile)
    ], ComparedFace.prototype, "smile", void 0);
    return ComparedFace;
}(SpeakeasyBase));
export { ComparedFace };
