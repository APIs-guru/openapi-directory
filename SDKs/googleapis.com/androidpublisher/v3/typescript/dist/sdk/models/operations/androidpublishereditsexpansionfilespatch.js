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
export var AndroidpublisherEditsExpansionfilesPatchExpansionFileTypeEnum;
(function (AndroidpublisherEditsExpansionfilesPatchExpansionFileTypeEnum) {
    AndroidpublisherEditsExpansionfilesPatchExpansionFileTypeEnum["ExpansionFileTypeUnspecified"] = "expansionFileTypeUnspecified";
    AndroidpublisherEditsExpansionfilesPatchExpansionFileTypeEnum["Main"] = "main";
    AndroidpublisherEditsExpansionfilesPatchExpansionFileTypeEnum["Patch"] = "patch";
})(AndroidpublisherEditsExpansionfilesPatchExpansionFileTypeEnum || (AndroidpublisherEditsExpansionfilesPatchExpansionFileTypeEnum = {}));
var AndroidpublisherEditsExpansionfilesPatchPathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsExpansionfilesPatchPathParams, _super);
    function AndroidpublisherEditsExpansionfilesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apkVersionCode" }),
        __metadata("design:type", Number)
    ], AndroidpublisherEditsExpansionfilesPatchPathParams.prototype, "apkVersionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=editId" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesPatchPathParams.prototype, "editId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=expansionFileType" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesPatchPathParams.prototype, "expansionFileType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesPatchPathParams.prototype, "packageName", void 0);
    return AndroidpublisherEditsExpansionfilesPatchPathParams;
}(SpeakeasyBase));
export { AndroidpublisherEditsExpansionfilesPatchPathParams };
var AndroidpublisherEditsExpansionfilesPatchQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsExpansionfilesPatchQueryParams, _super);
    function AndroidpublisherEditsExpansionfilesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherEditsExpansionfilesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidpublisherEditsExpansionfilesPatchQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherEditsExpansionfilesPatchQueryParams };
var AndroidpublisherEditsExpansionfilesPatchSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsExpansionfilesPatchSecurity, _super);
    function AndroidpublisherEditsExpansionfilesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherEditsExpansionfilesPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherEditsExpansionfilesPatchSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherEditsExpansionfilesPatchSecurity;
}(SpeakeasyBase));
export { AndroidpublisherEditsExpansionfilesPatchSecurity };
var AndroidpublisherEditsExpansionfilesPatchRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsExpansionfilesPatchRequest, _super);
    function AndroidpublisherEditsExpansionfilesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsExpansionfilesPatchPathParams)
    ], AndroidpublisherEditsExpansionfilesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsExpansionfilesPatchQueryParams)
    ], AndroidpublisherEditsExpansionfilesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ExpansionFile)
    ], AndroidpublisherEditsExpansionfilesPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsExpansionfilesPatchSecurity)
    ], AndroidpublisherEditsExpansionfilesPatchRequest.prototype, "security", void 0);
    return AndroidpublisherEditsExpansionfilesPatchRequest;
}(SpeakeasyBase));
export { AndroidpublisherEditsExpansionfilesPatchRequest };
var AndroidpublisherEditsExpansionfilesPatchResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsExpansionfilesPatchResponse, _super);
    function AndroidpublisherEditsExpansionfilesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ExpansionFile)
    ], AndroidpublisherEditsExpansionfilesPatchResponse.prototype, "expansionFile", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherEditsExpansionfilesPatchResponse.prototype, "statusCode", void 0);
    return AndroidpublisherEditsExpansionfilesPatchResponse;
}(SpeakeasyBase));
export { AndroidpublisherEditsExpansionfilesPatchResponse };
