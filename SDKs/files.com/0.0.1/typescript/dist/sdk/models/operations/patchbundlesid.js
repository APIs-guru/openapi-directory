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
var PatchBundlesIdPathParams = /** @class */ (function (_super) {
    __extends(PatchBundlesIdPathParams, _super);
    function PatchBundlesIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PatchBundlesIdPathParams.prototype, "id", void 0);
    return PatchBundlesIdPathParams;
}(SpeakeasyBase));
export { PatchBundlesIdPathParams };
var PatchBundlesIdRequestBody = /** @class */ (function (_super) {
    __extends(PatchBundlesIdRequestBody, _super);
    function PatchBundlesIdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=clickwrap_id" }),
        __metadata("design:type", Number)
    ], PatchBundlesIdRequestBody.prototype, "clickwrapId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=code" }),
        __metadata("design:type", String)
    ], PatchBundlesIdRequestBody.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=description" }),
        __metadata("design:type", String)
    ], PatchBundlesIdRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=expires_at" }),
        __metadata("design:type", Date)
    ], PatchBundlesIdRequestBody.prototype, "expiresAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=form_field_set_id" }),
        __metadata("design:type", Number)
    ], PatchBundlesIdRequestBody.prototype, "formFieldSetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=inbox_id" }),
        __metadata("design:type", Number)
    ], PatchBundlesIdRequestBody.prototype, "inboxId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=max_uses" }),
        __metadata("design:type", Number)
    ], PatchBundlesIdRequestBody.prototype, "maxUses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=note" }),
        __metadata("design:type", String)
    ], PatchBundlesIdRequestBody.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=password" }),
        __metadata("design:type", String)
    ], PatchBundlesIdRequestBody.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=paths" }),
        __metadata("design:type", Array)
    ], PatchBundlesIdRequestBody.prototype, "paths", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=preview_only" }),
        __metadata("design:type", Boolean)
    ], PatchBundlesIdRequestBody.prototype, "previewOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=require_registration" }),
        __metadata("design:type", Boolean)
    ], PatchBundlesIdRequestBody.prototype, "requireRegistration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=require_share_recipient" }),
        __metadata("design:type", Boolean)
    ], PatchBundlesIdRequestBody.prototype, "requireShareRecipient", void 0);
    return PatchBundlesIdRequestBody;
}(SpeakeasyBase));
export { PatchBundlesIdRequestBody };
var PatchBundlesIdRequest = /** @class */ (function (_super) {
    __extends(PatchBundlesIdRequest, _super);
    function PatchBundlesIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchBundlesIdPathParams)
    ], PatchBundlesIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PatchBundlesIdRequestBody)
    ], PatchBundlesIdRequest.prototype, "request", void 0);
    return PatchBundlesIdRequest;
}(SpeakeasyBase));
export { PatchBundlesIdRequest };
var PatchBundlesIdResponse = /** @class */ (function (_super) {
    __extends(PatchBundlesIdResponse, _super);
    function PatchBundlesIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BundleEntity)
    ], PatchBundlesIdResponse.prototype, "bundleEntity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchBundlesIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchBundlesIdResponse.prototype, "statusCode", void 0);
    return PatchBundlesIdResponse;
}(SpeakeasyBase));
export { PatchBundlesIdResponse };
