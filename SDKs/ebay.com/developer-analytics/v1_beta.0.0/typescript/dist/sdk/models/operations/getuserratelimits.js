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
var GetUserRateLimitsQueryParams = /** @class */ (function (_super) {
    __extends(GetUserRateLimitsQueryParams, _super);
    function GetUserRateLimitsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_context" }),
        __metadata("design:type", String)
    ], GetUserRateLimitsQueryParams.prototype, "apiContext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_name" }),
        __metadata("design:type", String)
    ], GetUserRateLimitsQueryParams.prototype, "apiName", void 0);
    return GetUserRateLimitsQueryParams;
}(SpeakeasyBase));
export { GetUserRateLimitsQueryParams };
var GetUserRateLimitsSecurity = /** @class */ (function (_super) {
    __extends(GetUserRateLimitsSecurity, _super);
    function GetUserRateLimitsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], GetUserRateLimitsSecurity.prototype, "apiAuth", void 0);
    return GetUserRateLimitsSecurity;
}(SpeakeasyBase));
export { GetUserRateLimitsSecurity };
var GetUserRateLimits500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetUserRateLimits500ApplicationJson, _super);
    function GetUserRateLimits500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.Error }),
        __metadata("design:type", Array)
    ], GetUserRateLimits500ApplicationJson.prototype, "errors", void 0);
    return GetUserRateLimits500ApplicationJson;
}(SpeakeasyBase));
export { GetUserRateLimits500ApplicationJson };
var GetUserRateLimitsRequest = /** @class */ (function (_super) {
    __extends(GetUserRateLimitsRequest, _super);
    function GetUserRateLimitsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserRateLimitsQueryParams)
    ], GetUserRateLimitsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserRateLimitsSecurity)
    ], GetUserRateLimitsRequest.prototype, "security", void 0);
    return GetUserRateLimitsRequest;
}(SpeakeasyBase));
export { GetUserRateLimitsRequest };
var GetUserRateLimitsResponse = /** @class */ (function (_super) {
    __extends(GetUserRateLimitsResponse, _super);
    function GetUserRateLimitsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUserRateLimitsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RateLimitsResponse)
    ], GetUserRateLimitsResponse.prototype, "rateLimitsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUserRateLimitsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserRateLimits500ApplicationJson)
    ], GetUserRateLimitsResponse.prototype, "getUserRateLimits500ApplicationJsonObject", void 0);
    return GetUserRateLimitsResponse;
}(SpeakeasyBase));
export { GetUserRateLimitsResponse };
