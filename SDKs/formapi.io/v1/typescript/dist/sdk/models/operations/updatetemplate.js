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
var UpdateTemplatePathParams = /** @class */ (function (_super) {
    __extends(UpdateTemplatePathParams, _super);
    function UpdateTemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template_id" }),
        __metadata("design:type", String)
    ], UpdateTemplatePathParams.prototype, "templateId", void 0);
    return UpdateTemplatePathParams;
}(SpeakeasyBase));
export { UpdateTemplatePathParams };
export var UpdateTemplateUpdateTemplateDataTemplateDataExpirationIntervalEnum;
(function (UpdateTemplateUpdateTemplateDataTemplateDataExpirationIntervalEnum) {
    UpdateTemplateUpdateTemplateDataTemplateDataExpirationIntervalEnum["Minutes"] = "minutes";
    UpdateTemplateUpdateTemplateDataTemplateDataExpirationIntervalEnum["Hours"] = "hours";
    UpdateTemplateUpdateTemplateDataTemplateDataExpirationIntervalEnum["Days"] = "days";
})(UpdateTemplateUpdateTemplateDataTemplateDataExpirationIntervalEnum || (UpdateTemplateUpdateTemplateDataTemplateDataExpirationIntervalEnum = {}));
var UpdateTemplateUpdateTemplateDataTemplateData = /** @class */ (function (_super) {
    __extends(UpdateTemplateUpdateTemplateDataTemplateData, _super);
    function UpdateTemplateUpdateTemplateDataTemplateData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_additional_properties" }),
        __metadata("design:type", Boolean)
    ], UpdateTemplateUpdateTemplateDataTemplateData.prototype, "allowAdditionalProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateTemplateUpdateTemplateDataTemplateData.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=editable_submissions" }),
        __metadata("design:type", Boolean)
    ], UpdateTemplateUpdateTemplateDataTemplateData.prototype, "editableSubmissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiration_interval" }),
        __metadata("design:type", String)
    ], UpdateTemplateUpdateTemplateDataTemplateData.prototype, "expirationInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expire_after" }),
        __metadata("design:type", Number)
    ], UpdateTemplateUpdateTemplateDataTemplateData.prototype, "expireAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expire_submissions" }),
        __metadata("design:type", Boolean)
    ], UpdateTemplateUpdateTemplateDataTemplateData.prototype, "expireSubmissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=footer_html" }),
        __metadata("design:type", String)
    ], UpdateTemplateUpdateTemplateDataTemplateData.prototype, "footerHtml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=header_html" }),
        __metadata("design:type", String)
    ], UpdateTemplateUpdateTemplateDataTemplateData.prototype, "headerHtml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html" }),
        __metadata("design:type", String)
    ], UpdateTemplateUpdateTemplateDataTemplateData.prototype, "html", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateTemplateUpdateTemplateDataTemplateData.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_submissions" }),
        __metadata("design:type", Boolean)
    ], UpdateTemplateUpdateTemplateDataTemplateData.prototype, "publicSubmissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_web_form" }),
        __metadata("design:type", Boolean)
    ], UpdateTemplateUpdateTemplateDataTemplateData.prototype, "publicWebForm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirect_url" }),
        __metadata("design:type", String)
    ], UpdateTemplateUpdateTemplateDataTemplateData.prototype, "redirectUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scss" }),
        __metadata("design:type", String)
    ], UpdateTemplateUpdateTemplateDataTemplateData.prototype, "scss", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slack_webhook_url" }),
        __metadata("design:type", String)
    ], UpdateTemplateUpdateTemplateDataTemplateData.prototype, "slackWebhookUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhook_url" }),
        __metadata("design:type", String)
    ], UpdateTemplateUpdateTemplateDataTemplateData.prototype, "webhookUrl", void 0);
    return UpdateTemplateUpdateTemplateDataTemplateData;
}(SpeakeasyBase));
export { UpdateTemplateUpdateTemplateDataTemplateData };
var UpdateTemplateUpdateTemplateData = /** @class */ (function (_super) {
    __extends(UpdateTemplateUpdateTemplateData, _super);
    function UpdateTemplateUpdateTemplateData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template" }),
        __metadata("design:type", UpdateTemplateUpdateTemplateDataTemplateData)
    ], UpdateTemplateUpdateTemplateData.prototype, "template", void 0);
    return UpdateTemplateUpdateTemplateData;
}(SpeakeasyBase));
export { UpdateTemplateUpdateTemplateData };
var UpdateTemplateSecurity = /** @class */ (function (_super) {
    __extends(UpdateTemplateSecurity, _super);
    function UpdateTemplateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiTokenBasic)
    ], UpdateTemplateSecurity.prototype, "apiTokenBasic", void 0);
    return UpdateTemplateSecurity;
}(SpeakeasyBase));
export { UpdateTemplateSecurity };
export var UpdateTemplateUpdateTemplateResponseStatusEnum;
(function (UpdateTemplateUpdateTemplateResponseStatusEnum) {
    UpdateTemplateUpdateTemplateResponseStatusEnum["Success"] = "success";
    UpdateTemplateUpdateTemplateResponseStatusEnum["Error"] = "error";
})(UpdateTemplateUpdateTemplateResponseStatusEnum || (UpdateTemplateUpdateTemplateResponseStatusEnum = {}));
var UpdateTemplateUpdateTemplateResponse = /** @class */ (function (_super) {
    __extends(UpdateTemplateUpdateTemplateResponse, _super);
    function UpdateTemplateUpdateTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", Array)
    ], UpdateTemplateUpdateTemplateResponse.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], UpdateTemplateUpdateTemplateResponse.prototype, "status", void 0);
    return UpdateTemplateUpdateTemplateResponse;
}(SpeakeasyBase));
export { UpdateTemplateUpdateTemplateResponse };
var UpdateTemplateRequest = /** @class */ (function (_super) {
    __extends(UpdateTemplateRequest, _super);
    function UpdateTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateTemplatePathParams)
    ], UpdateTemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateTemplateUpdateTemplateData)
    ], UpdateTemplateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateTemplateSecurity)
    ], UpdateTemplateRequest.prototype, "security", void 0);
    return UpdateTemplateRequest;
}(SpeakeasyBase));
export { UpdateTemplateRequest };
var UpdateTemplateResponse = /** @class */ (function (_super) {
    __extends(UpdateTemplateResponse, _super);
    function UpdateTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateTemplateUpdateTemplateResponse)
    ], UpdateTemplateResponse.prototype, "updateTemplateResponse", void 0);
    return UpdateTemplateResponse;
}(SpeakeasyBase));
export { UpdateTemplateResponse };
