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
var PostV3DownloadsImagesIdPathParams = /** @class */ (function (_super) {
    __extends(PostV3DownloadsImagesIdPathParams, _super);
    function PostV3DownloadsImagesIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PostV3DownloadsImagesIdPathParams.prototype, "id", void 0);
    return PostV3DownloadsImagesIdPathParams;
}(SpeakeasyBase));
export { PostV3DownloadsImagesIdPathParams };
var PostV3DownloadsImagesIdQueryParams = /** @class */ (function (_super) {
    __extends(PostV3DownloadsImagesIdQueryParams, _super);
    function PostV3DownloadsImagesIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=auto_download" }),
        __metadata("design:type", Boolean)
    ], PostV3DownloadsImagesIdQueryParams.prototype, "autoDownload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=file_type" }),
        __metadata("design:type", String)
    ], PostV3DownloadsImagesIdQueryParams.prototype, "fileType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" }),
        __metadata("design:type", String)
    ], PostV3DownloadsImagesIdQueryParams.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=product_id" }),
        __metadata("design:type", Number)
    ], PostV3DownloadsImagesIdQueryParams.prototype, "productId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=product_type" }),
        __metadata("design:type", String)
    ], PostV3DownloadsImagesIdQueryParams.prototype, "productType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=use_team_credits" }),
        __metadata("design:type", Boolean)
    ], PostV3DownloadsImagesIdQueryParams.prototype, "useTeamCredits", void 0);
    return PostV3DownloadsImagesIdQueryParams;
}(SpeakeasyBase));
export { PostV3DownloadsImagesIdQueryParams };
var PostV3DownloadsImagesIdHeaders = /** @class */ (function (_super) {
    __extends(PostV3DownloadsImagesIdHeaders, _super);
    function PostV3DownloadsImagesIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], PostV3DownloadsImagesIdHeaders.prototype, "acceptLanguage", void 0);
    return PostV3DownloadsImagesIdHeaders;
}(SpeakeasyBase));
export { PostV3DownloadsImagesIdHeaders };
var PostV3DownloadsImagesIdRequests = /** @class */ (function (_super) {
    __extends(PostV3DownloadsImagesIdRequests, _super);
    function PostV3DownloadsImagesIdRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.PremiumAccessDownloadData)
    ], PostV3DownloadsImagesIdRequests.prototype, "premiumAccessDownloadData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PremiumAccessDownloadData)
    ], PostV3DownloadsImagesIdRequests.prototype, "premiumAccessDownloadData1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.PremiumAccessDownloadData)
    ], PostV3DownloadsImagesIdRequests.prototype, "premiumAccessDownloadData2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.PremiumAccessDownloadData)
    ], PostV3DownloadsImagesIdRequests.prototype, "premiumAccessDownloadData3", void 0);
    return PostV3DownloadsImagesIdRequests;
}(SpeakeasyBase));
export { PostV3DownloadsImagesIdRequests };
var PostV3DownloadsImagesIdRequest = /** @class */ (function (_super) {
    __extends(PostV3DownloadsImagesIdRequest, _super);
    function PostV3DownloadsImagesIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV3DownloadsImagesIdPathParams)
    ], PostV3DownloadsImagesIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV3DownloadsImagesIdQueryParams)
    ], PostV3DownloadsImagesIdRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV3DownloadsImagesIdHeaders)
    ], PostV3DownloadsImagesIdRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV3DownloadsImagesIdRequests)
    ], PostV3DownloadsImagesIdRequest.prototype, "request", void 0);
    return PostV3DownloadsImagesIdRequest;
}(SpeakeasyBase));
export { PostV3DownloadsImagesIdRequest };
var PostV3DownloadsImagesIdResponse = /** @class */ (function (_super) {
    __extends(PostV3DownloadsImagesIdResponse, _super);
    function PostV3DownloadsImagesIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV3DownloadsImagesIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostV3DownloadsImagesIdResponse.prototype, "statusCode", void 0);
    return PostV3DownloadsImagesIdResponse;
}(SpeakeasyBase));
export { PostV3DownloadsImagesIdResponse };
