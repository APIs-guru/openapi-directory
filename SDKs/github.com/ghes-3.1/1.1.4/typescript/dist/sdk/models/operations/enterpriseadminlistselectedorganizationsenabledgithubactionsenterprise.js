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
var EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprisePathParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprisePathParams, _super);
    function EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprisePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" }),
        __metadata("design:type", String)
    ], EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprisePathParams.prototype, "enterprise", void 0);
    return EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprisePathParams;
}(SpeakeasyBase));
export { EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprisePathParams };
var EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseQueryParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseQueryParams, _super);
    function EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseQueryParams.prototype, "perPage", void 0);
    return EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseQueryParams;
}(SpeakeasyBase));
export { EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseQueryParams };
var EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJson = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJson, _super);
    function EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations", elemType: shared.OrganizationSimple }),
        __metadata("design:type", Array)
    ], EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJson.prototype, "organizations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJson.prototype, "totalCount", void 0);
    return EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJson;
}(SpeakeasyBase));
export { EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJson };
var EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest, _super);
    function EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprisePathParams)
    ], EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseQueryParams)
    ], EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest.prototype, "queryParams", void 0);
    return EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest;
}(SpeakeasyBase));
export { EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest };
var EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse, _super);
    function EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJson)
    ], EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse.prototype, "enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJsonObject", void 0);
    return EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse;
}(SpeakeasyBase));
export { EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse };
