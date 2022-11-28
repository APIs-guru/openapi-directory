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
var EnterpriseAdminCreatePreReceiveHookRequestBody = /** @class */ (function (_super) {
    __extends(EnterpriseAdminCreatePreReceiveHookRequestBody, _super);
    function EnterpriseAdminCreatePreReceiveHookRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_downstream_configuration" }),
        __metadata("design:type", Boolean)
    ], EnterpriseAdminCreatePreReceiveHookRequestBody.prototype, "allowDownstreamConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enforcement" }),
        __metadata("design:type", String)
    ], EnterpriseAdminCreatePreReceiveHookRequestBody.prototype, "enforcement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", Map)
    ], EnterpriseAdminCreatePreReceiveHookRequestBody.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EnterpriseAdminCreatePreReceiveHookRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=script" }),
        __metadata("design:type", String)
    ], EnterpriseAdminCreatePreReceiveHookRequestBody.prototype, "script", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=script_repository" }),
        __metadata("design:type", Map)
    ], EnterpriseAdminCreatePreReceiveHookRequestBody.prototype, "scriptRepository", void 0);
    return EnterpriseAdminCreatePreReceiveHookRequestBody;
}(SpeakeasyBase));
export { EnterpriseAdminCreatePreReceiveHookRequestBody };
var EnterpriseAdminCreatePreReceiveHookRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminCreatePreReceiveHookRequest, _super);
    function EnterpriseAdminCreatePreReceiveHookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EnterpriseAdminCreatePreReceiveHookRequestBody)
    ], EnterpriseAdminCreatePreReceiveHookRequest.prototype, "request", void 0);
    return EnterpriseAdminCreatePreReceiveHookRequest;
}(SpeakeasyBase));
export { EnterpriseAdminCreatePreReceiveHookRequest };
var EnterpriseAdminCreatePreReceiveHookResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminCreatePreReceiveHookResponse, _super);
    function EnterpriseAdminCreatePreReceiveHookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnterpriseAdminCreatePreReceiveHookResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnterpriseAdminCreatePreReceiveHookResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreReceiveHook)
    ], EnterpriseAdminCreatePreReceiveHookResponse.prototype, "preReceiveHook", void 0);
    return EnterpriseAdminCreatePreReceiveHookResponse;
}(SpeakeasyBase));
export { EnterpriseAdminCreatePreReceiveHookResponse };
