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
var GetV4LayersAsAppliedQueryParams = /** @class */ (function (_super) {
    __extends(GetV4LayersAsAppliedQueryParams, _super);
    function GetV4LayersAsAppliedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=occurredAfter" }),
        __metadata("design:type", Date)
    ], GetV4LayersAsAppliedQueryParams.prototype, "occurredAfter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=occurredBefore" }),
        __metadata("design:type", Date)
    ], GetV4LayersAsAppliedQueryParams.prototype, "occurredBefore", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=resourceOwnerId" }),
        __metadata("design:type", String)
    ], GetV4LayersAsAppliedQueryParams.prototype, "resourceOwnerId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=updatedAfter" }),
        __metadata("design:type", Date)
    ], GetV4LayersAsAppliedQueryParams.prototype, "updatedAfter", void 0);
    return GetV4LayersAsAppliedQueryParams;
}(SpeakeasyBase));
export { GetV4LayersAsAppliedQueryParams };
var GetV4LayersAsAppliedHeaders = /** @class */ (function (_super) {
    __extends(GetV4LayersAsAppliedHeaders, _super);
    function GetV4LayersAsAppliedHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], GetV4LayersAsAppliedHeaders.prototype, "accept", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Limit" }),
        __metadata("design:type", Number)
    ], GetV4LayersAsAppliedHeaders.prototype, "xLimit", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Next-Token" }),
        __metadata("design:type", String)
    ], GetV4LayersAsAppliedHeaders.prototype, "xNextToken", void 0);
    return GetV4LayersAsAppliedHeaders;
}(SpeakeasyBase));
export { GetV4LayersAsAppliedHeaders };
var GetV4LayersAsAppliedSecurityOption1 = /** @class */ (function (_super) {
    __extends(GetV4LayersAsAppliedSecurityOption1, _super);
    function GetV4LayersAsAppliedSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetV4LayersAsAppliedSecurityOption1.prototype, "apiKey", void 0);
    return GetV4LayersAsAppliedSecurityOption1;
}(SpeakeasyBase));
export { GetV4LayersAsAppliedSecurityOption1 };
var GetV4LayersAsAppliedSecurityOption2 = /** @class */ (function (_super) {
    __extends(GetV4LayersAsAppliedSecurityOption2, _super);
    function GetV4LayersAsAppliedSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2AuthorizationCode)
    ], GetV4LayersAsAppliedSecurityOption2.prototype, "oauth2AuthorizationCode", void 0);
    return GetV4LayersAsAppliedSecurityOption2;
}(SpeakeasyBase));
export { GetV4LayersAsAppliedSecurityOption2 };
var GetV4LayersAsAppliedSecurity = /** @class */ (function (_super) {
    __extends(GetV4LayersAsAppliedSecurity, _super);
    function GetV4LayersAsAppliedSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", GetV4LayersAsAppliedSecurityOption1)
    ], GetV4LayersAsAppliedSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", GetV4LayersAsAppliedSecurityOption2)
    ], GetV4LayersAsAppliedSecurity.prototype, "option2", void 0);
    return GetV4LayersAsAppliedSecurity;
}(SpeakeasyBase));
export { GetV4LayersAsAppliedSecurity };
var GetV4LayersAsAppliedRequest = /** @class */ (function (_super) {
    __extends(GetV4LayersAsAppliedRequest, _super);
    function GetV4LayersAsAppliedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetV4LayersAsAppliedQueryParams)
    ], GetV4LayersAsAppliedRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetV4LayersAsAppliedHeaders)
    ], GetV4LayersAsAppliedRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetV4LayersAsAppliedSecurity)
    ], GetV4LayersAsAppliedRequest.prototype, "security", void 0);
    return GetV4LayersAsAppliedRequest;
}(SpeakeasyBase));
export { GetV4LayersAsAppliedRequest };
var GetV4LayersAsAppliedResponse = /** @class */ (function (_super) {
    __extends(GetV4LayersAsAppliedResponse, _super);
    function GetV4LayersAsAppliedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetV4LayersAsAppliedResponse.prototype, "applicationActivities", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetV4LayersAsAppliedResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], GetV4LayersAsAppliedResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Error)
    ], GetV4LayersAsAppliedResponse.prototype, "error", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], GetV4LayersAsAppliedResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetV4LayersAsAppliedResponse.prototype, "statusCode", void 0);
    return GetV4LayersAsAppliedResponse;
}(SpeakeasyBase));
export { GetV4LayersAsAppliedResponse };
