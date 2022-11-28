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
export var CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateDataExpirationIntervalEnum;
(function (CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateDataExpirationIntervalEnum) {
    CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateDataExpirationIntervalEnum["Minutes"] = "minutes";
    CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateDataExpirationIntervalEnum["Hours"] = "hours";
    CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateDataExpirationIntervalEnum["Days"] = "days";
})(CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateDataExpirationIntervalEnum || (CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateDataExpirationIntervalEnum = {}));
export var CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateDataTemplateTypeEnum;
(function (CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateDataTemplateTypeEnum) {
    CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateDataTemplateTypeEnum["Pdf"] = "pdf";
    CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateDataTemplateTypeEnum["Html"] = "html";
})(CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateDataTemplateTypeEnum || (CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateDataTemplateTypeEnum = {}));
var CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateData = /** @class */ (function (_super) {
    __extends(CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateData, _super);
    function CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_additional_properties" }),
        __metadata("design:type", Boolean)
    ], CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateData.prototype, "allowAdditionalProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateData.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=editable_submissions" }),
        __metadata("design:type", Boolean)
    ], CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateData.prototype, "editableSubmissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiration_interval" }),
        __metadata("design:type", String)
    ], CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateData.prototype, "expirationInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expire_after" }),
        __metadata("design:type", Number)
    ], CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateData.prototype, "expireAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expire_submissions" }),
        __metadata("design:type", Boolean)
    ], CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateData.prototype, "expireSubmissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=footer_html" }),
        __metadata("design:type", String)
    ], CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateData.prototype, "footerHtml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=header_html" }),
        __metadata("design:type", String)
    ], CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateData.prototype, "headerHtml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html" }),
        __metadata("design:type", String)
    ], CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateData.prototype, "html", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateData.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_submissions" }),
        __metadata("design:type", Boolean)
    ], CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateData.prototype, "publicSubmissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_web_form" }),
        __metadata("design:type", Boolean)
    ], CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateData.prototype, "publicWebForm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirect_url" }),
        __metadata("design:type", String)
    ], CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateData.prototype, "redirectUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scss" }),
        __metadata("design:type", String)
    ], CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateData.prototype, "scss", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slack_webhook_url" }),
        __metadata("design:type", String)
    ], CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateData.prototype, "slackWebhookUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template_type" }),
        __metadata("design:type", String)
    ], CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateData.prototype, "templateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhook_url" }),
        __metadata("design:type", String)
    ], CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateData.prototype, "webhookUrl", void 0);
    return CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateData;
}(SpeakeasyBase));
export { CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateData };
var CreateHtmlTemplateCreateHtmlTemplateData = /** @class */ (function (_super) {
    __extends(CreateHtmlTemplateCreateHtmlTemplateData, _super);
    function CreateHtmlTemplateCreateHtmlTemplateData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template" }),
        __metadata("design:type", CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateData)
    ], CreateHtmlTemplateCreateHtmlTemplateData.prototype, "template", void 0);
    return CreateHtmlTemplateCreateHtmlTemplateData;
}(SpeakeasyBase));
export { CreateHtmlTemplateCreateHtmlTemplateData };
var CreateHtmlTemplateSecurity = /** @class */ (function (_super) {
    __extends(CreateHtmlTemplateSecurity, _super);
    function CreateHtmlTemplateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiTokenBasic)
    ], CreateHtmlTemplateSecurity.prototype, "apiTokenBasic", void 0);
    return CreateHtmlTemplateSecurity;
}(SpeakeasyBase));
export { CreateHtmlTemplateSecurity };
export var CreateHtmlTemplatePendingTemplateExpirationIntervalEnum;
(function (CreateHtmlTemplatePendingTemplateExpirationIntervalEnum) {
    CreateHtmlTemplatePendingTemplateExpirationIntervalEnum["Minutes"] = "minutes";
    CreateHtmlTemplatePendingTemplateExpirationIntervalEnum["Hours"] = "hours";
    CreateHtmlTemplatePendingTemplateExpirationIntervalEnum["Days"] = "days";
})(CreateHtmlTemplatePendingTemplateExpirationIntervalEnum || (CreateHtmlTemplatePendingTemplateExpirationIntervalEnum = {}));
var CreateHtmlTemplatePendingTemplate = /** @class */ (function (_super) {
    __extends(CreateHtmlTemplatePendingTemplate, _super);
    function CreateHtmlTemplatePendingTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_additional_properties" }),
        __metadata("design:type", Boolean)
    ], CreateHtmlTemplatePendingTemplate.prototype, "allowAdditionalProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateHtmlTemplatePendingTemplate.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=editable_submissions" }),
        __metadata("design:type", Boolean)
    ], CreateHtmlTemplatePendingTemplate.prototype, "editableSubmissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiration_interval" }),
        __metadata("design:type", String)
    ], CreateHtmlTemplatePendingTemplate.prototype, "expirationInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expire_after" }),
        __metadata("design:type", Number)
    ], CreateHtmlTemplatePendingTemplate.prototype, "expireAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expire_submissions" }),
        __metadata("design:type", Boolean)
    ], CreateHtmlTemplatePendingTemplate.prototype, "expireSubmissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateHtmlTemplatePendingTemplate.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locked" }),
        __metadata("design:type", Boolean)
    ], CreateHtmlTemplatePendingTemplate.prototype, "locked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateHtmlTemplatePendingTemplate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent_folder_id" }),
        __metadata("design:type", String)
    ], CreateHtmlTemplatePendingTemplate.prototype, "parentFolderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], CreateHtmlTemplatePendingTemplate.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_submissions" }),
        __metadata("design:type", Boolean)
    ], CreateHtmlTemplatePendingTemplate.prototype, "publicSubmissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_web_form" }),
        __metadata("design:type", Boolean)
    ], CreateHtmlTemplatePendingTemplate.prototype, "publicWebForm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirect_url" }),
        __metadata("design:type", String)
    ], CreateHtmlTemplatePendingTemplate.prototype, "redirectUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slack_webhook_url" }),
        __metadata("design:type", String)
    ], CreateHtmlTemplatePendingTemplate.prototype, "slackWebhookUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template_type" }),
        __metadata("design:type", String)
    ], CreateHtmlTemplatePendingTemplate.prototype, "templateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhook_url" }),
        __metadata("design:type", String)
    ], CreateHtmlTemplatePendingTemplate.prototype, "webhookUrl", void 0);
    return CreateHtmlTemplatePendingTemplate;
}(SpeakeasyBase));
export { CreateHtmlTemplatePendingTemplate };
var CreateHtmlTemplateRequest = /** @class */ (function (_super) {
    __extends(CreateHtmlTemplateRequest, _super);
    function CreateHtmlTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateHtmlTemplateCreateHtmlTemplateData)
    ], CreateHtmlTemplateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateHtmlTemplateSecurity)
    ], CreateHtmlTemplateRequest.prototype, "security", void 0);
    return CreateHtmlTemplateRequest;
}(SpeakeasyBase));
export { CreateHtmlTemplateRequest };
var CreateHtmlTemplateResponse = /** @class */ (function (_super) {
    __extends(CreateHtmlTemplateResponse, _super);
    function CreateHtmlTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateHtmlTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateHtmlTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthenticationError)
    ], CreateHtmlTemplateResponse.prototype, "authenticationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateHtmlTemplatePendingTemplate)
    ], CreateHtmlTemplateResponse.prototype, "pendingTemplate", void 0);
    return CreateHtmlTemplateResponse;
}(SpeakeasyBase));
export { CreateHtmlTemplateResponse };
