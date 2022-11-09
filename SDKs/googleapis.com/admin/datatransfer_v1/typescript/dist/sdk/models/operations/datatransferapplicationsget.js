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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var DatatransferApplicationsGetPathParams = /** @class */ (function (_super) {
    __extends(DatatransferApplicationsGetPathParams, _super);
    function DatatransferApplicationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=applicationId" }),
        __metadata("design:type", String)
    ], DatatransferApplicationsGetPathParams.prototype, "applicationId", void 0);
    return DatatransferApplicationsGetPathParams;
}(SpeakeasyBase));
export { DatatransferApplicationsGetPathParams };
var DatatransferApplicationsGetQueryParams = /** @class */ (function (_super) {
    __extends(DatatransferApplicationsGetQueryParams, _super);
    function DatatransferApplicationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatatransferApplicationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatatransferApplicationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatatransferApplicationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatatransferApplicationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatatransferApplicationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatatransferApplicationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatatransferApplicationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatatransferApplicationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatatransferApplicationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatatransferApplicationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatatransferApplicationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return DatatransferApplicationsGetQueryParams;
}(SpeakeasyBase));
export { DatatransferApplicationsGetQueryParams };
var DatatransferApplicationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DatatransferApplicationsGetSecurityOption1, _super);
    function DatatransferApplicationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatatransferApplicationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatatransferApplicationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return DatatransferApplicationsGetSecurityOption1;
}(SpeakeasyBase));
export { DatatransferApplicationsGetSecurityOption1 };
var DatatransferApplicationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DatatransferApplicationsGetSecurityOption2, _super);
    function DatatransferApplicationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatatransferApplicationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatatransferApplicationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return DatatransferApplicationsGetSecurityOption2;
}(SpeakeasyBase));
export { DatatransferApplicationsGetSecurityOption2 };
var DatatransferApplicationsGetSecurity = /** @class */ (function (_super) {
    __extends(DatatransferApplicationsGetSecurity, _super);
    function DatatransferApplicationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DatatransferApplicationsGetSecurityOption1)
    ], DatatransferApplicationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DatatransferApplicationsGetSecurityOption2)
    ], DatatransferApplicationsGetSecurity.prototype, "option2", void 0);
    return DatatransferApplicationsGetSecurity;
}(SpeakeasyBase));
export { DatatransferApplicationsGetSecurity };
var DatatransferApplicationsGetRequest = /** @class */ (function (_super) {
    __extends(DatatransferApplicationsGetRequest, _super);
    function DatatransferApplicationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DatatransferApplicationsGetPathParams)
    ], DatatransferApplicationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DatatransferApplicationsGetQueryParams)
    ], DatatransferApplicationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DatatransferApplicationsGetSecurity)
    ], DatatransferApplicationsGetRequest.prototype, "security", void 0);
    return DatatransferApplicationsGetRequest;
}(SpeakeasyBase));
export { DatatransferApplicationsGetRequest };
var DatatransferApplicationsGetResponse = /** @class */ (function (_super) {
    __extends(DatatransferApplicationsGetResponse, _super);
    function DatatransferApplicationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Application)
    ], DatatransferApplicationsGetResponse.prototype, "application", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DatatransferApplicationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DatatransferApplicationsGetResponse.prototype, "statusCode", void 0);
    return DatatransferApplicationsGetResponse;
}(SpeakeasyBase));
export { DatatransferApplicationsGetResponse };
