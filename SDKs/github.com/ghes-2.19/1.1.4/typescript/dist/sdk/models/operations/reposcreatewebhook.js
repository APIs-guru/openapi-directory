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
var ReposCreateWebhookPathParams = /** @class */ (function (_super) {
    __extends(ReposCreateWebhookPathParams, _super);
    function ReposCreateWebhookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposCreateWebhookPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposCreateWebhookPathParams.prototype, "repo", void 0);
    return ReposCreateWebhookPathParams;
}(SpeakeasyBase));
export { ReposCreateWebhookPathParams };
// ReposCreateWebhookRequestBodyConfig
/**
 * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/enterprise-server@2.19/rest/reference/repos#create-hook-config-params).
**/
var ReposCreateWebhookRequestBodyConfig = /** @class */ (function (_super) {
    __extends(ReposCreateWebhookRequestBodyConfig, _super);
    function ReposCreateWebhookRequestBodyConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content_type" }),
        __metadata("design:type", String)
    ], ReposCreateWebhookRequestBodyConfig.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=digest" }),
        __metadata("design:type", String)
    ], ReposCreateWebhookRequestBodyConfig.prototype, "digest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insecure_ssl" }),
        __metadata("design:type", Object)
    ], ReposCreateWebhookRequestBodyConfig.prototype, "insecureSsl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secret" }),
        __metadata("design:type", String)
    ], ReposCreateWebhookRequestBodyConfig.prototype, "secret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], ReposCreateWebhookRequestBodyConfig.prototype, "token", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ReposCreateWebhookRequestBodyConfig.prototype, "url", void 0);
    return ReposCreateWebhookRequestBodyConfig;
}(SpeakeasyBase));
export { ReposCreateWebhookRequestBodyConfig };
var ReposCreateWebhookRequestBody = /** @class */ (function (_super) {
    __extends(ReposCreateWebhookRequestBody, _super);
    function ReposCreateWebhookRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], ReposCreateWebhookRequestBody.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config" }),
        __metadata("design:type", ReposCreateWebhookRequestBodyConfig)
    ], ReposCreateWebhookRequestBody.prototype, "config", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events" }),
        __metadata("design:type", Array)
    ], ReposCreateWebhookRequestBody.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReposCreateWebhookRequestBody.prototype, "name", void 0);
    return ReposCreateWebhookRequestBody;
}(SpeakeasyBase));
export { ReposCreateWebhookRequestBody };
var ReposCreateWebhookRequest = /** @class */ (function (_super) {
    __extends(ReposCreateWebhookRequest, _super);
    function ReposCreateWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposCreateWebhookPathParams)
    ], ReposCreateWebhookRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposCreateWebhookRequestBody)
    ], ReposCreateWebhookRequest.prototype, "request", void 0);
    return ReposCreateWebhookRequest;
}(SpeakeasyBase));
export { ReposCreateWebhookRequest };
var ReposCreateWebhookResponse = /** @class */ (function (_super) {
    __extends(ReposCreateWebhookResponse, _super);
    function ReposCreateWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposCreateWebhookResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ReposCreateWebhookResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposCreateWebhookResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ReposCreateWebhookResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Hook)
    ], ReposCreateWebhookResponse.prototype, "hook", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], ReposCreateWebhookResponse.prototype, "validationError", void 0);
    return ReposCreateWebhookResponse;
}(SpeakeasyBase));
export { ReposCreateWebhookResponse };
