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
var GetSearchQueryParams = /** @class */ (function (_super) {
    __extends(GetSearchQueryParams, _super);
    function GetSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetSearchQueryParams.prototype, "q", void 0);
    return GetSearchQueryParams;
}(SpeakeasyBase));
export { GetSearchQueryParams };
var GetSearchSecurity = /** @class */ (function (_super) {
    __extends(GetSearchSecurity, _super);
    function GetSearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetSearchSecurity.prototype, "apiKey", void 0);
    return GetSearchSecurity;
}(SpeakeasyBase));
export { GetSearchSecurity };
var GetSearchRequest = /** @class */ (function (_super) {
    __extends(GetSearchRequest, _super);
    function GetSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSearchQueryParams)
    ], GetSearchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSearchSecurity)
    ], GetSearchRequest.prototype, "security", void 0);
    return GetSearchRequest;
}(SpeakeasyBase));
export { GetSearchRequest };
var GetSearchResponse = /** @class */ (function (_super) {
    __extends(GetSearchResponse, _super);
    function GetSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetSearchResponse.prototype, "getSearch200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetSearchResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSearchResponse.prototype, "statusCode", void 0);
    return GetSearchResponse;
}(SpeakeasyBase));
export { GetSearchResponse };
