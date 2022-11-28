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
export var CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadataMimeTypeEnum;
(function (CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadataMimeTypeEnum) {
    CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadataMimeTypeEnum["ApplicationPdf"] = "application/pdf";
})(CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadataMimeTypeEnum || (CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadataMimeTypeEnum = {}));
var CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadata = /** @class */ (function (_super) {
    __extends(CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadata, _super);
    function CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filename" }),
        __metadata("design:type", String)
    ], CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadata.prototype, "filename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mime_type" }),
        __metadata("design:type", String)
    ], CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadata.prototype, "mimeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadata.prototype, "size", void 0);
    return CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadata;
}(SpeakeasyBase));
export { CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadata };
export var CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentStorageEnum;
(function (CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentStorageEnum) {
    CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentStorageEnum["Cache"] = "cache";
})(CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentStorageEnum || (CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentStorageEnum = {}));
var CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocument = /** @class */ (function (_super) {
    __extends(CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocument, _super);
    function CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocument() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocument.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadata)
    ], CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocument.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storage" }),
        __metadata("design:type", String)
    ], CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocument.prototype, "storage", void 0);
    return CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocument;
}(SpeakeasyBase));
export { CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocument };
export var CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataExpirationIntervalEnum;
(function (CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataExpirationIntervalEnum) {
    CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataExpirationIntervalEnum["Minutes"] = "minutes";
    CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataExpirationIntervalEnum["Hours"] = "hours";
    CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataExpirationIntervalEnum["Days"] = "days";
})(CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataExpirationIntervalEnum || (CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataExpirationIntervalEnum = {}));
export var CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataTemplateTypeEnum;
(function (CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataTemplateTypeEnum) {
    CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataTemplateTypeEnum["Pdf"] = "pdf";
    CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataTemplateTypeEnum["Html"] = "html";
})(CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataTemplateTypeEnum || (CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataTemplateTypeEnum = {}));
var CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData = /** @class */ (function (_super) {
    __extends(CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData, _super);
    function CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_additional_properties" }),
        __metadata("design:type", Boolean)
    ], CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData.prototype, "allowAdditionalProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document" }),
        __metadata("design:type", CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocument)
    ], CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData.prototype, "document", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=editable_submissions" }),
        __metadata("design:type", Boolean)
    ], CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData.prototype, "editableSubmissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiration_interval" }),
        __metadata("design:type", String)
    ], CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData.prototype, "expirationInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expire_after" }),
        __metadata("design:type", Number)
    ], CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData.prototype, "expireAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expire_submissions" }),
        __metadata("design:type", Boolean)
    ], CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData.prototype, "expireSubmissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=footer_html" }),
        __metadata("design:type", String)
    ], CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData.prototype, "footerHtml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=header_html" }),
        __metadata("design:type", String)
    ], CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData.prototype, "headerHtml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html" }),
        __metadata("design:type", String)
    ], CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData.prototype, "html", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_submissions" }),
        __metadata("design:type", Boolean)
    ], CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData.prototype, "publicSubmissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_web_form" }),
        __metadata("design:type", Boolean)
    ], CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData.prototype, "publicWebForm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirect_url" }),
        __metadata("design:type", String)
    ], CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData.prototype, "redirectUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scss" }),
        __metadata("design:type", String)
    ], CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData.prototype, "scss", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slack_webhook_url" }),
        __metadata("design:type", String)
    ], CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData.prototype, "slackWebhookUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template_type" }),
        __metadata("design:type", String)
    ], CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData.prototype, "templateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhook_url" }),
        __metadata("design:type", String)
    ], CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData.prototype, "webhookUrl", void 0);
    return CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData;
}(SpeakeasyBase));
export { CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData };
var CreatePdfTemplateFromUploadCreateTemplateFromUploadData = /** @class */ (function (_super) {
    __extends(CreatePdfTemplateFromUploadCreateTemplateFromUploadData, _super);
    function CreatePdfTemplateFromUploadCreateTemplateFromUploadData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template" }),
        __metadata("design:type", CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData)
    ], CreatePdfTemplateFromUploadCreateTemplateFromUploadData.prototype, "template", void 0);
    return CreatePdfTemplateFromUploadCreateTemplateFromUploadData;
}(SpeakeasyBase));
export { CreatePdfTemplateFromUploadCreateTemplateFromUploadData };
var CreatePdfTemplateFromUploadSecurity = /** @class */ (function (_super) {
    __extends(CreatePdfTemplateFromUploadSecurity, _super);
    function CreatePdfTemplateFromUploadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiTokenBasic)
    ], CreatePdfTemplateFromUploadSecurity.prototype, "apiTokenBasic", void 0);
    return CreatePdfTemplateFromUploadSecurity;
}(SpeakeasyBase));
export { CreatePdfTemplateFromUploadSecurity };
export var CreatePdfTemplateFromUploadPendingTemplateExpirationIntervalEnum;
(function (CreatePdfTemplateFromUploadPendingTemplateExpirationIntervalEnum) {
    CreatePdfTemplateFromUploadPendingTemplateExpirationIntervalEnum["Minutes"] = "minutes";
    CreatePdfTemplateFromUploadPendingTemplateExpirationIntervalEnum["Hours"] = "hours";
    CreatePdfTemplateFromUploadPendingTemplateExpirationIntervalEnum["Days"] = "days";
})(CreatePdfTemplateFromUploadPendingTemplateExpirationIntervalEnum || (CreatePdfTemplateFromUploadPendingTemplateExpirationIntervalEnum = {}));
var CreatePdfTemplateFromUploadPendingTemplate = /** @class */ (function (_super) {
    __extends(CreatePdfTemplateFromUploadPendingTemplate, _super);
    function CreatePdfTemplateFromUploadPendingTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_additional_properties" }),
        __metadata("design:type", Boolean)
    ], CreatePdfTemplateFromUploadPendingTemplate.prototype, "allowAdditionalProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreatePdfTemplateFromUploadPendingTemplate.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=editable_submissions" }),
        __metadata("design:type", Boolean)
    ], CreatePdfTemplateFromUploadPendingTemplate.prototype, "editableSubmissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiration_interval" }),
        __metadata("design:type", String)
    ], CreatePdfTemplateFromUploadPendingTemplate.prototype, "expirationInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expire_after" }),
        __metadata("design:type", Number)
    ], CreatePdfTemplateFromUploadPendingTemplate.prototype, "expireAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expire_submissions" }),
        __metadata("design:type", Boolean)
    ], CreatePdfTemplateFromUploadPendingTemplate.prototype, "expireSubmissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreatePdfTemplateFromUploadPendingTemplate.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locked" }),
        __metadata("design:type", Boolean)
    ], CreatePdfTemplateFromUploadPendingTemplate.prototype, "locked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreatePdfTemplateFromUploadPendingTemplate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent_folder_id" }),
        __metadata("design:type", String)
    ], CreatePdfTemplateFromUploadPendingTemplate.prototype, "parentFolderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], CreatePdfTemplateFromUploadPendingTemplate.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_submissions" }),
        __metadata("design:type", Boolean)
    ], CreatePdfTemplateFromUploadPendingTemplate.prototype, "publicSubmissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_web_form" }),
        __metadata("design:type", Boolean)
    ], CreatePdfTemplateFromUploadPendingTemplate.prototype, "publicWebForm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirect_url" }),
        __metadata("design:type", String)
    ], CreatePdfTemplateFromUploadPendingTemplate.prototype, "redirectUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slack_webhook_url" }),
        __metadata("design:type", String)
    ], CreatePdfTemplateFromUploadPendingTemplate.prototype, "slackWebhookUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template_type" }),
        __metadata("design:type", String)
    ], CreatePdfTemplateFromUploadPendingTemplate.prototype, "templateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhook_url" }),
        __metadata("design:type", String)
    ], CreatePdfTemplateFromUploadPendingTemplate.prototype, "webhookUrl", void 0);
    return CreatePdfTemplateFromUploadPendingTemplate;
}(SpeakeasyBase));
export { CreatePdfTemplateFromUploadPendingTemplate };
var CreatePdfTemplateFromUploadRequest = /** @class */ (function (_super) {
    __extends(CreatePdfTemplateFromUploadRequest, _super);
    function CreatePdfTemplateFromUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreatePdfTemplateFromUploadCreateTemplateFromUploadData)
    ], CreatePdfTemplateFromUploadRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePdfTemplateFromUploadSecurity)
    ], CreatePdfTemplateFromUploadRequest.prototype, "security", void 0);
    return CreatePdfTemplateFromUploadRequest;
}(SpeakeasyBase));
export { CreatePdfTemplateFromUploadRequest };
var CreatePdfTemplateFromUploadResponse = /** @class */ (function (_super) {
    __extends(CreatePdfTemplateFromUploadResponse, _super);
    function CreatePdfTemplateFromUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatePdfTemplateFromUploadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatePdfTemplateFromUploadResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthenticationError)
    ], CreatePdfTemplateFromUploadResponse.prototype, "authenticationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePdfTemplateFromUploadPendingTemplate)
    ], CreatePdfTemplateFromUploadResponse.prototype, "pendingTemplate", void 0);
    return CreatePdfTemplateFromUploadResponse;
}(SpeakeasyBase));
export { CreatePdfTemplateFromUploadResponse };
