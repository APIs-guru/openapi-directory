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
var EnterpriseAdminCreateGlobalWebhookHeaders = /** @class */ (function (_super) {
    __extends(EnterpriseAdminCreateGlobalWebhookHeaders, _super);
    function EnterpriseAdminCreateGlobalWebhookHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept" }),
        __metadata("design:type", String)
    ], EnterpriseAdminCreateGlobalWebhookHeaders.prototype, "accept", void 0);
    return EnterpriseAdminCreateGlobalWebhookHeaders;
}(SpeakeasyBase));
export { EnterpriseAdminCreateGlobalWebhookHeaders };
// EnterpriseAdminCreateGlobalWebhookRequestBodyConfig
/**
 * Key/value pairs to provide settings for this webhook.
**/
var EnterpriseAdminCreateGlobalWebhookRequestBodyConfig = /** @class */ (function (_super) {
    __extends(EnterpriseAdminCreateGlobalWebhookRequestBodyConfig, _super);
    function EnterpriseAdminCreateGlobalWebhookRequestBodyConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content_type" }),
        __metadata("design:type", String)
    ], EnterpriseAdminCreateGlobalWebhookRequestBodyConfig.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insecure_ssl" }),
        __metadata("design:type", String)
    ], EnterpriseAdminCreateGlobalWebhookRequestBodyConfig.prototype, "insecureSsl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secret" }),
        __metadata("design:type", String)
    ], EnterpriseAdminCreateGlobalWebhookRequestBodyConfig.prototype, "secret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], EnterpriseAdminCreateGlobalWebhookRequestBodyConfig.prototype, "url", void 0);
    return EnterpriseAdminCreateGlobalWebhookRequestBodyConfig;
}(SpeakeasyBase));
export { EnterpriseAdminCreateGlobalWebhookRequestBodyConfig };
var EnterpriseAdminCreateGlobalWebhookRequestBody = /** @class */ (function (_super) {
    __extends(EnterpriseAdminCreateGlobalWebhookRequestBody, _super);
    function EnterpriseAdminCreateGlobalWebhookRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], EnterpriseAdminCreateGlobalWebhookRequestBody.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config" }),
        __metadata("design:type", EnterpriseAdminCreateGlobalWebhookRequestBodyConfig)
    ], EnterpriseAdminCreateGlobalWebhookRequestBody.prototype, "config", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events" }),
        __metadata("design:type", Array)
    ], EnterpriseAdminCreateGlobalWebhookRequestBody.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EnterpriseAdminCreateGlobalWebhookRequestBody.prototype, "name", void 0);
    return EnterpriseAdminCreateGlobalWebhookRequestBody;
}(SpeakeasyBase));
export { EnterpriseAdminCreateGlobalWebhookRequestBody };
var EnterpriseAdminCreateGlobalWebhookRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminCreateGlobalWebhookRequest, _super);
    function EnterpriseAdminCreateGlobalWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminCreateGlobalWebhookHeaders)
    ], EnterpriseAdminCreateGlobalWebhookRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EnterpriseAdminCreateGlobalWebhookRequestBody)
    ], EnterpriseAdminCreateGlobalWebhookRequest.prototype, "request", void 0);
    return EnterpriseAdminCreateGlobalWebhookRequest;
}(SpeakeasyBase));
export { EnterpriseAdminCreateGlobalWebhookRequest };
var EnterpriseAdminCreateGlobalWebhookResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminCreateGlobalWebhookResponse, _super);
    function EnterpriseAdminCreateGlobalWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnterpriseAdminCreateGlobalWebhookResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnterpriseAdminCreateGlobalWebhookResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GlobalHook)
    ], EnterpriseAdminCreateGlobalWebhookResponse.prototype, "globalHook", void 0);
    return EnterpriseAdminCreateGlobalWebhookResponse;
}(SpeakeasyBase));
export { EnterpriseAdminCreateGlobalWebhookResponse };
