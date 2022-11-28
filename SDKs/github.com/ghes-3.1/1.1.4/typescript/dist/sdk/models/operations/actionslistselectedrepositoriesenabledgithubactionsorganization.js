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
var ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationPathParams = /** @class */ (function (_super) {
    __extends(ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationPathParams, _super);
    function ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationPathParams.prototype, "org", void 0);
    return ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationPathParams;
}(SpeakeasyBase));
export { ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationPathParams };
var ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationQueryParams = /** @class */ (function (_super) {
    __extends(ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationQueryParams, _super);
    function ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationQueryParams.prototype, "perPage", void 0);
    return ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationQueryParams;
}(SpeakeasyBase));
export { ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationQueryParams };
var ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJson = /** @class */ (function (_super) {
    __extends(ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJson, _super);
    function ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repositories", elemType: shared.Repository }),
        __metadata("design:type", Array)
    ], ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJson.prototype, "repositories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJson.prototype, "totalCount", void 0);
    return ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJson;
}(SpeakeasyBase));
export { ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJson };
var ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest = /** @class */ (function (_super) {
    __extends(ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest, _super);
    function ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationPathParams)
    ], ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationQueryParams)
    ], ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest.prototype, "queryParams", void 0);
    return ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest;
}(SpeakeasyBase));
export { ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest };
var ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponse = /** @class */ (function (_super) {
    __extends(ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponse, _super);
    function ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJson)
    ], ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponse.prototype, "actionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJsonObject", void 0);
    return ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponse;
}(SpeakeasyBase));
export { ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponse };
