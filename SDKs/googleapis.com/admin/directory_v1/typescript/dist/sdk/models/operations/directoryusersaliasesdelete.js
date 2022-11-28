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
var DirectoryUsersAliasesDeletePathParams = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesDeletePathParams, _super);
    function DirectoryUsersAliasesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alias" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesDeletePathParams.prototype, "alias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userKey" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesDeletePathParams.prototype, "userKey", void 0);
    return DirectoryUsersAliasesDeletePathParams;
}(SpeakeasyBase));
export { DirectoryUsersAliasesDeletePathParams };
var DirectoryUsersAliasesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesDeleteQueryParams, _super);
    function DirectoryUsersAliasesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryUsersAliasesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryUsersAliasesDeleteQueryParams;
}(SpeakeasyBase));
export { DirectoryUsersAliasesDeleteQueryParams };
var DirectoryUsersAliasesDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesDeleteSecurityOption1, _super);
    function DirectoryUsersAliasesDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryUsersAliasesDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryUsersAliasesDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryUsersAliasesDeleteSecurityOption1;
}(SpeakeasyBase));
export { DirectoryUsersAliasesDeleteSecurityOption1 };
var DirectoryUsersAliasesDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesDeleteSecurityOption2, _super);
    function DirectoryUsersAliasesDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryUsersAliasesDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryUsersAliasesDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryUsersAliasesDeleteSecurityOption2;
}(SpeakeasyBase));
export { DirectoryUsersAliasesDeleteSecurityOption2 };
var DirectoryUsersAliasesDeleteSecurity = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesDeleteSecurity, _super);
    function DirectoryUsersAliasesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryUsersAliasesDeleteSecurityOption1)
    ], DirectoryUsersAliasesDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryUsersAliasesDeleteSecurityOption2)
    ], DirectoryUsersAliasesDeleteSecurity.prototype, "option2", void 0);
    return DirectoryUsersAliasesDeleteSecurity;
}(SpeakeasyBase));
export { DirectoryUsersAliasesDeleteSecurity };
var DirectoryUsersAliasesDeleteRequest = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesDeleteRequest, _super);
    function DirectoryUsersAliasesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryUsersAliasesDeletePathParams)
    ], DirectoryUsersAliasesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryUsersAliasesDeleteQueryParams)
    ], DirectoryUsersAliasesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryUsersAliasesDeleteSecurity)
    ], DirectoryUsersAliasesDeleteRequest.prototype, "security", void 0);
    return DirectoryUsersAliasesDeleteRequest;
}(SpeakeasyBase));
export { DirectoryUsersAliasesDeleteRequest };
var DirectoryUsersAliasesDeleteResponse = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesDeleteResponse, _super);
    function DirectoryUsersAliasesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryUsersAliasesDeleteResponse.prototype, "statusCode", void 0);
    return DirectoryUsersAliasesDeleteResponse;
}(SpeakeasyBase));
export { DirectoryUsersAliasesDeleteResponse };
