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
var EnterpriseAdminDeleteGlobalWebhookPathParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminDeleteGlobalWebhookPathParams, _super);
    function EnterpriseAdminDeleteGlobalWebhookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=hook_id" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminDeleteGlobalWebhookPathParams.prototype, "hookId", void 0);
    return EnterpriseAdminDeleteGlobalWebhookPathParams;
}(SpeakeasyBase));
export { EnterpriseAdminDeleteGlobalWebhookPathParams };
var EnterpriseAdminDeleteGlobalWebhookHeaders = /** @class */ (function (_super) {
    __extends(EnterpriseAdminDeleteGlobalWebhookHeaders, _super);
    function EnterpriseAdminDeleteGlobalWebhookHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept" }),
        __metadata("design:type", String)
    ], EnterpriseAdminDeleteGlobalWebhookHeaders.prototype, "accept", void 0);
    return EnterpriseAdminDeleteGlobalWebhookHeaders;
}(SpeakeasyBase));
export { EnterpriseAdminDeleteGlobalWebhookHeaders };
var EnterpriseAdminDeleteGlobalWebhookRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminDeleteGlobalWebhookRequest, _super);
    function EnterpriseAdminDeleteGlobalWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminDeleteGlobalWebhookPathParams)
    ], EnterpriseAdminDeleteGlobalWebhookRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminDeleteGlobalWebhookHeaders)
    ], EnterpriseAdminDeleteGlobalWebhookRequest.prototype, "headers", void 0);
    return EnterpriseAdminDeleteGlobalWebhookRequest;
}(SpeakeasyBase));
export { EnterpriseAdminDeleteGlobalWebhookRequest };
var EnterpriseAdminDeleteGlobalWebhookResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminDeleteGlobalWebhookResponse, _super);
    function EnterpriseAdminDeleteGlobalWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnterpriseAdminDeleteGlobalWebhookResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnterpriseAdminDeleteGlobalWebhookResponse.prototype, "statusCode", void 0);
    return EnterpriseAdminDeleteGlobalWebhookResponse;
}(SpeakeasyBase));
export { EnterpriseAdminDeleteGlobalWebhookResponse };
