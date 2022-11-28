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
var ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationPathParams = /** @class */ (function (_super) {
    __extends(ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationPathParams, _super);
    function ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationPathParams.prototype, "org", void 0);
    return ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationPathParams;
}(SpeakeasyBase));
export { ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationPathParams };
var ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody = /** @class */ (function (_super) {
    __extends(ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody, _super);
    function ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selected_repository_ids" }),
        __metadata("design:type", Array)
    ], ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody.prototype, "selectedRepositoryIds", void 0);
    return ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody;
}(SpeakeasyBase));
export { ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody };
var ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest = /** @class */ (function (_super) {
    __extends(ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest, _super);
    function ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationPathParams)
    ], ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody)
    ], ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest.prototype, "request", void 0);
    return ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest;
}(SpeakeasyBase));
export { ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest };
var ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResponse = /** @class */ (function (_super) {
    __extends(ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResponse, _super);
    function ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResponse.prototype, "statusCode", void 0);
    return ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResponse;
}(SpeakeasyBase));
export { ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResponse };
