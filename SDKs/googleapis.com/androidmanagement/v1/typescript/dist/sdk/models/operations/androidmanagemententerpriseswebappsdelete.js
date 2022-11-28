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
var AndroidmanagementEnterprisesWebAppsDeletePathParams = /** @class */ (function (_super) {
    __extends(AndroidmanagementEnterprisesWebAppsDeletePathParams, _super);
    function AndroidmanagementEnterprisesWebAppsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsDeletePathParams.prototype, "name", void 0);
    return AndroidmanagementEnterprisesWebAppsDeletePathParams;
}(SpeakeasyBase));
export { AndroidmanagementEnterprisesWebAppsDeletePathParams };
export var AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnum;
(function (AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnum) {
    AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnum["WipeDataFlagUnspecified"] = "WIPE_DATA_FLAG_UNSPECIFIED";
    AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnum["PreserveResetProtectionData"] = "PRESERVE_RESET_PROTECTION_DATA";
    AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnum["WipeExternalStorage"] = "WIPE_EXTERNAL_STORAGE";
})(AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnum || (AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnum = {}));
var AndroidmanagementEnterprisesWebAppsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AndroidmanagementEnterprisesWebAppsDeleteQueryParams, _super);
    function AndroidmanagementEnterprisesWebAppsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidmanagementEnterprisesWebAppsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=wipeDataFlags" }),
        __metadata("design:type", Array)
    ], AndroidmanagementEnterprisesWebAppsDeleteQueryParams.prototype, "wipeDataFlags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=wipeReasonMessage" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsDeleteQueryParams.prototype, "wipeReasonMessage", void 0);
    return AndroidmanagementEnterprisesWebAppsDeleteQueryParams;
}(SpeakeasyBase));
export { AndroidmanagementEnterprisesWebAppsDeleteQueryParams };
var AndroidmanagementEnterprisesWebAppsDeleteSecurity = /** @class */ (function (_super) {
    __extends(AndroidmanagementEnterprisesWebAppsDeleteSecurity, _super);
    function AndroidmanagementEnterprisesWebAppsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidmanagementEnterprisesWebAppsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidmanagementEnterprisesWebAppsDeleteSecurity.prototype, "oauth2c", void 0);
    return AndroidmanagementEnterprisesWebAppsDeleteSecurity;
}(SpeakeasyBase));
export { AndroidmanagementEnterprisesWebAppsDeleteSecurity };
var AndroidmanagementEnterprisesWebAppsDeleteRequest = /** @class */ (function (_super) {
    __extends(AndroidmanagementEnterprisesWebAppsDeleteRequest, _super);
    function AndroidmanagementEnterprisesWebAppsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidmanagementEnterprisesWebAppsDeletePathParams)
    ], AndroidmanagementEnterprisesWebAppsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidmanagementEnterprisesWebAppsDeleteQueryParams)
    ], AndroidmanagementEnterprisesWebAppsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidmanagementEnterprisesWebAppsDeleteSecurity)
    ], AndroidmanagementEnterprisesWebAppsDeleteRequest.prototype, "security", void 0);
    return AndroidmanagementEnterprisesWebAppsDeleteRequest;
}(SpeakeasyBase));
export { AndroidmanagementEnterprisesWebAppsDeleteRequest };
var AndroidmanagementEnterprisesWebAppsDeleteResponse = /** @class */ (function (_super) {
    __extends(AndroidmanagementEnterprisesWebAppsDeleteResponse, _super);
    function AndroidmanagementEnterprisesWebAppsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], AndroidmanagementEnterprisesWebAppsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidmanagementEnterprisesWebAppsDeleteResponse.prototype, "statusCode", void 0);
    return AndroidmanagementEnterprisesWebAppsDeleteResponse;
}(SpeakeasyBase));
export { AndroidmanagementEnterprisesWebAppsDeleteResponse };
