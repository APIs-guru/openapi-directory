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
var EnterpriseAdminSetGithubActionsPermissionsEnterprisePathParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminSetGithubActionsPermissionsEnterprisePathParams, _super);
    function EnterpriseAdminSetGithubActionsPermissionsEnterprisePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" }),
        __metadata("design:type", String)
    ], EnterpriseAdminSetGithubActionsPermissionsEnterprisePathParams.prototype, "enterprise", void 0);
    return EnterpriseAdminSetGithubActionsPermissionsEnterprisePathParams;
}(SpeakeasyBase));
export { EnterpriseAdminSetGithubActionsPermissionsEnterprisePathParams };
var EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody = /** @class */ (function (_super) {
    __extends(EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody, _super);
    function EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowed_actions" }),
        __metadata("design:type", String)
    ], EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody.prototype, "allowedActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled_organizations" }),
        __metadata("design:type", String)
    ], EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody.prototype, "enabledOrganizations", void 0);
    return EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody;
}(SpeakeasyBase));
export { EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody };
var EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest, _super);
    function EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminSetGithubActionsPermissionsEnterprisePathParams)
    ], EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody)
    ], EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest.prototype, "request", void 0);
    return EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest;
}(SpeakeasyBase));
export { EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest };
var EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse, _super);
    function EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse.prototype, "statusCode", void 0);
    return EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse;
}(SpeakeasyBase));
export { EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse };
