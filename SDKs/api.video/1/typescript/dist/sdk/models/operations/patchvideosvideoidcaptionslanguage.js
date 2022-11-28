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
var PatchVideosVideoIdCaptionsLanguagePathParams = /** @class */ (function (_super) {
    __extends(PatchVideosVideoIdCaptionsLanguagePathParams, _super);
    function PatchVideosVideoIdCaptionsLanguagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=language" }),
        __metadata("design:type", String)
    ], PatchVideosVideoIdCaptionsLanguagePathParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=videoId" }),
        __metadata("design:type", String)
    ], PatchVideosVideoIdCaptionsLanguagePathParams.prototype, "videoId", void 0);
    return PatchVideosVideoIdCaptionsLanguagePathParams;
}(SpeakeasyBase));
export { PatchVideosVideoIdCaptionsLanguagePathParams };
var PatchVideosVideoIdCaptionsLanguageSecurity = /** @class */ (function (_super) {
    __extends(PatchVideosVideoIdCaptionsLanguageSecurity, _super);
    function PatchVideosVideoIdCaptionsLanguageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], PatchVideosVideoIdCaptionsLanguageSecurity.prototype, "bearerAuth", void 0);
    return PatchVideosVideoIdCaptionsLanguageSecurity;
}(SpeakeasyBase));
export { PatchVideosVideoIdCaptionsLanguageSecurity };
var PatchVideosVideoIdCaptionsLanguageRequest = /** @class */ (function (_super) {
    __extends(PatchVideosVideoIdCaptionsLanguageRequest, _super);
    function PatchVideosVideoIdCaptionsLanguageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchVideosVideoIdCaptionsLanguagePathParams)
    ], PatchVideosVideoIdCaptionsLanguageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CaptionsUpdatePayload)
    ], PatchVideosVideoIdCaptionsLanguageRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchVideosVideoIdCaptionsLanguageSecurity)
    ], PatchVideosVideoIdCaptionsLanguageRequest.prototype, "security", void 0);
    return PatchVideosVideoIdCaptionsLanguageRequest;
}(SpeakeasyBase));
export { PatchVideosVideoIdCaptionsLanguageRequest };
var PatchVideosVideoIdCaptionsLanguageResponse = /** @class */ (function (_super) {
    __extends(PatchVideosVideoIdCaptionsLanguageResponse, _super);
    function PatchVideosVideoIdCaptionsLanguageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchVideosVideoIdCaptionsLanguageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchVideosVideoIdCaptionsLanguageResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequest)
    ], PatchVideosVideoIdCaptionsLanguageResponse.prototype, "badRequest", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFound)
    ], PatchVideosVideoIdCaptionsLanguageResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Subtitle)
    ], PatchVideosVideoIdCaptionsLanguageResponse.prototype, "subtitle", void 0);
    return PatchVideosVideoIdCaptionsLanguageResponse;
}(SpeakeasyBase));
export { PatchVideosVideoIdCaptionsLanguageResponse };
