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
var GetResourceOwnerPathParams = /** @class */ (function (_super) {
    __extends(GetResourceOwnerPathParams, _super);
    function GetResourceOwnerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resourceOwnerId" }),
        __metadata("design:type", String)
    ], GetResourceOwnerPathParams.prototype, "resourceOwnerId", void 0);
    return GetResourceOwnerPathParams;
}(SpeakeasyBase));
export { GetResourceOwnerPathParams };
var GetResourceOwnerSecurityOption1 = /** @class */ (function (_super) {
    __extends(GetResourceOwnerSecurityOption1, _super);
    function GetResourceOwnerSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetResourceOwnerSecurityOption1.prototype, "apiKey", void 0);
    return GetResourceOwnerSecurityOption1;
}(SpeakeasyBase));
export { GetResourceOwnerSecurityOption1 };
var GetResourceOwnerSecurityOption2 = /** @class */ (function (_super) {
    __extends(GetResourceOwnerSecurityOption2, _super);
    function GetResourceOwnerSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2AuthorizationCode)
    ], GetResourceOwnerSecurityOption2.prototype, "oauth2AuthorizationCode", void 0);
    return GetResourceOwnerSecurityOption2;
}(SpeakeasyBase));
export { GetResourceOwnerSecurityOption2 };
var GetResourceOwnerSecurity = /** @class */ (function (_super) {
    __extends(GetResourceOwnerSecurity, _super);
    function GetResourceOwnerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", GetResourceOwnerSecurityOption1)
    ], GetResourceOwnerSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", GetResourceOwnerSecurityOption2)
    ], GetResourceOwnerSecurity.prototype, "option2", void 0);
    return GetResourceOwnerSecurity;
}(SpeakeasyBase));
export { GetResourceOwnerSecurity };
var GetResourceOwnerRequest = /** @class */ (function (_super) {
    __extends(GetResourceOwnerRequest, _super);
    function GetResourceOwnerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetResourceOwnerPathParams)
    ], GetResourceOwnerRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetResourceOwnerSecurity)
    ], GetResourceOwnerRequest.prototype, "security", void 0);
    return GetResourceOwnerRequest;
}(SpeakeasyBase));
export { GetResourceOwnerRequest };
var GetResourceOwnerResponse = /** @class */ (function (_super) {
    __extends(GetResourceOwnerResponse, _super);
    function GetResourceOwnerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetResourceOwnerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Error)
    ], GetResourceOwnerResponse.prototype, "error", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], GetResourceOwnerResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ResourceOwner)
    ], GetResourceOwnerResponse.prototype, "resourceOwner", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetResourceOwnerResponse.prototype, "statusCode", void 0);
    return GetResourceOwnerResponse;
}(SpeakeasyBase));
export { GetResourceOwnerResponse };
