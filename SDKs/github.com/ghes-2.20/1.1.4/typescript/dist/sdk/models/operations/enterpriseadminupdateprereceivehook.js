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
var EnterpriseAdminUpdatePreReceiveHookPathParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminUpdatePreReceiveHookPathParams, _super);
    function EnterpriseAdminUpdatePreReceiveHookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pre_receive_hook_id" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminUpdatePreReceiveHookPathParams.prototype, "preReceiveHookId", void 0);
    return EnterpriseAdminUpdatePreReceiveHookPathParams;
}(SpeakeasyBase));
export { EnterpriseAdminUpdatePreReceiveHookPathParams };
var EnterpriseAdminUpdatePreReceiveHookRequestBody = /** @class */ (function (_super) {
    __extends(EnterpriseAdminUpdatePreReceiveHookRequestBody, _super);
    function EnterpriseAdminUpdatePreReceiveHookRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_downstream_configuration" }),
        __metadata("design:type", Boolean)
    ], EnterpriseAdminUpdatePreReceiveHookRequestBody.prototype, "allowDownstreamConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enforcement" }),
        __metadata("design:type", String)
    ], EnterpriseAdminUpdatePreReceiveHookRequestBody.prototype, "enforcement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", Map)
    ], EnterpriseAdminUpdatePreReceiveHookRequestBody.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EnterpriseAdminUpdatePreReceiveHookRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=script" }),
        __metadata("design:type", String)
    ], EnterpriseAdminUpdatePreReceiveHookRequestBody.prototype, "script", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=script_repository" }),
        __metadata("design:type", Map)
    ], EnterpriseAdminUpdatePreReceiveHookRequestBody.prototype, "scriptRepository", void 0);
    return EnterpriseAdminUpdatePreReceiveHookRequestBody;
}(SpeakeasyBase));
export { EnterpriseAdminUpdatePreReceiveHookRequestBody };
var EnterpriseAdminUpdatePreReceiveHookRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminUpdatePreReceiveHookRequest, _super);
    function EnterpriseAdminUpdatePreReceiveHookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminUpdatePreReceiveHookPathParams)
    ], EnterpriseAdminUpdatePreReceiveHookRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EnterpriseAdminUpdatePreReceiveHookRequestBody)
    ], EnterpriseAdminUpdatePreReceiveHookRequest.prototype, "request", void 0);
    return EnterpriseAdminUpdatePreReceiveHookRequest;
}(SpeakeasyBase));
export { EnterpriseAdminUpdatePreReceiveHookRequest };
var EnterpriseAdminUpdatePreReceiveHookResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminUpdatePreReceiveHookResponse, _super);
    function EnterpriseAdminUpdatePreReceiveHookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnterpriseAdminUpdatePreReceiveHookResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnterpriseAdminUpdatePreReceiveHookResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreReceiveHook)
    ], EnterpriseAdminUpdatePreReceiveHookResponse.prototype, "preReceiveHook", void 0);
    return EnterpriseAdminUpdatePreReceiveHookResponse;
}(SpeakeasyBase));
export { EnterpriseAdminUpdatePreReceiveHookResponse };
