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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var GetV3VideosIdDownloadhistoryPathParams = /** @class */ (function (_super) {
    __extends(GetV3VideosIdDownloadhistoryPathParams, _super);
    function GetV3VideosIdDownloadhistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetV3VideosIdDownloadhistoryPathParams.prototype, "id", void 0);
    return GetV3VideosIdDownloadhistoryPathParams;
}(SpeakeasyBase));
export { GetV3VideosIdDownloadhistoryPathParams };
var GetV3VideosIdDownloadhistoryQueryParams = /** @class */ (function (_super) {
    __extends(GetV3VideosIdDownloadhistoryQueryParams, _super);
    function GetV3VideosIdDownloadhistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=company_downloads" }),
        __metadata("design:type", Boolean)
    ], GetV3VideosIdDownloadhistoryQueryParams.prototype, "companyDownloads", void 0);
    return GetV3VideosIdDownloadhistoryQueryParams;
}(SpeakeasyBase));
export { GetV3VideosIdDownloadhistoryQueryParams };
var GetV3VideosIdDownloadhistoryHeaders = /** @class */ (function (_super) {
    __extends(GetV3VideosIdDownloadhistoryHeaders, _super);
    function GetV3VideosIdDownloadhistoryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], GetV3VideosIdDownloadhistoryHeaders.prototype, "acceptLanguage", void 0);
    return GetV3VideosIdDownloadhistoryHeaders;
}(SpeakeasyBase));
export { GetV3VideosIdDownloadhistoryHeaders };
var GetV3VideosIdDownloadhistoryRequest = /** @class */ (function (_super) {
    __extends(GetV3VideosIdDownloadhistoryRequest, _super);
    function GetV3VideosIdDownloadhistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetV3VideosIdDownloadhistoryPathParams)
    ], GetV3VideosIdDownloadhistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetV3VideosIdDownloadhistoryQueryParams)
    ], GetV3VideosIdDownloadhistoryRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetV3VideosIdDownloadhistoryHeaders)
    ], GetV3VideosIdDownloadhistoryRequest.prototype, "headers", void 0);
    return GetV3VideosIdDownloadhistoryRequest;
}(SpeakeasyBase));
export { GetV3VideosIdDownloadhistoryRequest };
var GetV3VideosIdDownloadhistoryResponse = /** @class */ (function (_super) {
    __extends(GetV3VideosIdDownloadhistoryResponse, _super);
    function GetV3VideosIdDownloadhistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AssetDownloadHistoryResults)
    ], GetV3VideosIdDownloadhistoryResponse.prototype, "assetDownloadHistoryResults", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetV3VideosIdDownloadhistoryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetV3VideosIdDownloadhistoryResponse.prototype, "statusCode", void 0);
    return GetV3VideosIdDownloadhistoryResponse;
}(SpeakeasyBase));
export { GetV3VideosIdDownloadhistoryResponse };
