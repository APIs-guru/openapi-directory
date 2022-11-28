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
import { DeviceMetadata } from "./devicemetadata";
import { Timestamp } from "./timestamp";
// UserComment
/**
 * User entry from conversation between user and developer.
**/
var UserComment = /** @class */ (function (_super) {
    __extends(UserComment, _super);
    function UserComment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=androidOsVersion" }),
        __metadata("design:type", Number)
    ], UserComment.prototype, "androidOsVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appVersionCode" }),
        __metadata("design:type", Number)
    ], UserComment.prototype, "appVersionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appVersionName" }),
        __metadata("design:type", String)
    ], UserComment.prototype, "appVersionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device" }),
        __metadata("design:type", String)
    ], UserComment.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceMetadata" }),
        __metadata("design:type", DeviceMetadata)
    ], UserComment.prototype, "deviceMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModified" }),
        __metadata("design:type", Timestamp)
    ], UserComment.prototype, "lastModified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originalText" }),
        __metadata("design:type", String)
    ], UserComment.prototype, "originalText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewerLanguage" }),
        __metadata("design:type", String)
    ], UserComment.prototype, "reviewerLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starRating" }),
        __metadata("design:type", Number)
    ], UserComment.prototype, "starRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], UserComment.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbsDownCount" }),
        __metadata("design:type", Number)
    ], UserComment.prototype, "thumbsDownCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbsUpCount" }),
        __metadata("design:type", Number)
    ], UserComment.prototype, "thumbsUpCount", void 0);
    return UserComment;
}(SpeakeasyBase));
export { UserComment };
