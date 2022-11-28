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
var DirectoryRoleAssignmentsListPathParams = /** @class */ (function (_super) {
    __extends(DirectoryRoleAssignmentsListPathParams, _super);
    function DirectoryRoleAssignmentsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsListPathParams.prototype, "customer", void 0);
    return DirectoryRoleAssignmentsListPathParams;
}(SpeakeasyBase));
export { DirectoryRoleAssignmentsListPathParams };
var DirectoryRoleAssignmentsListQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryRoleAssignmentsListQueryParams, _super);
    function DirectoryRoleAssignmentsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DirectoryRoleAssignmentsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryRoleAssignmentsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roleId" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsListQueryParams.prototype, "roleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userKey" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsListQueryParams.prototype, "userKey", void 0);
    return DirectoryRoleAssignmentsListQueryParams;
}(SpeakeasyBase));
export { DirectoryRoleAssignmentsListQueryParams };
var DirectoryRoleAssignmentsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DirectoryRoleAssignmentsListSecurityOption1, _super);
    function DirectoryRoleAssignmentsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryRoleAssignmentsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryRoleAssignmentsListSecurityOption1.prototype, "oauth2c", void 0);
    return DirectoryRoleAssignmentsListSecurityOption1;
}(SpeakeasyBase));
export { DirectoryRoleAssignmentsListSecurityOption1 };
var DirectoryRoleAssignmentsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DirectoryRoleAssignmentsListSecurityOption2, _super);
    function DirectoryRoleAssignmentsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryRoleAssignmentsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryRoleAssignmentsListSecurityOption2.prototype, "oauth2c", void 0);
    return DirectoryRoleAssignmentsListSecurityOption2;
}(SpeakeasyBase));
export { DirectoryRoleAssignmentsListSecurityOption2 };
var DirectoryRoleAssignmentsListSecurity = /** @class */ (function (_super) {
    __extends(DirectoryRoleAssignmentsListSecurity, _super);
    function DirectoryRoleAssignmentsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryRoleAssignmentsListSecurityOption1)
    ], DirectoryRoleAssignmentsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DirectoryRoleAssignmentsListSecurityOption2)
    ], DirectoryRoleAssignmentsListSecurity.prototype, "option2", void 0);
    return DirectoryRoleAssignmentsListSecurity;
}(SpeakeasyBase));
export { DirectoryRoleAssignmentsListSecurity };
var DirectoryRoleAssignmentsListRequest = /** @class */ (function (_super) {
    __extends(DirectoryRoleAssignmentsListRequest, _super);
    function DirectoryRoleAssignmentsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryRoleAssignmentsListPathParams)
    ], DirectoryRoleAssignmentsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryRoleAssignmentsListQueryParams)
    ], DirectoryRoleAssignmentsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryRoleAssignmentsListSecurity)
    ], DirectoryRoleAssignmentsListRequest.prototype, "security", void 0);
    return DirectoryRoleAssignmentsListRequest;
}(SpeakeasyBase));
export { DirectoryRoleAssignmentsListRequest };
var DirectoryRoleAssignmentsListResponse = /** @class */ (function (_super) {
    __extends(DirectoryRoleAssignmentsListResponse, _super);
    function DirectoryRoleAssignmentsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RoleAssignments)
    ], DirectoryRoleAssignmentsListResponse.prototype, "roleAssignments", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryRoleAssignmentsListResponse.prototype, "statusCode", void 0);
    return DirectoryRoleAssignmentsListResponse;
}(SpeakeasyBase));
export { DirectoryRoleAssignmentsListResponse };
