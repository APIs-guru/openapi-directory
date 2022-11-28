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
var GetTemplatePathParams = /** @class */ (function (_super) {
    __extends(GetTemplatePathParams, _super);
    function GetTemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template_id" }),
        __metadata("design:type", String)
    ], GetTemplatePathParams.prototype, "templateId", void 0);
    return GetTemplatePathParams;
}(SpeakeasyBase));
export { GetTemplatePathParams };
var GetTemplateSecurity = /** @class */ (function (_super) {
    __extends(GetTemplateSecurity, _super);
    function GetTemplateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiTokenBasic)
    ], GetTemplateSecurity.prototype, "apiTokenBasic", void 0);
    return GetTemplateSecurity;
}(SpeakeasyBase));
export { GetTemplateSecurity };
export var GetTemplateTemplateExpirationIntervalEnum;
(function (GetTemplateTemplateExpirationIntervalEnum) {
    GetTemplateTemplateExpirationIntervalEnum["Minutes"] = "minutes";
    GetTemplateTemplateExpirationIntervalEnum["Hours"] = "hours";
    GetTemplateTemplateExpirationIntervalEnum["Days"] = "days";
})(GetTemplateTemplateExpirationIntervalEnum || (GetTemplateTemplateExpirationIntervalEnum = {}));
var GetTemplateTemplate = /** @class */ (function (_super) {
    __extends(GetTemplateTemplate, _super);
    function GetTemplateTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_additional_properties" }),
        __metadata("design:type", Boolean)
    ], GetTemplateTemplate.prototype, "allowAdditionalProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetTemplateTemplate.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document_url" }),
        __metadata("design:type", String)
    ], GetTemplateTemplate.prototype, "documentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=editable_submissions" }),
        __metadata("design:type", Boolean)
    ], GetTemplateTemplate.prototype, "editableSubmissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiration_interval" }),
        __metadata("design:type", String)
    ], GetTemplateTemplate.prototype, "expirationInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expire_after" }),
        __metadata("design:type", Number)
    ], GetTemplateTemplate.prototype, "expireAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expire_submissions" }),
        __metadata("design:type", Boolean)
    ], GetTemplateTemplate.prototype, "expireSubmissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetTemplateTemplate.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locked" }),
        __metadata("design:type", Boolean)
    ], GetTemplateTemplate.prototype, "locked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetTemplateTemplate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_dimensions" }),
        __metadata("design:type", Array)
    ], GetTemplateTemplate.prototype, "pageDimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent_folder_id" }),
        __metadata("design:type", String)
    ], GetTemplateTemplate.prototype, "parentFolderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], GetTemplateTemplate.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permanent_document_url" }),
        __metadata("design:type", String)
    ], GetTemplateTemplate.prototype, "permanentDocumentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_submissions" }),
        __metadata("design:type", Boolean)
    ], GetTemplateTemplate.prototype, "publicSubmissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_web_form" }),
        __metadata("design:type", Boolean)
    ], GetTemplateTemplate.prototype, "publicWebForm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirect_url" }),
        __metadata("design:type", String)
    ], GetTemplateTemplate.prototype, "redirectUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slack_webhook_url" }),
        __metadata("design:type", String)
    ], GetTemplateTemplate.prototype, "slackWebhookUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template_type" }),
        __metadata("design:type", String)
    ], GetTemplateTemplate.prototype, "templateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhook_url" }),
        __metadata("design:type", String)
    ], GetTemplateTemplate.prototype, "webhookUrl", void 0);
    return GetTemplateTemplate;
}(SpeakeasyBase));
export { GetTemplateTemplate };
var GetTemplateRequest = /** @class */ (function (_super) {
    __extends(GetTemplateRequest, _super);
    function GetTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTemplatePathParams)
    ], GetTemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTemplateSecurity)
    ], GetTemplateRequest.prototype, "security", void 0);
    return GetTemplateRequest;
}(SpeakeasyBase));
export { GetTemplateRequest };
var GetTemplateResponse = /** @class */ (function (_super) {
    __extends(GetTemplateResponse, _super);
    function GetTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthenticationError)
    ], GetTemplateResponse.prototype, "authenticationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetTemplateResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTemplateTemplate)
    ], GetTemplateResponse.prototype, "template", void 0);
    return GetTemplateResponse;
}(SpeakeasyBase));
export { GetTemplateResponse };
