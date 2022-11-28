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
var AndroidenterpriseWebappsUpdatePathParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseWebappsUpdatePathParams, _super);
    function AndroidenterpriseWebappsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterpriseId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseWebappsUpdatePathParams.prototype, "enterpriseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webAppId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseWebappsUpdatePathParams.prototype, "webAppId", void 0);
    return AndroidenterpriseWebappsUpdatePathParams;
}(SpeakeasyBase));
export { AndroidenterpriseWebappsUpdatePathParams };
var AndroidenterpriseWebappsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseWebappsUpdateQueryParams, _super);
    function AndroidenterpriseWebappsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidenterpriseWebappsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseWebappsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidenterpriseWebappsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidenterpriseWebappsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidenterpriseWebappsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidenterpriseWebappsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseWebappsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidenterpriseWebappsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidenterpriseWebappsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidenterpriseWebappsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidenterpriseWebappsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidenterpriseWebappsUpdateQueryParams;
}(SpeakeasyBase));
export { AndroidenterpriseWebappsUpdateQueryParams };
var AndroidenterpriseWebappsUpdateSecurity = /** @class */ (function (_super) {
    __extends(AndroidenterpriseWebappsUpdateSecurity, _super);
    function AndroidenterpriseWebappsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidenterpriseWebappsUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidenterpriseWebappsUpdateSecurity.prototype, "oauth2c", void 0);
    return AndroidenterpriseWebappsUpdateSecurity;
}(SpeakeasyBase));
export { AndroidenterpriseWebappsUpdateSecurity };
var AndroidenterpriseWebappsUpdateRequest = /** @class */ (function (_super) {
    __extends(AndroidenterpriseWebappsUpdateRequest, _super);
    function AndroidenterpriseWebappsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseWebappsUpdatePathParams)
    ], AndroidenterpriseWebappsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseWebappsUpdateQueryParams)
    ], AndroidenterpriseWebappsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.WebApp)
    ], AndroidenterpriseWebappsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseWebappsUpdateSecurity)
    ], AndroidenterpriseWebappsUpdateRequest.prototype, "security", void 0);
    return AndroidenterpriseWebappsUpdateRequest;
}(SpeakeasyBase));
export { AndroidenterpriseWebappsUpdateRequest };
var AndroidenterpriseWebappsUpdateResponse = /** @class */ (function (_super) {
    __extends(AndroidenterpriseWebappsUpdateResponse, _super);
    function AndroidenterpriseWebappsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidenterpriseWebappsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidenterpriseWebappsUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.WebApp)
    ], AndroidenterpriseWebappsUpdateResponse.prototype, "webApp", void 0);
    return AndroidenterpriseWebappsUpdateResponse;
}(SpeakeasyBase));
export { AndroidenterpriseWebappsUpdateResponse };
