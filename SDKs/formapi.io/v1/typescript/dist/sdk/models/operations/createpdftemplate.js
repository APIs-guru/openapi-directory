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
var CreatePdfTemplateRequestBodyTemplateDocument = /** @class */ (function (_super) {
    __extends(CreatePdfTemplateRequestBodyTemplateDocument, _super);
    function CreatePdfTemplateRequestBodyTemplateDocument() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], CreatePdfTemplateRequestBodyTemplateDocument.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=template[document]" }),
        __metadata("design:type", String)
    ], CreatePdfTemplateRequestBodyTemplateDocument.prototype, "templateDocument", void 0);
    return CreatePdfTemplateRequestBodyTemplateDocument;
}(SpeakeasyBase));
export { CreatePdfTemplateRequestBodyTemplateDocument };
var CreatePdfTemplateRequestBody = /** @class */ (function (_super) {
    __extends(CreatePdfTemplateRequestBody, _super);
    function CreatePdfTemplateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", CreatePdfTemplateRequestBodyTemplateDocument)
    ], CreatePdfTemplateRequestBody.prototype, "templateDocument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=template[name]" }),
        __metadata("design:type", String)
    ], CreatePdfTemplateRequestBody.prototype, "templateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=template[parent_folder_id]" }),
        __metadata("design:type", String)
    ], CreatePdfTemplateRequestBody.prototype, "templateParentFolderId", void 0);
    return CreatePdfTemplateRequestBody;
}(SpeakeasyBase));
export { CreatePdfTemplateRequestBody };
var CreatePdfTemplateSecurity = /** @class */ (function (_super) {
    __extends(CreatePdfTemplateSecurity, _super);
    function CreatePdfTemplateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiTokenBasic)
    ], CreatePdfTemplateSecurity.prototype, "apiTokenBasic", void 0);
    return CreatePdfTemplateSecurity;
}(SpeakeasyBase));
export { CreatePdfTemplateSecurity };
export var CreatePdfTemplatePendingTemplateExpirationIntervalEnum;
(function (CreatePdfTemplatePendingTemplateExpirationIntervalEnum) {
    CreatePdfTemplatePendingTemplateExpirationIntervalEnum["Minutes"] = "minutes";
    CreatePdfTemplatePendingTemplateExpirationIntervalEnum["Hours"] = "hours";
    CreatePdfTemplatePendingTemplateExpirationIntervalEnum["Days"] = "days";
})(CreatePdfTemplatePendingTemplateExpirationIntervalEnum || (CreatePdfTemplatePendingTemplateExpirationIntervalEnum = {}));
var CreatePdfTemplatePendingTemplate = /** @class */ (function (_super) {
    __extends(CreatePdfTemplatePendingTemplate, _super);
    function CreatePdfTemplatePendingTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_additional_properties" }),
        __metadata("design:type", Boolean)
    ], CreatePdfTemplatePendingTemplate.prototype, "allowAdditionalProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreatePdfTemplatePendingTemplate.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=editable_submissions" }),
        __metadata("design:type", Boolean)
    ], CreatePdfTemplatePendingTemplate.prototype, "editableSubmissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiration_interval" }),
        __metadata("design:type", String)
    ], CreatePdfTemplatePendingTemplate.prototype, "expirationInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expire_after" }),
        __metadata("design:type", Number)
    ], CreatePdfTemplatePendingTemplate.prototype, "expireAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expire_submissions" }),
        __metadata("design:type", Boolean)
    ], CreatePdfTemplatePendingTemplate.prototype, "expireSubmissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreatePdfTemplatePendingTemplate.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locked" }),
        __metadata("design:type", Boolean)
    ], CreatePdfTemplatePendingTemplate.prototype, "locked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreatePdfTemplatePendingTemplate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent_folder_id" }),
        __metadata("design:type", String)
    ], CreatePdfTemplatePendingTemplate.prototype, "parentFolderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], CreatePdfTemplatePendingTemplate.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_submissions" }),
        __metadata("design:type", Boolean)
    ], CreatePdfTemplatePendingTemplate.prototype, "publicSubmissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_web_form" }),
        __metadata("design:type", Boolean)
    ], CreatePdfTemplatePendingTemplate.prototype, "publicWebForm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirect_url" }),
        __metadata("design:type", String)
    ], CreatePdfTemplatePendingTemplate.prototype, "redirectUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slack_webhook_url" }),
        __metadata("design:type", String)
    ], CreatePdfTemplatePendingTemplate.prototype, "slackWebhookUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template_type" }),
        __metadata("design:type", String)
    ], CreatePdfTemplatePendingTemplate.prototype, "templateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhook_url" }),
        __metadata("design:type", String)
    ], CreatePdfTemplatePendingTemplate.prototype, "webhookUrl", void 0);
    return CreatePdfTemplatePendingTemplate;
}(SpeakeasyBase));
export { CreatePdfTemplatePendingTemplate };
var CreatePdfTemplateRequest = /** @class */ (function (_super) {
    __extends(CreatePdfTemplateRequest, _super);
    function CreatePdfTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", CreatePdfTemplateRequestBody)
    ], CreatePdfTemplateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePdfTemplateSecurity)
    ], CreatePdfTemplateRequest.prototype, "security", void 0);
    return CreatePdfTemplateRequest;
}(SpeakeasyBase));
export { CreatePdfTemplateRequest };
var CreatePdfTemplateResponse = /** @class */ (function (_super) {
    __extends(CreatePdfTemplateResponse, _super);
    function CreatePdfTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatePdfTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatePdfTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthenticationError)
    ], CreatePdfTemplateResponse.prototype, "authenticationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePdfTemplatePendingTemplate)
    ], CreatePdfTemplateResponse.prototype, "pendingTemplate", void 0);
    return CreatePdfTemplateResponse;
}(SpeakeasyBase));
export { CreatePdfTemplateResponse };
