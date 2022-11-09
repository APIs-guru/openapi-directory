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
var PostV3AssetLicensingAssetIdPathParams = /** @class */ (function (_super) {
    __extends(PostV3AssetLicensingAssetIdPathParams, _super);
    function PostV3AssetLicensingAssetIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=assetId" }),
        __metadata("design:type", String)
    ], PostV3AssetLicensingAssetIdPathParams.prototype, "assetId", void 0);
    return PostV3AssetLicensingAssetIdPathParams;
}(SpeakeasyBase));
export { PostV3AssetLicensingAssetIdPathParams };
var PostV3AssetLicensingAssetIdHeaders = /** @class */ (function (_super) {
    __extends(PostV3AssetLicensingAssetIdHeaders, _super);
    function PostV3AssetLicensingAssetIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], PostV3AssetLicensingAssetIdHeaders.prototype, "acceptLanguage", void 0);
    return PostV3AssetLicensingAssetIdHeaders;
}(SpeakeasyBase));
export { PostV3AssetLicensingAssetIdHeaders };
var PostV3AssetLicensingAssetIdRequests = /** @class */ (function (_super) {
    __extends(PostV3AssetLicensingAssetIdRequests, _super);
    function PostV3AssetLicensingAssetIdRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.AcquireAssetLicensesRequest)
    ], PostV3AssetLicensingAssetIdRequests.prototype, "acquireAssetLicensesRequest", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AcquireAssetLicensesRequest)
    ], PostV3AssetLicensingAssetIdRequests.prototype, "acquireAssetLicensesRequest1", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.AcquireAssetLicensesRequest)
    ], PostV3AssetLicensingAssetIdRequests.prototype, "acquireAssetLicensesRequest2", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.AcquireAssetLicensesRequest)
    ], PostV3AssetLicensingAssetIdRequests.prototype, "acquireAssetLicensesRequest3", void 0);
    return PostV3AssetLicensingAssetIdRequests;
}(SpeakeasyBase));
export { PostV3AssetLicensingAssetIdRequests };
var PostV3AssetLicensingAssetIdRequest = /** @class */ (function (_super) {
    __extends(PostV3AssetLicensingAssetIdRequest, _super);
    function PostV3AssetLicensingAssetIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostV3AssetLicensingAssetIdPathParams)
    ], PostV3AssetLicensingAssetIdRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostV3AssetLicensingAssetIdHeaders)
    ], PostV3AssetLicensingAssetIdRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostV3AssetLicensingAssetIdRequests)
    ], PostV3AssetLicensingAssetIdRequest.prototype, "request", void 0);
    return PostV3AssetLicensingAssetIdRequest;
}(SpeakeasyBase));
export { PostV3AssetLicensingAssetIdRequest };
var PostV3AssetLicensingAssetIdResponse = /** @class */ (function (_super) {
    __extends(PostV3AssetLicensingAssetIdResponse, _super);
    function PostV3AssetLicensingAssetIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AssetLicensingResponse)
    ], PostV3AssetLicensingAssetIdResponse.prototype, "assetLicensingResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostV3AssetLicensingAssetIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostV3AssetLicensingAssetIdResponse.prototype, "statusCode", void 0);
    return PostV3AssetLicensingAssetIdResponse;
}(SpeakeasyBase));
export { PostV3AssetLicensingAssetIdResponse };
