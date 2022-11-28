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
var OrgsUpdateWebhookPathParams = /** @class */ (function (_super) {
    __extends(OrgsUpdateWebhookPathParams, _super);
    function OrgsUpdateWebhookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=hook_id" }),
        __metadata("design:type", Number)
    ], OrgsUpdateWebhookPathParams.prototype, "hookId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], OrgsUpdateWebhookPathParams.prototype, "org", void 0);
    return OrgsUpdateWebhookPathParams;
}(SpeakeasyBase));
export { OrgsUpdateWebhookPathParams };
// OrgsUpdateWebhookRequestBodyConfig
/**
 * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#update-hook-config-params).
**/
var OrgsUpdateWebhookRequestBodyConfig = /** @class */ (function (_super) {
    __extends(OrgsUpdateWebhookRequestBodyConfig, _super);
    function OrgsUpdateWebhookRequestBodyConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content_type" }),
        __metadata("design:type", String)
    ], OrgsUpdateWebhookRequestBodyConfig.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insecure_ssl" }),
        __metadata("design:type", Object)
    ], OrgsUpdateWebhookRequestBodyConfig.prototype, "insecureSsl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secret" }),
        __metadata("design:type", String)
    ], OrgsUpdateWebhookRequestBodyConfig.prototype, "secret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], OrgsUpdateWebhookRequestBodyConfig.prototype, "url", void 0);
    return OrgsUpdateWebhookRequestBodyConfig;
}(SpeakeasyBase));
export { OrgsUpdateWebhookRequestBodyConfig };
var OrgsUpdateWebhookRequestBody = /** @class */ (function (_super) {
    __extends(OrgsUpdateWebhookRequestBody, _super);
    function OrgsUpdateWebhookRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], OrgsUpdateWebhookRequestBody.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config" }),
        __metadata("design:type", OrgsUpdateWebhookRequestBodyConfig)
    ], OrgsUpdateWebhookRequestBody.prototype, "config", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events" }),
        __metadata("design:type", Array)
    ], OrgsUpdateWebhookRequestBody.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OrgsUpdateWebhookRequestBody.prototype, "name", void 0);
    return OrgsUpdateWebhookRequestBody;
}(SpeakeasyBase));
export { OrgsUpdateWebhookRequestBody };
var OrgsUpdateWebhookRequest = /** @class */ (function (_super) {
    __extends(OrgsUpdateWebhookRequest, _super);
    function OrgsUpdateWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrgsUpdateWebhookPathParams)
    ], OrgsUpdateWebhookRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", OrgsUpdateWebhookRequestBody)
    ], OrgsUpdateWebhookRequest.prototype, "request", void 0);
    return OrgsUpdateWebhookRequest;
}(SpeakeasyBase));
export { OrgsUpdateWebhookRequest };
var OrgsUpdateWebhookResponse = /** @class */ (function (_super) {
    __extends(OrgsUpdateWebhookResponse, _super);
    function OrgsUpdateWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OrgsUpdateWebhookResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OrgsUpdateWebhookResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], OrgsUpdateWebhookResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OrgHook)
    ], OrgsUpdateWebhookResponse.prototype, "orgHook", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], OrgsUpdateWebhookResponse.prototype, "validationError", void 0);
    return OrgsUpdateWebhookResponse;
}(SpeakeasyBase));
export { OrgsUpdateWebhookResponse };
