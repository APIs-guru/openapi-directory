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
var AndroidmanagementEnterprisesWebAppsPatchPathParams = /** @class */ (function (_super) {
    __extends(AndroidmanagementEnterprisesWebAppsPatchPathParams, _super);
    function AndroidmanagementEnterprisesWebAppsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsPatchPathParams.prototype, "name", void 0);
    return AndroidmanagementEnterprisesWebAppsPatchPathParams;
}(SpeakeasyBase));
export { AndroidmanagementEnterprisesWebAppsPatchPathParams };
var AndroidmanagementEnterprisesWebAppsPatchQueryParams = /** @class */ (function (_super) {
    __extends(AndroidmanagementEnterprisesWebAppsPatchQueryParams, _super);
    function AndroidmanagementEnterprisesWebAppsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidmanagementEnterprisesWebAppsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidmanagementEnterprisesWebAppsPatchQueryParams;
}(SpeakeasyBase));
export { AndroidmanagementEnterprisesWebAppsPatchQueryParams };
var AndroidmanagementEnterprisesWebAppsPatchSecurity = /** @class */ (function (_super) {
    __extends(AndroidmanagementEnterprisesWebAppsPatchSecurity, _super);
    function AndroidmanagementEnterprisesWebAppsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidmanagementEnterprisesWebAppsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidmanagementEnterprisesWebAppsPatchSecurity.prototype, "oauth2c", void 0);
    return AndroidmanagementEnterprisesWebAppsPatchSecurity;
}(SpeakeasyBase));
export { AndroidmanagementEnterprisesWebAppsPatchSecurity };
var AndroidmanagementEnterprisesWebAppsPatchRequest = /** @class */ (function (_super) {
    __extends(AndroidmanagementEnterprisesWebAppsPatchRequest, _super);
    function AndroidmanagementEnterprisesWebAppsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidmanagementEnterprisesWebAppsPatchPathParams)
    ], AndroidmanagementEnterprisesWebAppsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidmanagementEnterprisesWebAppsPatchQueryParams)
    ], AndroidmanagementEnterprisesWebAppsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.WebApp)
    ], AndroidmanagementEnterprisesWebAppsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidmanagementEnterprisesWebAppsPatchSecurity)
    ], AndroidmanagementEnterprisesWebAppsPatchRequest.prototype, "security", void 0);
    return AndroidmanagementEnterprisesWebAppsPatchRequest;
}(SpeakeasyBase));
export { AndroidmanagementEnterprisesWebAppsPatchRequest };
var AndroidmanagementEnterprisesWebAppsPatchResponse = /** @class */ (function (_super) {
    __extends(AndroidmanagementEnterprisesWebAppsPatchResponse, _super);
    function AndroidmanagementEnterprisesWebAppsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidmanagementEnterprisesWebAppsPatchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.WebApp)
    ], AndroidmanagementEnterprisesWebAppsPatchResponse.prototype, "webApp", void 0);
    return AndroidmanagementEnterprisesWebAppsPatchResponse;
}(SpeakeasyBase));
export { AndroidmanagementEnterprisesWebAppsPatchResponse };
