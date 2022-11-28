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
var AppsScopeTokenPathParams = /** @class */ (function (_super) {
    __extends(AppsScopeTokenPathParams, _super);
    function AppsScopeTokenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client_id" }),
        __metadata("design:type", String)
    ], AppsScopeTokenPathParams.prototype, "clientId", void 0);
    return AppsScopeTokenPathParams;
}(SpeakeasyBase));
export { AppsScopeTokenPathParams };
var AppsScopeTokenRequestBody = /** @class */ (function (_super) {
    __extends(AppsScopeTokenRequestBody, _super);
    function AppsScopeTokenRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=access_token" }),
        __metadata("design:type", String)
    ], AppsScopeTokenRequestBody.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", shared.AppPermissions)
    ], AppsScopeTokenRequestBody.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repositories" }),
        __metadata("design:type", Array)
    ], AppsScopeTokenRequestBody.prototype, "repositories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repository_ids" }),
        __metadata("design:type", Array)
    ], AppsScopeTokenRequestBody.prototype, "repositoryIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target" }),
        __metadata("design:type", String)
    ], AppsScopeTokenRequestBody.prototype, "target", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target_id" }),
        __metadata("design:type", Number)
    ], AppsScopeTokenRequestBody.prototype, "targetId", void 0);
    return AppsScopeTokenRequestBody;
}(SpeakeasyBase));
export { AppsScopeTokenRequestBody };
var AppsScopeTokenRequest = /** @class */ (function (_super) {
    __extends(AppsScopeTokenRequest, _super);
    function AppsScopeTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppsScopeTokenPathParams)
    ], AppsScopeTokenRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AppsScopeTokenRequestBody)
    ], AppsScopeTokenRequest.prototype, "request", void 0);
    return AppsScopeTokenRequest;
}(SpeakeasyBase));
export { AppsScopeTokenRequest };
var AppsScopeTokenResponse = /** @class */ (function (_super) {
    __extends(AppsScopeTokenResponse, _super);
    function AppsScopeTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppsScopeTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppsScopeTokenResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Authorization)
    ], AppsScopeTokenResponse.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], AppsScopeTokenResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], AppsScopeTokenResponse.prototype, "validationError", void 0);
    return AppsScopeTokenResponse;
}(SpeakeasyBase));
export { AppsScopeTokenResponse };
