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
var ReposUpdateWebhookPathParams = /** @class */ (function (_super) {
    __extends(ReposUpdateWebhookPathParams, _super);
    function ReposUpdateWebhookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=hook_id" }),
        __metadata("design:type", Number)
    ], ReposUpdateWebhookPathParams.prototype, "hookId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposUpdateWebhookPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposUpdateWebhookPathParams.prototype, "repo", void 0);
    return ReposUpdateWebhookPathParams;
}(SpeakeasyBase));
export { ReposUpdateWebhookPathParams };
// ReposUpdateWebhookRequestBodyConfig
/**
 * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/rest/reference/repos#create-hook-config-params).
**/
var ReposUpdateWebhookRequestBodyConfig = /** @class */ (function (_super) {
    __extends(ReposUpdateWebhookRequestBodyConfig, _super);
    function ReposUpdateWebhookRequestBodyConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], ReposUpdateWebhookRequestBodyConfig.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content_type" }),
        __metadata("design:type", String)
    ], ReposUpdateWebhookRequestBodyConfig.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insecure_ssl" }),
        __metadata("design:type", String)
    ], ReposUpdateWebhookRequestBodyConfig.prototype, "insecureSsl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=room" }),
        __metadata("design:type", String)
    ], ReposUpdateWebhookRequestBodyConfig.prototype, "room", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secret" }),
        __metadata("design:type", String)
    ], ReposUpdateWebhookRequestBodyConfig.prototype, "secret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ReposUpdateWebhookRequestBodyConfig.prototype, "url", void 0);
    return ReposUpdateWebhookRequestBodyConfig;
}(SpeakeasyBase));
export { ReposUpdateWebhookRequestBodyConfig };
var ReposUpdateWebhookRequestBody = /** @class */ (function (_super) {
    __extends(ReposUpdateWebhookRequestBody, _super);
    function ReposUpdateWebhookRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateWebhookRequestBody.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add_events" }),
        __metadata("design:type", Array)
    ], ReposUpdateWebhookRequestBody.prototype, "addEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config" }),
        __metadata("design:type", ReposUpdateWebhookRequestBodyConfig)
    ], ReposUpdateWebhookRequestBody.prototype, "config", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events" }),
        __metadata("design:type", Array)
    ], ReposUpdateWebhookRequestBody.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remove_events" }),
        __metadata("design:type", Array)
    ], ReposUpdateWebhookRequestBody.prototype, "removeEvents", void 0);
    return ReposUpdateWebhookRequestBody;
}(SpeakeasyBase));
export { ReposUpdateWebhookRequestBody };
var ReposUpdateWebhookRequest = /** @class */ (function (_super) {
    __extends(ReposUpdateWebhookRequest, _super);
    function ReposUpdateWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposUpdateWebhookPathParams)
    ], ReposUpdateWebhookRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposUpdateWebhookRequestBody)
    ], ReposUpdateWebhookRequest.prototype, "request", void 0);
    return ReposUpdateWebhookRequest;
}(SpeakeasyBase));
export { ReposUpdateWebhookRequest };
var ReposUpdateWebhookResponse = /** @class */ (function (_super) {
    __extends(ReposUpdateWebhookResponse, _super);
    function ReposUpdateWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposUpdateWebhookResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposUpdateWebhookResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ReposUpdateWebhookResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Hook)
    ], ReposUpdateWebhookResponse.prototype, "hook", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], ReposUpdateWebhookResponse.prototype, "validationError", void 0);
    return ReposUpdateWebhookResponse;
}(SpeakeasyBase));
export { ReposUpdateWebhookResponse };
