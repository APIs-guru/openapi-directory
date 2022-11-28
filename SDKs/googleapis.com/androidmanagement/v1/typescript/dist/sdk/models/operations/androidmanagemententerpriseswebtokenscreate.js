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
var AndroidmanagementEnterprisesWebTokensCreatePathParams = /** @class */ (function (_super) {
    __extends(AndroidmanagementEnterprisesWebTokensCreatePathParams, _super);
    function AndroidmanagementEnterprisesWebTokensCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebTokensCreatePathParams.prototype, "parent", void 0);
    return AndroidmanagementEnterprisesWebTokensCreatePathParams;
}(SpeakeasyBase));
export { AndroidmanagementEnterprisesWebTokensCreatePathParams };
var AndroidmanagementEnterprisesWebTokensCreateQueryParams = /** @class */ (function (_super) {
    __extends(AndroidmanagementEnterprisesWebTokensCreateQueryParams, _super);
    function AndroidmanagementEnterprisesWebTokensCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebTokensCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebTokensCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebTokensCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebTokensCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebTokensCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebTokensCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebTokensCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidmanagementEnterprisesWebTokensCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebTokensCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebTokensCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebTokensCreateQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidmanagementEnterprisesWebTokensCreateQueryParams;
}(SpeakeasyBase));
export { AndroidmanagementEnterprisesWebTokensCreateQueryParams };
var AndroidmanagementEnterprisesWebTokensCreateSecurity = /** @class */ (function (_super) {
    __extends(AndroidmanagementEnterprisesWebTokensCreateSecurity, _super);
    function AndroidmanagementEnterprisesWebTokensCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidmanagementEnterprisesWebTokensCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidmanagementEnterprisesWebTokensCreateSecurity.prototype, "oauth2c", void 0);
    return AndroidmanagementEnterprisesWebTokensCreateSecurity;
}(SpeakeasyBase));
export { AndroidmanagementEnterprisesWebTokensCreateSecurity };
var AndroidmanagementEnterprisesWebTokensCreateRequest = /** @class */ (function (_super) {
    __extends(AndroidmanagementEnterprisesWebTokensCreateRequest, _super);
    function AndroidmanagementEnterprisesWebTokensCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidmanagementEnterprisesWebTokensCreatePathParams)
    ], AndroidmanagementEnterprisesWebTokensCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidmanagementEnterprisesWebTokensCreateQueryParams)
    ], AndroidmanagementEnterprisesWebTokensCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.WebToken)
    ], AndroidmanagementEnterprisesWebTokensCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidmanagementEnterprisesWebTokensCreateSecurity)
    ], AndroidmanagementEnterprisesWebTokensCreateRequest.prototype, "security", void 0);
    return AndroidmanagementEnterprisesWebTokensCreateRequest;
}(SpeakeasyBase));
export { AndroidmanagementEnterprisesWebTokensCreateRequest };
var AndroidmanagementEnterprisesWebTokensCreateResponse = /** @class */ (function (_super) {
    __extends(AndroidmanagementEnterprisesWebTokensCreateResponse, _super);
    function AndroidmanagementEnterprisesWebTokensCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidmanagementEnterprisesWebTokensCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidmanagementEnterprisesWebTokensCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.WebToken)
    ], AndroidmanagementEnterprisesWebTokensCreateResponse.prototype, "webToken", void 0);
    return AndroidmanagementEnterprisesWebTokensCreateResponse;
}(SpeakeasyBase));
export { AndroidmanagementEnterprisesWebTokensCreateResponse };
