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
var AndroidenterpriseEnterprisesGetPathParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseEnterprisesGetPathParams, _super);
    function AndroidenterpriseEnterprisesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterpriseId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetPathParams.prototype, "enterpriseId", void 0);
    return AndroidenterpriseEnterprisesGetPathParams;
}(SpeakeasyBase));
export { AndroidenterpriseEnterprisesGetPathParams };
var AndroidenterpriseEnterprisesGetQueryParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseEnterprisesGetQueryParams, _super);
    function AndroidenterpriseEnterprisesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidenterpriseEnterprisesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidenterpriseEnterprisesGetQueryParams;
}(SpeakeasyBase));
export { AndroidenterpriseEnterprisesGetQueryParams };
var AndroidenterpriseEnterprisesGetSecurity = /** @class */ (function (_super) {
    __extends(AndroidenterpriseEnterprisesGetSecurity, _super);
    function AndroidenterpriseEnterprisesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidenterpriseEnterprisesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidenterpriseEnterprisesGetSecurity.prototype, "oauth2c", void 0);
    return AndroidenterpriseEnterprisesGetSecurity;
}(SpeakeasyBase));
export { AndroidenterpriseEnterprisesGetSecurity };
var AndroidenterpriseEnterprisesGetRequest = /** @class */ (function (_super) {
    __extends(AndroidenterpriseEnterprisesGetRequest, _super);
    function AndroidenterpriseEnterprisesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseEnterprisesGetPathParams)
    ], AndroidenterpriseEnterprisesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseEnterprisesGetQueryParams)
    ], AndroidenterpriseEnterprisesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseEnterprisesGetSecurity)
    ], AndroidenterpriseEnterprisesGetRequest.prototype, "security", void 0);
    return AndroidenterpriseEnterprisesGetRequest;
}(SpeakeasyBase));
export { AndroidenterpriseEnterprisesGetRequest };
var AndroidenterpriseEnterprisesGetResponse = /** @class */ (function (_super) {
    __extends(AndroidenterpriseEnterprisesGetResponse, _super);
    function AndroidenterpriseEnterprisesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Enterprise)
    ], AndroidenterpriseEnterprisesGetResponse.prototype, "enterprise", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidenterpriseEnterprisesGetResponse.prototype, "statusCode", void 0);
    return AndroidenterpriseEnterprisesGetResponse;
}(SpeakeasyBase));
export { AndroidenterpriseEnterprisesGetResponse };
