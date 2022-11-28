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
var CopyTemplatePathParams = /** @class */ (function (_super) {
    __extends(CopyTemplatePathParams, _super);
    function CopyTemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template_id" }),
        __metadata("design:type", String)
    ], CopyTemplatePathParams.prototype, "templateId", void 0);
    return CopyTemplatePathParams;
}(SpeakeasyBase));
export { CopyTemplatePathParams };
var CopyTemplateCopyTemplateData = /** @class */ (function (_super) {
    __extends(CopyTemplateCopyTemplateData, _super);
    function CopyTemplateCopyTemplateData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CopyTemplateCopyTemplateData.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent_folder_id" }),
        __metadata("design:type", String)
    ], CopyTemplateCopyTemplateData.prototype, "parentFolderId", void 0);
    return CopyTemplateCopyTemplateData;
}(SpeakeasyBase));
export { CopyTemplateCopyTemplateData };
var CopyTemplateSecurity = /** @class */ (function (_super) {
    __extends(CopyTemplateSecurity, _super);
    function CopyTemplateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiTokenBasic)
    ], CopyTemplateSecurity.prototype, "apiTokenBasic", void 0);
    return CopyTemplateSecurity;
}(SpeakeasyBase));
export { CopyTemplateSecurity };
export var CopyTemplateTemplateExpirationIntervalEnum;
(function (CopyTemplateTemplateExpirationIntervalEnum) {
    CopyTemplateTemplateExpirationIntervalEnum["Minutes"] = "minutes";
    CopyTemplateTemplateExpirationIntervalEnum["Hours"] = "hours";
    CopyTemplateTemplateExpirationIntervalEnum["Days"] = "days";
})(CopyTemplateTemplateExpirationIntervalEnum || (CopyTemplateTemplateExpirationIntervalEnum = {}));
var CopyTemplateTemplate = /** @class */ (function (_super) {
    __extends(CopyTemplateTemplate, _super);
    function CopyTemplateTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_additional_properties" }),
        __metadata("design:type", Boolean)
    ], CopyTemplateTemplate.prototype, "allowAdditionalProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CopyTemplateTemplate.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document_url" }),
        __metadata("design:type", String)
    ], CopyTemplateTemplate.prototype, "documentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=editable_submissions" }),
        __metadata("design:type", Boolean)
    ], CopyTemplateTemplate.prototype, "editableSubmissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiration_interval" }),
        __metadata("design:type", String)
    ], CopyTemplateTemplate.prototype, "expirationInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expire_after" }),
        __metadata("design:type", Number)
    ], CopyTemplateTemplate.prototype, "expireAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expire_submissions" }),
        __metadata("design:type", Boolean)
    ], CopyTemplateTemplate.prototype, "expireSubmissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CopyTemplateTemplate.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locked" }),
        __metadata("design:type", Boolean)
    ], CopyTemplateTemplate.prototype, "locked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CopyTemplateTemplate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_dimensions" }),
        __metadata("design:type", Array)
    ], CopyTemplateTemplate.prototype, "pageDimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent_folder_id" }),
        __metadata("design:type", String)
    ], CopyTemplateTemplate.prototype, "parentFolderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], CopyTemplateTemplate.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permanent_document_url" }),
        __metadata("design:type", String)
    ], CopyTemplateTemplate.prototype, "permanentDocumentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_submissions" }),
        __metadata("design:type", Boolean)
    ], CopyTemplateTemplate.prototype, "publicSubmissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_web_form" }),
        __metadata("design:type", Boolean)
    ], CopyTemplateTemplate.prototype, "publicWebForm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirect_url" }),
        __metadata("design:type", String)
    ], CopyTemplateTemplate.prototype, "redirectUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slack_webhook_url" }),
        __metadata("design:type", String)
    ], CopyTemplateTemplate.prototype, "slackWebhookUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template_type" }),
        __metadata("design:type", String)
    ], CopyTemplateTemplate.prototype, "templateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhook_url" }),
        __metadata("design:type", String)
    ], CopyTemplateTemplate.prototype, "webhookUrl", void 0);
    return CopyTemplateTemplate;
}(SpeakeasyBase));
export { CopyTemplateTemplate };
var CopyTemplateRequest = /** @class */ (function (_super) {
    __extends(CopyTemplateRequest, _super);
    function CopyTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CopyTemplatePathParams)
    ], CopyTemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CopyTemplateCopyTemplateData)
    ], CopyTemplateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CopyTemplateSecurity)
    ], CopyTemplateRequest.prototype, "security", void 0);
    return CopyTemplateRequest;
}(SpeakeasyBase));
export { CopyTemplateRequest };
var CopyTemplateResponse = /** @class */ (function (_super) {
    __extends(CopyTemplateResponse, _super);
    function CopyTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CopyTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CopyTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], CopyTemplateResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CopyTemplateTemplate)
    ], CopyTemplateResponse.prototype, "template", void 0);
    return CopyTemplateResponse;
}(SpeakeasyBase));
export { CopyTemplateResponse };
