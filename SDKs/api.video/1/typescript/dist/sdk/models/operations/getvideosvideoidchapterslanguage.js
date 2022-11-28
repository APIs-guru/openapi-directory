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
import * as shared from "../shared";
var GetVideosVideoIdChaptersLanguagePathParams = /** @class */ (function (_super) {
    __extends(GetVideosVideoIdChaptersLanguagePathParams, _super);
    function GetVideosVideoIdChaptersLanguagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=language" }),
        __metadata("design:type", String)
    ], GetVideosVideoIdChaptersLanguagePathParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=videoId" }),
        __metadata("design:type", String)
    ], GetVideosVideoIdChaptersLanguagePathParams.prototype, "videoId", void 0);
    return GetVideosVideoIdChaptersLanguagePathParams;
}(SpeakeasyBase));
export { GetVideosVideoIdChaptersLanguagePathParams };
var GetVideosVideoIdChaptersLanguageSecurity = /** @class */ (function (_super) {
    __extends(GetVideosVideoIdChaptersLanguageSecurity, _super);
    function GetVideosVideoIdChaptersLanguageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetVideosVideoIdChaptersLanguageSecurity.prototype, "bearerAuth", void 0);
    return GetVideosVideoIdChaptersLanguageSecurity;
}(SpeakeasyBase));
export { GetVideosVideoIdChaptersLanguageSecurity };
var GetVideosVideoIdChaptersLanguageRequest = /** @class */ (function (_super) {
    __extends(GetVideosVideoIdChaptersLanguageRequest, _super);
    function GetVideosVideoIdChaptersLanguageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVideosVideoIdChaptersLanguagePathParams)
    ], GetVideosVideoIdChaptersLanguageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVideosVideoIdChaptersLanguageSecurity)
    ], GetVideosVideoIdChaptersLanguageRequest.prototype, "security", void 0);
    return GetVideosVideoIdChaptersLanguageRequest;
}(SpeakeasyBase));
export { GetVideosVideoIdChaptersLanguageRequest };
var GetVideosVideoIdChaptersLanguageResponse = /** @class */ (function (_super) {
    __extends(GetVideosVideoIdChaptersLanguageResponse, _super);
    function GetVideosVideoIdChaptersLanguageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVideosVideoIdChaptersLanguageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVideosVideoIdChaptersLanguageResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Chapter)
    ], GetVideosVideoIdChaptersLanguageResponse.prototype, "chapter", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFound)
    ], GetVideosVideoIdChaptersLanguageResponse.prototype, "notFound", void 0);
    return GetVideosVideoIdChaptersLanguageResponse;
}(SpeakeasyBase));
export { GetVideosVideoIdChaptersLanguageResponse };
