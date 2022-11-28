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
var GetVideosVideoIdChaptersPathParams = /** @class */ (function (_super) {
    __extends(GetVideosVideoIdChaptersPathParams, _super);
    function GetVideosVideoIdChaptersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=videoId" }),
        __metadata("design:type", String)
    ], GetVideosVideoIdChaptersPathParams.prototype, "videoId", void 0);
    return GetVideosVideoIdChaptersPathParams;
}(SpeakeasyBase));
export { GetVideosVideoIdChaptersPathParams };
var GetVideosVideoIdChaptersQueryParams = /** @class */ (function (_super) {
    __extends(GetVideosVideoIdChaptersQueryParams, _super);
    function GetVideosVideoIdChaptersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentPage" }),
        __metadata("design:type", Number)
    ], GetVideosVideoIdChaptersQueryParams.prototype, "currentPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetVideosVideoIdChaptersQueryParams.prototype, "pageSize", void 0);
    return GetVideosVideoIdChaptersQueryParams;
}(SpeakeasyBase));
export { GetVideosVideoIdChaptersQueryParams };
var GetVideosVideoIdChaptersSecurity = /** @class */ (function (_super) {
    __extends(GetVideosVideoIdChaptersSecurity, _super);
    function GetVideosVideoIdChaptersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetVideosVideoIdChaptersSecurity.prototype, "bearerAuth", void 0);
    return GetVideosVideoIdChaptersSecurity;
}(SpeakeasyBase));
export { GetVideosVideoIdChaptersSecurity };
var GetVideosVideoIdChaptersRequest = /** @class */ (function (_super) {
    __extends(GetVideosVideoIdChaptersRequest, _super);
    function GetVideosVideoIdChaptersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVideosVideoIdChaptersPathParams)
    ], GetVideosVideoIdChaptersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVideosVideoIdChaptersQueryParams)
    ], GetVideosVideoIdChaptersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVideosVideoIdChaptersSecurity)
    ], GetVideosVideoIdChaptersRequest.prototype, "security", void 0);
    return GetVideosVideoIdChaptersRequest;
}(SpeakeasyBase));
export { GetVideosVideoIdChaptersRequest };
var GetVideosVideoIdChaptersResponse = /** @class */ (function (_super) {
    __extends(GetVideosVideoIdChaptersResponse, _super);
    function GetVideosVideoIdChaptersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVideosVideoIdChaptersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVideosVideoIdChaptersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ChaptersListResponse)
    ], GetVideosVideoIdChaptersResponse.prototype, "chaptersListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFound)
    ], GetVideosVideoIdChaptersResponse.prototype, "notFound", void 0);
    return GetVideosVideoIdChaptersResponse;
}(SpeakeasyBase));
export { GetVideosVideoIdChaptersResponse };
