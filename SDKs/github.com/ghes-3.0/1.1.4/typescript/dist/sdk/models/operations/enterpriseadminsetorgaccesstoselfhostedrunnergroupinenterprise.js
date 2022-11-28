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
var EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams, _super);
    function EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" }),
        __metadata("design:type", String)
    ], EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams.prototype, "enterprise", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams.prototype, "runnerGroupId", void 0);
    return EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams;
}(SpeakeasyBase));
export { EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams };
var EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody = /** @class */ (function (_super) {
    __extends(EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody, _super);
    function EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selected_organization_ids" }),
        __metadata("design:type", Array)
    ], EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody.prototype, "selectedOrganizationIds", void 0);
    return EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody;
}(SpeakeasyBase));
export { EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody };
var EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest, _super);
    function EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams)
    ], EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody)
    ], EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest.prototype, "request", void 0);
    return EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest;
}(SpeakeasyBase));
export { EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest };
var EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse, _super);
    function EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse.prototype, "statusCode", void 0);
    return EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse;
}(SpeakeasyBase));
export { EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse };
