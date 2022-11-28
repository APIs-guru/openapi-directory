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
export var GetUploadTokensSortByEnum;
(function (GetUploadTokensSortByEnum) {
    GetUploadTokensSortByEnum["CreatedAt"] = "createdAt";
    GetUploadTokensSortByEnum["Ttl"] = "ttl";
})(GetUploadTokensSortByEnum || (GetUploadTokensSortByEnum = {}));
export var GetUploadTokensSortOrderEnum;
(function (GetUploadTokensSortOrderEnum) {
    GetUploadTokensSortOrderEnum["Asc"] = "asc";
    GetUploadTokensSortOrderEnum["Desc"] = "desc";
})(GetUploadTokensSortOrderEnum || (GetUploadTokensSortOrderEnum = {}));
var GetUploadTokensQueryParams = /** @class */ (function (_super) {
    __extends(GetUploadTokensQueryParams, _super);
    function GetUploadTokensQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentPage" }),
        __metadata("design:type", Number)
    ], GetUploadTokensQueryParams.prototype, "currentPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetUploadTokensQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" }),
        __metadata("design:type", String)
    ], GetUploadTokensQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], GetUploadTokensQueryParams.prototype, "sortOrder", void 0);
    return GetUploadTokensQueryParams;
}(SpeakeasyBase));
export { GetUploadTokensQueryParams };
var GetUploadTokensSecurity = /** @class */ (function (_super) {
    __extends(GetUploadTokensSecurity, _super);
    function GetUploadTokensSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetUploadTokensSecurity.prototype, "bearerAuth", void 0);
    return GetUploadTokensSecurity;
}(SpeakeasyBase));
export { GetUploadTokensSecurity };
var GetUploadTokensRequest = /** @class */ (function (_super) {
    __extends(GetUploadTokensRequest, _super);
    function GetUploadTokensRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUploadTokensQueryParams)
    ], GetUploadTokensRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUploadTokensSecurity)
    ], GetUploadTokensRequest.prototype, "security", void 0);
    return GetUploadTokensRequest;
}(SpeakeasyBase));
export { GetUploadTokensRequest };
var GetUploadTokensResponse = /** @class */ (function (_super) {
    __extends(GetUploadTokensResponse, _super);
    function GetUploadTokensResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUploadTokensResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUploadTokensResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TokenListResponse)
    ], GetUploadTokensResponse.prototype, "tokenListResponse", void 0);
    return GetUploadTokensResponse;
}(SpeakeasyBase));
export { GetUploadTokensResponse };
