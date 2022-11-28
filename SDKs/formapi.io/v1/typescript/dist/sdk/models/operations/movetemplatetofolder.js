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
var MoveTemplateToFolderPathParams = /** @class */ (function (_super) {
    __extends(MoveTemplateToFolderPathParams, _super);
    function MoveTemplateToFolderPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template_id" }),
        __metadata("design:type", String)
    ], MoveTemplateToFolderPathParams.prototype, "templateId", void 0);
    return MoveTemplateToFolderPathParams;
}(SpeakeasyBase));
export { MoveTemplateToFolderPathParams };
var MoveTemplateToFolderMoveTemplateData = /** @class */ (function (_super) {
    __extends(MoveTemplateToFolderMoveTemplateData, _super);
    function MoveTemplateToFolderMoveTemplateData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent_folder_id" }),
        __metadata("design:type", String)
    ], MoveTemplateToFolderMoveTemplateData.prototype, "parentFolderId", void 0);
    return MoveTemplateToFolderMoveTemplateData;
}(SpeakeasyBase));
export { MoveTemplateToFolderMoveTemplateData };
var MoveTemplateToFolderSecurity = /** @class */ (function (_super) {
    __extends(MoveTemplateToFolderSecurity, _super);
    function MoveTemplateToFolderSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiTokenBasic)
    ], MoveTemplateToFolderSecurity.prototype, "apiTokenBasic", void 0);
    return MoveTemplateToFolderSecurity;
}(SpeakeasyBase));
export { MoveTemplateToFolderSecurity };
export var MoveTemplateToFolderTemplateExpirationIntervalEnum;
(function (MoveTemplateToFolderTemplateExpirationIntervalEnum) {
    MoveTemplateToFolderTemplateExpirationIntervalEnum["Minutes"] = "minutes";
    MoveTemplateToFolderTemplateExpirationIntervalEnum["Hours"] = "hours";
    MoveTemplateToFolderTemplateExpirationIntervalEnum["Days"] = "days";
})(MoveTemplateToFolderTemplateExpirationIntervalEnum || (MoveTemplateToFolderTemplateExpirationIntervalEnum = {}));
var MoveTemplateToFolderTemplate = /** @class */ (function (_super) {
    __extends(MoveTemplateToFolderTemplate, _super);
    function MoveTemplateToFolderTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_additional_properties" }),
        __metadata("design:type", Boolean)
    ], MoveTemplateToFolderTemplate.prototype, "allowAdditionalProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], MoveTemplateToFolderTemplate.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document_url" }),
        __metadata("design:type", String)
    ], MoveTemplateToFolderTemplate.prototype, "documentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=editable_submissions" }),
        __metadata("design:type", Boolean)
    ], MoveTemplateToFolderTemplate.prototype, "editableSubmissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiration_interval" }),
        __metadata("design:type", String)
    ], MoveTemplateToFolderTemplate.prototype, "expirationInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expire_after" }),
        __metadata("design:type", Number)
    ], MoveTemplateToFolderTemplate.prototype, "expireAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expire_submissions" }),
        __metadata("design:type", Boolean)
    ], MoveTemplateToFolderTemplate.prototype, "expireSubmissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], MoveTemplateToFolderTemplate.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locked" }),
        __metadata("design:type", Boolean)
    ], MoveTemplateToFolderTemplate.prototype, "locked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MoveTemplateToFolderTemplate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_dimensions" }),
        __metadata("design:type", Array)
    ], MoveTemplateToFolderTemplate.prototype, "pageDimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent_folder_id" }),
        __metadata("design:type", String)
    ], MoveTemplateToFolderTemplate.prototype, "parentFolderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], MoveTemplateToFolderTemplate.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permanent_document_url" }),
        __metadata("design:type", String)
    ], MoveTemplateToFolderTemplate.prototype, "permanentDocumentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_submissions" }),
        __metadata("design:type", Boolean)
    ], MoveTemplateToFolderTemplate.prototype, "publicSubmissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_web_form" }),
        __metadata("design:type", Boolean)
    ], MoveTemplateToFolderTemplate.prototype, "publicWebForm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirect_url" }),
        __metadata("design:type", String)
    ], MoveTemplateToFolderTemplate.prototype, "redirectUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slack_webhook_url" }),
        __metadata("design:type", String)
    ], MoveTemplateToFolderTemplate.prototype, "slackWebhookUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template_type" }),
        __metadata("design:type", String)
    ], MoveTemplateToFolderTemplate.prototype, "templateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhook_url" }),
        __metadata("design:type", String)
    ], MoveTemplateToFolderTemplate.prototype, "webhookUrl", void 0);
    return MoveTemplateToFolderTemplate;
}(SpeakeasyBase));
export { MoveTemplateToFolderTemplate };
var MoveTemplateToFolderRequest = /** @class */ (function (_super) {
    __extends(MoveTemplateToFolderRequest, _super);
    function MoveTemplateToFolderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MoveTemplateToFolderPathParams)
    ], MoveTemplateToFolderRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", MoveTemplateToFolderMoveTemplateData)
    ], MoveTemplateToFolderRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MoveTemplateToFolderSecurity)
    ], MoveTemplateToFolderRequest.prototype, "security", void 0);
    return MoveTemplateToFolderRequest;
}(SpeakeasyBase));
export { MoveTemplateToFolderRequest };
var MoveTemplateToFolderResponse = /** @class */ (function (_super) {
    __extends(MoveTemplateToFolderResponse, _super);
    function MoveTemplateToFolderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MoveTemplateToFolderResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MoveTemplateToFolderResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], MoveTemplateToFolderResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MoveTemplateToFolderTemplate)
    ], MoveTemplateToFolderResponse.prototype, "template", void 0);
    return MoveTemplateToFolderResponse;
}(SpeakeasyBase));
export { MoveTemplateToFolderResponse };
