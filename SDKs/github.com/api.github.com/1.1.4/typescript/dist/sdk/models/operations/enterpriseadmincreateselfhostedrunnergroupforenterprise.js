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
var EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprisePathParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprisePathParams, _super);
    function EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprisePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" }),
        __metadata("design:type", String)
    ], EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprisePathParams.prototype, "enterprise", void 0);
    return EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprisePathParams;
}(SpeakeasyBase));
export { EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprisePathParams };
export var EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum;
(function (EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum) {
    EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum["Selected"] = "selected";
    EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum["All"] = "all";
})(EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum || (EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum = {}));
var EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody = /** @class */ (function (_super) {
    __extends(EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody, _super);
    function EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runners" }),
        __metadata("design:type", Array)
    ], EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody.prototype, "runners", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selected_organization_ids" }),
        __metadata("design:type", Array)
    ], EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody.prototype, "selectedOrganizationIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibility" }),
        __metadata("design:type", String)
    ], EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody.prototype, "visibility", void 0);
    return EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody;
}(SpeakeasyBase));
export { EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody };
var EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest, _super);
    function EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprisePathParams)
    ], EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody)
    ], EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest.prototype, "request", void 0);
    return EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest;
}(SpeakeasyBase));
export { EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest };
var EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse, _super);
    function EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RunnerGroupsEnterprise)
    ], EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse.prototype, "runnerGroupsEnterprise", void 0);
    return EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse;
}(SpeakeasyBase));
export { EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse };
