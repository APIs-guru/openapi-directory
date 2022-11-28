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
var AndroidmanagementEnterprisesWebAppsCreatePathParams = /** @class */ (function (_super) {
    __extends(AndroidmanagementEnterprisesWebAppsCreatePathParams, _super);
    function AndroidmanagementEnterprisesWebAppsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsCreatePathParams.prototype, "parent", void 0);
    return AndroidmanagementEnterprisesWebAppsCreatePathParams;
}(SpeakeasyBase));
export { AndroidmanagementEnterprisesWebAppsCreatePathParams };
var AndroidmanagementEnterprisesWebAppsCreateQueryParams = /** @class */ (function (_super) {
    __extends(AndroidmanagementEnterprisesWebAppsCreateQueryParams, _super);
    function AndroidmanagementEnterprisesWebAppsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidmanagementEnterprisesWebAppsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidmanagementEnterprisesWebAppsCreateQueryParams;
}(SpeakeasyBase));
export { AndroidmanagementEnterprisesWebAppsCreateQueryParams };
var AndroidmanagementEnterprisesWebAppsCreateSecurity = /** @class */ (function (_super) {
    __extends(AndroidmanagementEnterprisesWebAppsCreateSecurity, _super);
    function AndroidmanagementEnterprisesWebAppsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidmanagementEnterprisesWebAppsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidmanagementEnterprisesWebAppsCreateSecurity.prototype, "oauth2c", void 0);
    return AndroidmanagementEnterprisesWebAppsCreateSecurity;
}(SpeakeasyBase));
export { AndroidmanagementEnterprisesWebAppsCreateSecurity };
var AndroidmanagementEnterprisesWebAppsCreateRequest = /** @class */ (function (_super) {
    __extends(AndroidmanagementEnterprisesWebAppsCreateRequest, _super);
    function AndroidmanagementEnterprisesWebAppsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidmanagementEnterprisesWebAppsCreatePathParams)
    ], AndroidmanagementEnterprisesWebAppsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidmanagementEnterprisesWebAppsCreateQueryParams)
    ], AndroidmanagementEnterprisesWebAppsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.WebApp)
    ], AndroidmanagementEnterprisesWebAppsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidmanagementEnterprisesWebAppsCreateSecurity)
    ], AndroidmanagementEnterprisesWebAppsCreateRequest.prototype, "security", void 0);
    return AndroidmanagementEnterprisesWebAppsCreateRequest;
}(SpeakeasyBase));
export { AndroidmanagementEnterprisesWebAppsCreateRequest };
var AndroidmanagementEnterprisesWebAppsCreateResponse = /** @class */ (function (_super) {
    __extends(AndroidmanagementEnterprisesWebAppsCreateResponse, _super);
    function AndroidmanagementEnterprisesWebAppsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebAppsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidmanagementEnterprisesWebAppsCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.WebApp)
    ], AndroidmanagementEnterprisesWebAppsCreateResponse.prototype, "webApp", void 0);
    return AndroidmanagementEnterprisesWebAppsCreateResponse;
}(SpeakeasyBase));
export { AndroidmanagementEnterprisesWebAppsCreateResponse };
