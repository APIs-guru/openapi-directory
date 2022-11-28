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
var DirectoryDomainAliasesDeletePathParams = /** @class */ (function (_super) {
    __extends(DirectoryDomainAliasesDeletePathParams, _super);
    function DirectoryDomainAliasesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesDeletePathParams.prototype, "customer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainAliasName" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesDeletePathParams.prototype, "domainAliasName", void 0);
    return DirectoryDomainAliasesDeletePathParams;
}(SpeakeasyBase));
export { DirectoryDomainAliasesDeletePathParams };
var DirectoryDomainAliasesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryDomainAliasesDeleteQueryParams, _super);
    function DirectoryDomainAliasesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryDomainAliasesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryDomainAliasesDeleteQueryParams;
}(SpeakeasyBase));
export { DirectoryDomainAliasesDeleteQueryParams };
var DirectoryDomainAliasesDeleteSecurity = /** @class */ (function (_super) {
    __extends(DirectoryDomainAliasesDeleteSecurity, _super);
    function DirectoryDomainAliasesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryDomainAliasesDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryDomainAliasesDeleteSecurity.prototype, "oauth2c", void 0);
    return DirectoryDomainAliasesDeleteSecurity;
}(SpeakeasyBase));
export { DirectoryDomainAliasesDeleteSecurity };
var DirectoryDomainAliasesDeleteRequest = /** @class */ (function (_super) {
    __extends(DirectoryDomainAliasesDeleteRequest, _super);
    function DirectoryDomainAliasesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryDomainAliasesDeletePathParams)
    ], DirectoryDomainAliasesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryDomainAliasesDeleteQueryParams)
    ], DirectoryDomainAliasesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryDomainAliasesDeleteSecurity)
    ], DirectoryDomainAliasesDeleteRequest.prototype, "security", void 0);
    return DirectoryDomainAliasesDeleteRequest;
}(SpeakeasyBase));
export { DirectoryDomainAliasesDeleteRequest };
var DirectoryDomainAliasesDeleteResponse = /** @class */ (function (_super) {
    __extends(DirectoryDomainAliasesDeleteResponse, _super);
    function DirectoryDomainAliasesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryDomainAliasesDeleteResponse.prototype, "statusCode", void 0);
    return DirectoryDomainAliasesDeleteResponse;
}(SpeakeasyBase));
export { DirectoryDomainAliasesDeleteResponse };
