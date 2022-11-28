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
var ListTemplatesQueryParams = /** @class */ (function (_super) {
    __extends(ListTemplatesQueryParams, _super);
    function ListTemplatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListTemplatesQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parent_folder_id" }),
        __metadata("design:type", String)
    ], ListTemplatesQueryParams.prototype, "parentFolderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ListTemplatesQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], ListTemplatesQueryParams.prototype, "query", void 0);
    return ListTemplatesQueryParams;
}(SpeakeasyBase));
export { ListTemplatesQueryParams };
var ListTemplatesSecurity = /** @class */ (function (_super) {
    __extends(ListTemplatesSecurity, _super);
    function ListTemplatesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiTokenBasic)
    ], ListTemplatesSecurity.prototype, "apiTokenBasic", void 0);
    return ListTemplatesSecurity;
}(SpeakeasyBase));
export { ListTemplatesSecurity };
export var ListTemplatesTemplateExpirationIntervalEnum;
(function (ListTemplatesTemplateExpirationIntervalEnum) {
    ListTemplatesTemplateExpirationIntervalEnum["Minutes"] = "minutes";
    ListTemplatesTemplateExpirationIntervalEnum["Hours"] = "hours";
    ListTemplatesTemplateExpirationIntervalEnum["Days"] = "days";
})(ListTemplatesTemplateExpirationIntervalEnum || (ListTemplatesTemplateExpirationIntervalEnum = {}));
var ListTemplatesTemplate = /** @class */ (function (_super) {
    __extends(ListTemplatesTemplate, _super);
    function ListTemplatesTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_additional_properties" }),
        __metadata("design:type", Boolean)
    ], ListTemplatesTemplate.prototype, "allowAdditionalProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ListTemplatesTemplate.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document_url" }),
        __metadata("design:type", String)
    ], ListTemplatesTemplate.prototype, "documentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=editable_submissions" }),
        __metadata("design:type", Boolean)
    ], ListTemplatesTemplate.prototype, "editableSubmissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiration_interval" }),
        __metadata("design:type", String)
    ], ListTemplatesTemplate.prototype, "expirationInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expire_after" }),
        __metadata("design:type", Number)
    ], ListTemplatesTemplate.prototype, "expireAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expire_submissions" }),
        __metadata("design:type", Boolean)
    ], ListTemplatesTemplate.prototype, "expireSubmissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListTemplatesTemplate.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locked" }),
        __metadata("design:type", Boolean)
    ], ListTemplatesTemplate.prototype, "locked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListTemplatesTemplate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_dimensions" }),
        __metadata("design:type", Array)
    ], ListTemplatesTemplate.prototype, "pageDimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent_folder_id" }),
        __metadata("design:type", String)
    ], ListTemplatesTemplate.prototype, "parentFolderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], ListTemplatesTemplate.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permanent_document_url" }),
        __metadata("design:type", String)
    ], ListTemplatesTemplate.prototype, "permanentDocumentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_submissions" }),
        __metadata("design:type", Boolean)
    ], ListTemplatesTemplate.prototype, "publicSubmissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_web_form" }),
        __metadata("design:type", Boolean)
    ], ListTemplatesTemplate.prototype, "publicWebForm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirect_url" }),
        __metadata("design:type", String)
    ], ListTemplatesTemplate.prototype, "redirectUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slack_webhook_url" }),
        __metadata("design:type", String)
    ], ListTemplatesTemplate.prototype, "slackWebhookUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template_type" }),
        __metadata("design:type", String)
    ], ListTemplatesTemplate.prototype, "templateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhook_url" }),
        __metadata("design:type", String)
    ], ListTemplatesTemplate.prototype, "webhookUrl", void 0);
    return ListTemplatesTemplate;
}(SpeakeasyBase));
export { ListTemplatesTemplate };
var ListTemplatesRequest = /** @class */ (function (_super) {
    __extends(ListTemplatesRequest, _super);
    function ListTemplatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTemplatesQueryParams)
    ], ListTemplatesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTemplatesSecurity)
    ], ListTemplatesRequest.prototype, "security", void 0);
    return ListTemplatesRequest;
}(SpeakeasyBase));
export { ListTemplatesRequest };
var ListTemplatesResponse = /** @class */ (function (_super) {
    __extends(ListTemplatesResponse, _super);
    function ListTemplatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListTemplatesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListTemplatesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthenticationError)
    ], ListTemplatesResponse.prototype, "authenticationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], ListTemplatesResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ListTemplatesTemplate }),
        __metadata("design:type", Array)
    ], ListTemplatesResponse.prototype, "templates", void 0);
    return ListTemplatesResponse;
}(SpeakeasyBase));
export { ListTemplatesResponse };
