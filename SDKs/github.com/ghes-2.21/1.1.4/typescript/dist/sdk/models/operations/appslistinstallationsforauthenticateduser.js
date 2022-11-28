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
var AppsListInstallationsForAuthenticatedUserQueryParams = /** @class */ (function (_super) {
    __extends(AppsListInstallationsForAuthenticatedUserQueryParams, _super);
    function AppsListInstallationsForAuthenticatedUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], AppsListInstallationsForAuthenticatedUserQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], AppsListInstallationsForAuthenticatedUserQueryParams.prototype, "perPage", void 0);
    return AppsListInstallationsForAuthenticatedUserQueryParams;
}(SpeakeasyBase));
export { AppsListInstallationsForAuthenticatedUserQueryParams };
var AppsListInstallationsForAuthenticatedUserHeaders = /** @class */ (function (_super) {
    __extends(AppsListInstallationsForAuthenticatedUserHeaders, _super);
    function AppsListInstallationsForAuthenticatedUserHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept" }),
        __metadata("design:type", String)
    ], AppsListInstallationsForAuthenticatedUserHeaders.prototype, "accept", void 0);
    return AppsListInstallationsForAuthenticatedUserHeaders;
}(SpeakeasyBase));
export { AppsListInstallationsForAuthenticatedUserHeaders };
var AppsListInstallationsForAuthenticatedUser200ApplicationJson = /** @class */ (function (_super) {
    __extends(AppsListInstallationsForAuthenticatedUser200ApplicationJson, _super);
    function AppsListInstallationsForAuthenticatedUser200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=installations", elemType: shared.InstallationGhes2 }),
        __metadata("design:type", Array)
    ], AppsListInstallationsForAuthenticatedUser200ApplicationJson.prototype, "installations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], AppsListInstallationsForAuthenticatedUser200ApplicationJson.prototype, "totalCount", void 0);
    return AppsListInstallationsForAuthenticatedUser200ApplicationJson;
}(SpeakeasyBase));
export { AppsListInstallationsForAuthenticatedUser200ApplicationJson };
var AppsListInstallationsForAuthenticatedUser415ApplicationJson = /** @class */ (function (_super) {
    __extends(AppsListInstallationsForAuthenticatedUser415ApplicationJson, _super);
    function AppsListInstallationsForAuthenticatedUser415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], AppsListInstallationsForAuthenticatedUser415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AppsListInstallationsForAuthenticatedUser415ApplicationJson.prototype, "message", void 0);
    return AppsListInstallationsForAuthenticatedUser415ApplicationJson;
}(SpeakeasyBase));
export { AppsListInstallationsForAuthenticatedUser415ApplicationJson };
var AppsListInstallationsForAuthenticatedUserRequest = /** @class */ (function (_super) {
    __extends(AppsListInstallationsForAuthenticatedUserRequest, _super);
    function AppsListInstallationsForAuthenticatedUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppsListInstallationsForAuthenticatedUserQueryParams)
    ], AppsListInstallationsForAuthenticatedUserRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppsListInstallationsForAuthenticatedUserHeaders)
    ], AppsListInstallationsForAuthenticatedUserRequest.prototype, "headers", void 0);
    return AppsListInstallationsForAuthenticatedUserRequest;
}(SpeakeasyBase));
export { AppsListInstallationsForAuthenticatedUserRequest };
var AppsListInstallationsForAuthenticatedUserResponse = /** @class */ (function (_super) {
    __extends(AppsListInstallationsForAuthenticatedUserResponse, _super);
    function AppsListInstallationsForAuthenticatedUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppsListInstallationsForAuthenticatedUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], AppsListInstallationsForAuthenticatedUserResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppsListInstallationsForAuthenticatedUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppsListInstallationsForAuthenticatedUser200ApplicationJson)
    ], AppsListInstallationsForAuthenticatedUserResponse.prototype, "appsListInstallationsForAuthenticatedUser200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppsListInstallationsForAuthenticatedUser415ApplicationJson)
    ], AppsListInstallationsForAuthenticatedUserResponse.prototype, "appsListInstallationsForAuthenticatedUser415ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], AppsListInstallationsForAuthenticatedUserResponse.prototype, "basicError", void 0);
    return AppsListInstallationsForAuthenticatedUserResponse;
}(SpeakeasyBase));
export { AppsListInstallationsForAuthenticatedUserResponse };
