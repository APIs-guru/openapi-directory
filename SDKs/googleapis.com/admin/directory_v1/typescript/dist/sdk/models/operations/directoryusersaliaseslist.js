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
var DirectoryUsersAliasesListPathParams = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesListPathParams, _super);
    function DirectoryUsersAliasesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userKey" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesListPathParams.prototype, "userKey", void 0);
    return DirectoryUsersAliasesListPathParams;
}(SpeakeasyBase));
export { DirectoryUsersAliasesListPathParams };
export var DirectoryUsersAliasesListEventEnum;
(function (DirectoryUsersAliasesListEventEnum) {
    DirectoryUsersAliasesListEventEnum["Add"] = "add";
    DirectoryUsersAliasesListEventEnum["Delete"] = "delete";
})(DirectoryUsersAliasesListEventEnum || (DirectoryUsersAliasesListEventEnum = {}));
var DirectoryUsersAliasesListQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesListQueryParams, _super);
    function DirectoryUsersAliasesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=event" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesListQueryParams.prototype, "event", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryUsersAliasesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesListQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryUsersAliasesListQueryParams;
}(SpeakeasyBase));
export { DirectoryUsersAliasesListQueryParams };
var DirectoryUsersAliasesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesListSecurityOption1, _super);
    function DirectoryUsersAliasesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryUsersAliasesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryUsersAliasesListSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryUsersAliasesListSecurityOption1;
}(SpeakeasyBase));
export { DirectoryUsersAliasesListSecurityOption1 };
var DirectoryUsersAliasesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesListSecurityOption2, _super);
    function DirectoryUsersAliasesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryUsersAliasesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryUsersAliasesListSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryUsersAliasesListSecurityOption2;
}(SpeakeasyBase));
export { DirectoryUsersAliasesListSecurityOption2 };
var DirectoryUsersAliasesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesListSecurityOption3, _super);
    function DirectoryUsersAliasesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryUsersAliasesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryUsersAliasesListSecurityOption3.prototype, "oauth2c", void 0);
    return DirectoryUsersAliasesListSecurityOption3;
}(SpeakeasyBase));
export { DirectoryUsersAliasesListSecurityOption3 };
var DirectoryUsersAliasesListSecurityOption4 = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesListSecurityOption4, _super);
    function DirectoryUsersAliasesListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryUsersAliasesListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryUsersAliasesListSecurityOption4.prototype, "oauth2c", void 0);
    return DirectoryUsersAliasesListSecurityOption4;
}(SpeakeasyBase));
export { DirectoryUsersAliasesListSecurityOption4 };
var DirectoryUsersAliasesListSecurity = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesListSecurity, _super);
    function DirectoryUsersAliasesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryUsersAliasesListSecurityOption1)
    ], DirectoryUsersAliasesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryUsersAliasesListSecurityOption2)
    ], DirectoryUsersAliasesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryUsersAliasesListSecurityOption3)
    ], DirectoryUsersAliasesListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryUsersAliasesListSecurityOption4)
    ], DirectoryUsersAliasesListSecurity.prototype, "option4", void 0);
    return DirectoryUsersAliasesListSecurity;
}(SpeakeasyBase));
export { DirectoryUsersAliasesListSecurity };
var DirectoryUsersAliasesListRequest = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesListRequest, _super);
    function DirectoryUsersAliasesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryUsersAliasesListPathParams)
    ], DirectoryUsersAliasesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryUsersAliasesListQueryParams)
    ], DirectoryUsersAliasesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryUsersAliasesListSecurity)
    ], DirectoryUsersAliasesListRequest.prototype, "security", void 0);
    return DirectoryUsersAliasesListRequest;
}(SpeakeasyBase));
export { DirectoryUsersAliasesListRequest };
var DirectoryUsersAliasesListResponse = /** @class */ (function (_super) {
    __extends(DirectoryUsersAliasesListResponse, _super);
    function DirectoryUsersAliasesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Aliases)
    ], DirectoryUsersAliasesListResponse.prototype, "aliases", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryUsersAliasesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryUsersAliasesListResponse.prototype, "statusCode", void 0);
    return DirectoryUsersAliasesListResponse;
}(SpeakeasyBase));
export { DirectoryUsersAliasesListResponse };
