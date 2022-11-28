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
var OrgsCreateWebhookPathParams = /** @class */ (function (_super) {
    __extends(OrgsCreateWebhookPathParams, _super);
    function OrgsCreateWebhookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], OrgsCreateWebhookPathParams.prototype, "org", void 0);
    return OrgsCreateWebhookPathParams;
}(SpeakeasyBase));
export { OrgsCreateWebhookPathParams };
// OrgsCreateWebhookRequestBodyConfig
/**
 * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#create-hook-config-params).
**/
var OrgsCreateWebhookRequestBodyConfig = /** @class */ (function (_super) {
    __extends(OrgsCreateWebhookRequestBodyConfig, _super);
    function OrgsCreateWebhookRequestBodyConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content_type" }),
        __metadata("design:type", String)
    ], OrgsCreateWebhookRequestBodyConfig.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insecure_ssl" }),
        __metadata("design:type", Object)
    ], OrgsCreateWebhookRequestBodyConfig.prototype, "insecureSsl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], OrgsCreateWebhookRequestBodyConfig.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secret" }),
        __metadata("design:type", String)
    ], OrgsCreateWebhookRequestBodyConfig.prototype, "secret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], OrgsCreateWebhookRequestBodyConfig.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], OrgsCreateWebhookRequestBodyConfig.prototype, "username", void 0);
    return OrgsCreateWebhookRequestBodyConfig;
}(SpeakeasyBase));
export { OrgsCreateWebhookRequestBodyConfig };
var OrgsCreateWebhookRequestBody = /** @class */ (function (_super) {
    __extends(OrgsCreateWebhookRequestBody, _super);
    function OrgsCreateWebhookRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], OrgsCreateWebhookRequestBody.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config" }),
        __metadata("design:type", OrgsCreateWebhookRequestBodyConfig)
    ], OrgsCreateWebhookRequestBody.prototype, "config", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events" }),
        __metadata("design:type", Array)
    ], OrgsCreateWebhookRequestBody.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OrgsCreateWebhookRequestBody.prototype, "name", void 0);
    return OrgsCreateWebhookRequestBody;
}(SpeakeasyBase));
export { OrgsCreateWebhookRequestBody };
var OrgsCreateWebhookRequest = /** @class */ (function (_super) {
    __extends(OrgsCreateWebhookRequest, _super);
    function OrgsCreateWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrgsCreateWebhookPathParams)
    ], OrgsCreateWebhookRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", OrgsCreateWebhookRequestBody)
    ], OrgsCreateWebhookRequest.prototype, "request", void 0);
    return OrgsCreateWebhookRequest;
}(SpeakeasyBase));
export { OrgsCreateWebhookRequest };
var OrgsCreateWebhookResponse = /** @class */ (function (_super) {
    __extends(OrgsCreateWebhookResponse, _super);
    function OrgsCreateWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OrgsCreateWebhookResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], OrgsCreateWebhookResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OrgsCreateWebhookResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], OrgsCreateWebhookResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OrgHook)
    ], OrgsCreateWebhookResponse.prototype, "orgHook", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], OrgsCreateWebhookResponse.prototype, "validationError", void 0);
    return OrgsCreateWebhookResponse;
}(SpeakeasyBase));
export { OrgsCreateWebhookResponse };
