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
var EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams, _super);
    function EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" }),
        __metadata("design:type", String)
    ], EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams.prototype, "enterprise", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams.prototype, "runnerGroupId", void 0);
    return EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams;
}(SpeakeasyBase));
export { EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams };
var EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseQueryParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseQueryParams, _super);
    function EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseQueryParams.prototype, "perPage", void 0);
    return EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseQueryParams;
}(SpeakeasyBase));
export { EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseQueryParams };
var EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJson = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJson, _super);
    function EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations", elemType: shared.OrganizationSimple }),
        __metadata("design:type", Array)
    ], EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJson.prototype, "organizations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJson.prototype, "totalCount", void 0);
    return EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJson;
}(SpeakeasyBase));
export { EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJson };
var EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest, _super);
    function EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams)
    ], EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseQueryParams)
    ], EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest.prototype, "queryParams", void 0);
    return EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest;
}(SpeakeasyBase));
export { EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest };
var EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse, _super);
    function EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJson)
    ], EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse.prototype, "enterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJsonObject", void 0);
    return EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse;
}(SpeakeasyBase));
export { EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse };
