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
var EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprisePathParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprisePathParams, _super);
    function EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprisePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" }),
        __metadata("design:type", String)
    ], EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprisePathParams.prototype, "enterprise", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runner_group_id" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprisePathParams.prototype, "runnerGroupId", void 0);
    return EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprisePathParams;
}(SpeakeasyBase));
export { EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprisePathParams };
var EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequestBody = /** @class */ (function (_super) {
    __extends(EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequestBody, _super);
    function EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runners" }),
        __metadata("design:type", Array)
    ], EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequestBody.prototype, "runners", void 0);
    return EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequestBody;
}(SpeakeasyBase));
export { EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequestBody };
var EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequest, _super);
    function EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprisePathParams)
    ], EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequestBody)
    ], EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequest.prototype, "request", void 0);
    return EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequest;
}(SpeakeasyBase));
export { EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequest };
var EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponse, _super);
    function EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponse.prototype, "statusCode", void 0);
    return EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponse;
}(SpeakeasyBase));
export { EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponse };
