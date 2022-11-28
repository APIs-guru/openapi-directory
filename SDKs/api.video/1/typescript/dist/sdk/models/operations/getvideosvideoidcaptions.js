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
var GetVideosVideoIdCaptionsPathParams = /** @class */ (function (_super) {
    __extends(GetVideosVideoIdCaptionsPathParams, _super);
    function GetVideosVideoIdCaptionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=videoId" }),
        __metadata("design:type", String)
    ], GetVideosVideoIdCaptionsPathParams.prototype, "videoId", void 0);
    return GetVideosVideoIdCaptionsPathParams;
}(SpeakeasyBase));
export { GetVideosVideoIdCaptionsPathParams };
var GetVideosVideoIdCaptionsQueryParams = /** @class */ (function (_super) {
    __extends(GetVideosVideoIdCaptionsQueryParams, _super);
    function GetVideosVideoIdCaptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentPage" }),
        __metadata("design:type", Number)
    ], GetVideosVideoIdCaptionsQueryParams.prototype, "currentPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetVideosVideoIdCaptionsQueryParams.prototype, "pageSize", void 0);
    return GetVideosVideoIdCaptionsQueryParams;
}(SpeakeasyBase));
export { GetVideosVideoIdCaptionsQueryParams };
var GetVideosVideoIdCaptionsSecurity = /** @class */ (function (_super) {
    __extends(GetVideosVideoIdCaptionsSecurity, _super);
    function GetVideosVideoIdCaptionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetVideosVideoIdCaptionsSecurity.prototype, "bearerAuth", void 0);
    return GetVideosVideoIdCaptionsSecurity;
}(SpeakeasyBase));
export { GetVideosVideoIdCaptionsSecurity };
var GetVideosVideoIdCaptionsRequest = /** @class */ (function (_super) {
    __extends(GetVideosVideoIdCaptionsRequest, _super);
    function GetVideosVideoIdCaptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVideosVideoIdCaptionsPathParams)
    ], GetVideosVideoIdCaptionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVideosVideoIdCaptionsQueryParams)
    ], GetVideosVideoIdCaptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVideosVideoIdCaptionsSecurity)
    ], GetVideosVideoIdCaptionsRequest.prototype, "security", void 0);
    return GetVideosVideoIdCaptionsRequest;
}(SpeakeasyBase));
export { GetVideosVideoIdCaptionsRequest };
var GetVideosVideoIdCaptionsResponse = /** @class */ (function (_super) {
    __extends(GetVideosVideoIdCaptionsResponse, _super);
    function GetVideosVideoIdCaptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVideosVideoIdCaptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVideosVideoIdCaptionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CaptionsListResponse)
    ], GetVideosVideoIdCaptionsResponse.prototype, "captionsListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFound)
    ], GetVideosVideoIdCaptionsResponse.prototype, "notFound", void 0);
    return GetVideosVideoIdCaptionsResponse;
}(SpeakeasyBase));
export { GetVideosVideoIdCaptionsResponse };
