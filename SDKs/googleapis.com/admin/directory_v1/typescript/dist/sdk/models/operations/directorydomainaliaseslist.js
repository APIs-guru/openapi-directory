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
var DirectoryDomainAliasesListPathParams = /** @class */ (function (_super) {
    __extends(DirectoryDomainAliasesListPathParams, _super);
    function DirectoryDomainAliasesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesListPathParams.prototype, "customer", void 0);
    return DirectoryDomainAliasesListPathParams;
}(SpeakeasyBase));
export { DirectoryDomainAliasesListPathParams };
var DirectoryDomainAliasesListQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryDomainAliasesListQueryParams, _super);
    function DirectoryDomainAliasesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parentDomainName" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesListQueryParams.prototype, "parentDomainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryDomainAliasesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesListQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryDomainAliasesListQueryParams;
}(SpeakeasyBase));
export { DirectoryDomainAliasesListQueryParams };
var DirectoryDomainAliasesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryDomainAliasesListSecurityOption1, _super);
    function DirectoryDomainAliasesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryDomainAliasesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryDomainAliasesListSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryDomainAliasesListSecurityOption1;
}(SpeakeasyBase));
export { DirectoryDomainAliasesListSecurityOption1 };
var DirectoryDomainAliasesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryDomainAliasesListSecurityOption2, _super);
    function DirectoryDomainAliasesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryDomainAliasesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryDomainAliasesListSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryDomainAliasesListSecurityOption2;
}(SpeakeasyBase));
export { DirectoryDomainAliasesListSecurityOption2 };
var DirectoryDomainAliasesListSecurity = /** @class */ (function (_super) {
    __extends(DirectoryDomainAliasesListSecurity, _super);
    function DirectoryDomainAliasesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryDomainAliasesListSecurityOption1)
    ], DirectoryDomainAliasesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryDomainAliasesListSecurityOption2)
    ], DirectoryDomainAliasesListSecurity.prototype, "option2", void 0);
    return DirectoryDomainAliasesListSecurity;
}(SpeakeasyBase));
export { DirectoryDomainAliasesListSecurity };
var DirectoryDomainAliasesListRequest = /** @class */ (function (_super) {
    __extends(DirectoryDomainAliasesListRequest, _super);
    function DirectoryDomainAliasesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryDomainAliasesListPathParams)
    ], DirectoryDomainAliasesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryDomainAliasesListQueryParams)
    ], DirectoryDomainAliasesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryDomainAliasesListSecurity)
    ], DirectoryDomainAliasesListRequest.prototype, "security", void 0);
    return DirectoryDomainAliasesListRequest;
}(SpeakeasyBase));
export { DirectoryDomainAliasesListRequest };
var DirectoryDomainAliasesListResponse = /** @class */ (function (_super) {
    __extends(DirectoryDomainAliasesListResponse, _super);
    function DirectoryDomainAliasesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryDomainAliasesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DomainAliases)
    ], DirectoryDomainAliasesListResponse.prototype, "domainAliases", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryDomainAliasesListResponse.prototype, "statusCode", void 0);
    return DirectoryDomainAliasesListResponse;
}(SpeakeasyBase));
export { DirectoryDomainAliasesListResponse };
