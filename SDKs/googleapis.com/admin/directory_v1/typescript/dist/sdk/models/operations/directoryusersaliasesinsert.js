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
var DirectoryUsersAliasesInsertPathParams = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesInsertPathParams, _super);
    function DirectoryUsersAliasesInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userKey" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesInsertPathParams.prototype, "userKey", void 0);
    return DirectoryUsersAliasesInsertPathParams;
}(SpeakeasyBase));
export { DirectoryUsersAliasesInsertPathParams };
var DirectoryUsersAliasesInsertQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesInsertQueryParams, _super);
    function DirectoryUsersAliasesInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryUsersAliasesInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesInsertQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryUsersAliasesInsertQueryParams;
}(SpeakeasyBase));
export { DirectoryUsersAliasesInsertQueryParams };
var DirectoryUsersAliasesInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesInsertSecurityOption1, _super);
    function DirectoryUsersAliasesInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryUsersAliasesInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryUsersAliasesInsertSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryUsersAliasesInsertSecurityOption1;
}(SpeakeasyBase));
export { DirectoryUsersAliasesInsertSecurityOption1 };
var DirectoryUsersAliasesInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesInsertSecurityOption2, _super);
    function DirectoryUsersAliasesInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryUsersAliasesInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryUsersAliasesInsertSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryUsersAliasesInsertSecurityOption2;
}(SpeakeasyBase));
export { DirectoryUsersAliasesInsertSecurityOption2 };
var DirectoryUsersAliasesInsertSecurity = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesInsertSecurity, _super);
    function DirectoryUsersAliasesInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryUsersAliasesInsertSecurityOption1)
    ], DirectoryUsersAliasesInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryUsersAliasesInsertSecurityOption2)
    ], DirectoryUsersAliasesInsertSecurity.prototype, "option2", void 0);
    return DirectoryUsersAliasesInsertSecurity;
}(SpeakeasyBase));
export { DirectoryUsersAliasesInsertSecurity };
var DirectoryUsersAliasesInsertRequest = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesInsertRequest, _super);
    function DirectoryUsersAliasesInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryUsersAliasesInsertPathParams)
    ], DirectoryUsersAliasesInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryUsersAliasesInsertQueryParams)
    ], DirectoryUsersAliasesInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Alias)
    ], DirectoryUsersAliasesInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryUsersAliasesInsertSecurity)
    ], DirectoryUsersAliasesInsertRequest.prototype, "security", void 0);
    return DirectoryUsersAliasesInsertRequest;
}(SpeakeasyBase));
export { DirectoryUsersAliasesInsertRequest };
var DirectoryUsersAliasesInsertResponse = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesInsertResponse, _super);
    function DirectoryUsersAliasesInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Alias)
    ], DirectoryUsersAliasesInsertResponse.prototype, "alias", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryUsersAliasesInsertResponse.prototype, "statusCode", void 0);
    return DirectoryUsersAliasesInsertResponse;
}(SpeakeasyBase));
export { DirectoryUsersAliasesInsertResponse };
