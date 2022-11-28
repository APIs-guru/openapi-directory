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
import { ClassificationSummary } from "./classificationsummary";
import { Watched } from "./watched";
var ProfileDetail = /** @class */ (function (_super) {
    __extends(ProfileDetail, _super);
    function ProfileDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookmarked" }),
        __metadata("design:type", Map)
    ], ProfileDetail.prototype, "bookmarked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], ProfileDetail.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=heroAutoplay" }),
        __metadata("design:type", Boolean)
    ], ProfileDetail.prototype, "heroAutoplay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=heroWithAudio" }),
        __metadata("design:type", Boolean)
    ], ProfileDetail.prototype, "heroWithAudio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ProfileDetail.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isActive" }),
        __metadata("design:type", Boolean)
    ], ProfileDetail.prototype, "isActive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], ProfileDetail.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marketingEnabled" }),
        __metadata("design:type", Boolean)
    ], ProfileDetail.prototype, "marketingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxRatingContentFilter" }),
        __metadata("design:type", ClassificationSummary)
    ], ProfileDetail.prototype, "maxRatingContentFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minRatingPlaybackGuard" }),
        __metadata("design:type", ClassificationSummary)
    ], ProfileDetail.prototype, "minRatingPlaybackGuard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProfileDetail.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pinEnabled" }),
        __metadata("design:type", Boolean)
    ], ProfileDetail.prototype, "pinEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purchaseEnabled" }),
        __metadata("design:type", Boolean)
    ], ProfileDetail.prototype, "purchaseEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rated" }),
        __metadata("design:type", Map)
    ], ProfileDetail.prototype, "rated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=segments" }),
        __metadata("design:type", Array)
    ], ProfileDetail.prototype, "segments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watched", elemType: Watched }),
        __metadata("design:type", Map)
    ], ProfileDetail.prototype, "watched", void 0);
    return ProfileDetail;
}(SpeakeasyBase));
export { ProfileDetail };
