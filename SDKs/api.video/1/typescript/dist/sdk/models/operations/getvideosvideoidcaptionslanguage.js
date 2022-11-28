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
var GetVideosVideoIdCaptionsLanguagePathParams = /** @class */ (function (_super) {
    __extends(GetVideosVideoIdCaptionsLanguagePathParams, _super);
    function GetVideosVideoIdCaptionsLanguagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=language" }),
        __metadata("design:type", String)
    ], GetVideosVideoIdCaptionsLanguagePathParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=videoId" }),
        __metadata("design:type", String)
    ], GetVideosVideoIdCaptionsLanguagePathParams.prototype, "videoId", void 0);
    return GetVideosVideoIdCaptionsLanguagePathParams;
}(SpeakeasyBase));
export { GetVideosVideoIdCaptionsLanguagePathParams };
var GetVideosVideoIdCaptionsLanguageSecurity = /** @class */ (function (_super) {
    __extends(GetVideosVideoIdCaptionsLanguageSecurity, _super);
    function GetVideosVideoIdCaptionsLanguageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetVideosVideoIdCaptionsLanguageSecurity.prototype, "bearerAuth", void 0);
    return GetVideosVideoIdCaptionsLanguageSecurity;
}(SpeakeasyBase));
export { GetVideosVideoIdCaptionsLanguageSecurity };
var GetVideosVideoIdCaptionsLanguageRequest = /** @class */ (function (_super) {
    __extends(GetVideosVideoIdCaptionsLanguageRequest, _super);
    function GetVideosVideoIdCaptionsLanguageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVideosVideoIdCaptionsLanguagePathParams)
    ], GetVideosVideoIdCaptionsLanguageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVideosVideoIdCaptionsLanguageSecurity)
    ], GetVideosVideoIdCaptionsLanguageRequest.prototype, "security", void 0);
    return GetVideosVideoIdCaptionsLanguageRequest;
}(SpeakeasyBase));
export { GetVideosVideoIdCaptionsLanguageRequest };
var GetVideosVideoIdCaptionsLanguageResponse = /** @class */ (function (_super) {
    __extends(GetVideosVideoIdCaptionsLanguageResponse, _super);
    function GetVideosVideoIdCaptionsLanguageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVideosVideoIdCaptionsLanguageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVideosVideoIdCaptionsLanguageResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFound)
    ], GetVideosVideoIdCaptionsLanguageResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Subtitle)
    ], GetVideosVideoIdCaptionsLanguageResponse.prototype, "subtitle", void 0);
    return GetVideosVideoIdCaptionsLanguageResponse;
}(SpeakeasyBase));
export { GetVideosVideoIdCaptionsLanguageResponse };
