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
var AppsCreateInstallationAccessTokenPathParams = /** @class */ (function (_super) {
    __extends(AppsCreateInstallationAccessTokenPathParams, _super);
    function AppsCreateInstallationAccessTokenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=installation_id" }),
        __metadata("design:type", Number)
    ], AppsCreateInstallationAccessTokenPathParams.prototype, "installationId", void 0);
    return AppsCreateInstallationAccessTokenPathParams;
}(SpeakeasyBase));
export { AppsCreateInstallationAccessTokenPathParams };
var AppsCreateInstallationAccessTokenRequestBody = /** @class */ (function (_super) {
    __extends(AppsCreateInstallationAccessTokenRequestBody, _super);
    function AppsCreateInstallationAccessTokenRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", shared.AppPermissions)
    ], AppsCreateInstallationAccessTokenRequestBody.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repositories" }),
        __metadata("design:type", Array)
    ], AppsCreateInstallationAccessTokenRequestBody.prototype, "repositories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repository_ids" }),
        __metadata("design:type", Array)
    ], AppsCreateInstallationAccessTokenRequestBody.prototype, "repositoryIds", void 0);
    return AppsCreateInstallationAccessTokenRequestBody;
}(SpeakeasyBase));
export { AppsCreateInstallationAccessTokenRequestBody };
var AppsCreateInstallationAccessToken415ApplicationJson = /** @class */ (function (_super) {
    __extends(AppsCreateInstallationAccessToken415ApplicationJson, _super);
    function AppsCreateInstallationAccessToken415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], AppsCreateInstallationAccessToken415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AppsCreateInstallationAccessToken415ApplicationJson.prototype, "message", void 0);
    return AppsCreateInstallationAccessToken415ApplicationJson;
}(SpeakeasyBase));
export { AppsCreateInstallationAccessToken415ApplicationJson };
var AppsCreateInstallationAccessTokenRequest = /** @class */ (function (_super) {
    __extends(AppsCreateInstallationAccessTokenRequest, _super);
    function AppsCreateInstallationAccessTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppsCreateInstallationAccessTokenPathParams)
    ], AppsCreateInstallationAccessTokenRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AppsCreateInstallationAccessTokenRequestBody)
    ], AppsCreateInstallationAccessTokenRequest.prototype, "request", void 0);
    return AppsCreateInstallationAccessTokenRequest;
}(SpeakeasyBase));
export { AppsCreateInstallationAccessTokenRequest };
var AppsCreateInstallationAccessTokenResponse = /** @class */ (function (_super) {
    __extends(AppsCreateInstallationAccessTokenResponse, _super);
    function AppsCreateInstallationAccessTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppsCreateInstallationAccessTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppsCreateInstallationAccessTokenResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppsCreateInstallationAccessToken415ApplicationJson)
    ], AppsCreateInstallationAccessTokenResponse.prototype, "appsCreateInstallationAccessToken415ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], AppsCreateInstallationAccessTokenResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InstallationToken)
    ], AppsCreateInstallationAccessTokenResponse.prototype, "installationToken", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], AppsCreateInstallationAccessTokenResponse.prototype, "validationError", void 0);
    return AppsCreateInstallationAccessTokenResponse;
}(SpeakeasyBase));
export { AppsCreateInstallationAccessTokenResponse };
