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
var EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprisePathParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprisePathParams, _super);
    function EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprisePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" }),
        __metadata("design:type", String)
    ], EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprisePathParams.prototype, "enterprise", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprisePathParams.prototype, "runnerGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runner_id" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprisePathParams.prototype, "runnerId", void 0);
    return EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprisePathParams;
}(SpeakeasyBase));
export { EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprisePathParams };
var EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequest, _super);
    function EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprisePathParams)
    ], EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequest.prototype, "pathParams", void 0);
    return EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequest;
}(SpeakeasyBase));
export { EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequest };
var EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse, _super);
    function EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse.prototype, "statusCode", void 0);
    return EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse;
}(SpeakeasyBase));
export { EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse };
