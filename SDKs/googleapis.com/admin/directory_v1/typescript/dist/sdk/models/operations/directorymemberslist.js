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
var DirectoryMembersListPathParams = /** @class */ (function (_super) {
    __extends(DirectoryMembersListPathParams, _super);
    function DirectoryMembersListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupKey" }),
        __metadata("design:type", String)
    ], DirectoryMembersListPathParams.prototype, "groupKey", void 0);
    return DirectoryMembersListPathParams;
}(SpeakeasyBase));
export { DirectoryMembersListPathParams };
var DirectoryMembersListQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryMembersListQueryParams, _super);
    function DirectoryMembersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryMembersListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryMembersListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryMembersListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryMembersListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryMembersListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDerivedMembership" }),
        __metadata("design:type", Boolean)
    ], DirectoryMembersListQueryParams.prototype, "includeDerivedMembership", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryMembersListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DirectoryMembersListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryMembersListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DirectoryMembersListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryMembersListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryMembersListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roles" }),
        __metadata("design:type", String)
    ], DirectoryMembersListQueryParams.prototype, "roles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryMembersListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryMembersListQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryMembersListQueryParams;
}(SpeakeasyBase));
export { DirectoryMembersListQueryParams };
var DirectoryMembersListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryMembersListSecurityOption1, _super);
    function DirectoryMembersListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryMembersListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryMembersListSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryMembersListSecurityOption1;
}(SpeakeasyBase));
export { DirectoryMembersListSecurityOption1 };
var DirectoryMembersListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryMembersListSecurityOption2, _super);
    function DirectoryMembersListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryMembersListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryMembersListSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryMembersListSecurityOption2;
}(SpeakeasyBase));
export { DirectoryMembersListSecurityOption2 };
var DirectoryMembersListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DirectoryMembersListSecurityOption3, _super);
    function DirectoryMembersListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryMembersListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryMembersListSecurityOption3.prototype, "oauth2c", void 0);
    return DirectoryMembersListSecurityOption3;
}(SpeakeasyBase));
export { DirectoryMembersListSecurityOption3 };
var DirectoryMembersListSecurityOption4 = /** @class */ (function (_super) {
    __extends(DirectoryMembersListSecurityOption4, _super);
    function DirectoryMembersListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryMembersListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryMembersListSecurityOption4.prototype, "oauth2c", void 0);
    return DirectoryMembersListSecurityOption4;
}(SpeakeasyBase));
export { DirectoryMembersListSecurityOption4 };
var DirectoryMembersListSecurity = /** @class */ (function (_super) {
    __extends(DirectoryMembersListSecurity, _super);
    function DirectoryMembersListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryMembersListSecurityOption1)
    ], DirectoryMembersListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryMembersListSecurityOption2)
    ], DirectoryMembersListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryMembersListSecurityOption3)
    ], DirectoryMembersListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryMembersListSecurityOption4)
    ], DirectoryMembersListSecurity.prototype, "option4", void 0);
    return DirectoryMembersListSecurity;
}(SpeakeasyBase));
export { DirectoryMembersListSecurity };
var DirectoryMembersListRequest = /** @class */ (function (_super) {
    __extends(DirectoryMembersListRequest, _super);
    function DirectoryMembersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryMembersListPathParams)
    ], DirectoryMembersListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryMembersListQueryParams)
    ], DirectoryMembersListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryMembersListSecurity)
    ], DirectoryMembersListRequest.prototype, "security", void 0);
    return DirectoryMembersListRequest;
}(SpeakeasyBase));
export { DirectoryMembersListRequest };
var DirectoryMembersListResponse = /** @class */ (function (_super) {
    __extends(DirectoryMembersListResponse, _super);
    function DirectoryMembersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryMembersListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Members)
    ], DirectoryMembersListResponse.prototype, "members", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryMembersListResponse.prototype, "statusCode", void 0);
    return DirectoryMembersListResponse;
}(SpeakeasyBase));
export { DirectoryMembersListResponse };
