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
export var AndroidpublisherEditsExpansionfilesGetExpansionFileTypeEnum;
(function (AndroidpublisherEditsExpansionfilesGetExpansionFileTypeEnum) {
    AndroidpublisherEditsExpansionfilesGetExpansionFileTypeEnum["ExpansionFileTypeUnspecified"] = "expansionFileTypeUnspecified";
    AndroidpublisherEditsExpansionfilesGetExpansionFileTypeEnum["Main"] = "main";
    AndroidpublisherEditsExpansionfilesGetExpansionFileTypeEnum["Patch"] = "patch";
})(AndroidpublisherEditsExpansionfilesGetExpansionFileTypeEnum || (AndroidpublisherEditsExpansionfilesGetExpansionFileTypeEnum = {}));
var AndroidpublisherEditsExpansionfilesGetPathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsExpansionfilesGetPathParams, _super);
    function AndroidpublisherEditsExpansionfilesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apkVersionCode" }),
        __metadata("design:type", Number)
    ], AndroidpublisherEditsExpansionfilesGetPathParams.prototype, "apkVersionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=editId" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesGetPathParams.prototype, "editId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=expansionFileType" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesGetPathParams.prototype, "expansionFileType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesGetPathParams.prototype, "packageName", void 0);
    return AndroidpublisherEditsExpansionfilesGetPathParams;
}(SpeakeasyBase));
export { AndroidpublisherEditsExpansionfilesGetPathParams };
var AndroidpublisherEditsExpansionfilesGetQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsExpansionfilesGetQueryParams, _super);
    function AndroidpublisherEditsExpansionfilesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherEditsExpansionfilesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesGetQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidpublisherEditsExpansionfilesGetQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherEditsExpansionfilesGetQueryParams };
var AndroidpublisherEditsExpansionfilesGetSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsExpansionfilesGetSecurity, _super);
    function AndroidpublisherEditsExpansionfilesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherEditsExpansionfilesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherEditsExpansionfilesGetSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherEditsExpansionfilesGetSecurity;
}(SpeakeasyBase));
export { AndroidpublisherEditsExpansionfilesGetSecurity };
var AndroidpublisherEditsExpansionfilesGetRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsExpansionfilesGetRequest, _super);
    function AndroidpublisherEditsExpansionfilesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsExpansionfilesGetPathParams)
    ], AndroidpublisherEditsExpansionfilesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsExpansionfilesGetQueryParams)
    ], AndroidpublisherEditsExpansionfilesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsExpansionfilesGetSecurity)
    ], AndroidpublisherEditsExpansionfilesGetRequest.prototype, "security", void 0);
    return AndroidpublisherEditsExpansionfilesGetRequest;
}(SpeakeasyBase));
export { AndroidpublisherEditsExpansionfilesGetRequest };
var AndroidpublisherEditsExpansionfilesGetResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsExpansionfilesGetResponse, _super);
    function AndroidpublisherEditsExpansionfilesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherEditsExpansionfilesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ExpansionFile)
    ], AndroidpublisherEditsExpansionfilesGetResponse.prototype, "expansionFile", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherEditsExpansionfilesGetResponse.prototype, "statusCode", void 0);
    return AndroidpublisherEditsExpansionfilesGetResponse;
}(SpeakeasyBase));
export { AndroidpublisherEditsExpansionfilesGetResponse };
