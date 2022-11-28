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
var GetV3ImagesIdDownloadhistoryPathParams = /** @class */ (function (_super) {
    __extends(GetV3ImagesIdDownloadhistoryPathParams, _super);
    function GetV3ImagesIdDownloadhistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetV3ImagesIdDownloadhistoryPathParams.prototype, "id", void 0);
    return GetV3ImagesIdDownloadhistoryPathParams;
}(SpeakeasyBase));
export { GetV3ImagesIdDownloadhistoryPathParams };
var GetV3ImagesIdDownloadhistoryQueryParams = /** @class */ (function (_super) {
    __extends(GetV3ImagesIdDownloadhistoryQueryParams, _super);
    function GetV3ImagesIdDownloadhistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=company_downloads" }),
        __metadata("design:type", Boolean)
    ], GetV3ImagesIdDownloadhistoryQueryParams.prototype, "companyDownloads", void 0);
    return GetV3ImagesIdDownloadhistoryQueryParams;
}(SpeakeasyBase));
export { GetV3ImagesIdDownloadhistoryQueryParams };
var GetV3ImagesIdDownloadhistoryHeaders = /** @class */ (function (_super) {
    __extends(GetV3ImagesIdDownloadhistoryHeaders, _super);
    function GetV3ImagesIdDownloadhistoryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], GetV3ImagesIdDownloadhistoryHeaders.prototype, "acceptLanguage", void 0);
    return GetV3ImagesIdDownloadhistoryHeaders;
}(SpeakeasyBase));
export { GetV3ImagesIdDownloadhistoryHeaders };
var GetV3ImagesIdDownloadhistoryRequest = /** @class */ (function (_super) {
    __extends(GetV3ImagesIdDownloadhistoryRequest, _super);
    function GetV3ImagesIdDownloadhistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3ImagesIdDownloadhistoryPathParams)
    ], GetV3ImagesIdDownloadhistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3ImagesIdDownloadhistoryQueryParams)
    ], GetV3ImagesIdDownloadhistoryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV3ImagesIdDownloadhistoryHeaders)
    ], GetV3ImagesIdDownloadhistoryRequest.prototype, "headers", void 0);
    return GetV3ImagesIdDownloadhistoryRequest;
}(SpeakeasyBase));
export { GetV3ImagesIdDownloadhistoryRequest };
var GetV3ImagesIdDownloadhistoryResponse = /** @class */ (function (_super) {
    __extends(GetV3ImagesIdDownloadhistoryResponse, _super);
    function GetV3ImagesIdDownloadhistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AssetDownloadHistoryResults)
    ], GetV3ImagesIdDownloadhistoryResponse.prototype, "assetDownloadHistoryResults", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetV3ImagesIdDownloadhistoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetV3ImagesIdDownloadhistoryResponse.prototype, "statusCode", void 0);
    return GetV3ImagesIdDownloadhistoryResponse;
}(SpeakeasyBase));
export { GetV3ImagesIdDownloadhistoryResponse };
