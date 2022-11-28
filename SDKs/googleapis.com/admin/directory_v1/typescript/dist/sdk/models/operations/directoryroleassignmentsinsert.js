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
var DirectoryRoleAssignmentsInsertPathParams = /** @class */ (function (_super) {
    __extends(DirectoryRoleAssignmentsInsertPathParams, _super);
    function DirectoryRoleAssignmentsInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsInsertPathParams.prototype, "customer", void 0);
    return DirectoryRoleAssignmentsInsertPathParams;
}(SpeakeasyBase));
export { DirectoryRoleAssignmentsInsertPathParams };
var DirectoryRoleAssignmentsInsertQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryRoleAssignmentsInsertQueryParams, _super);
    function DirectoryRoleAssignmentsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryRoleAssignmentsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsInsertQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryRoleAssignmentsInsertQueryParams;
}(SpeakeasyBase));
export { DirectoryRoleAssignmentsInsertQueryParams };
var DirectoryRoleAssignmentsInsertSecurity = /** @class */ (function (_super) {
    __extends(DirectoryRoleAssignmentsInsertSecurity, _super);
    function DirectoryRoleAssignmentsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryRoleAssignmentsInsertSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryRoleAssignmentsInsertSecurity.prototype, "oauth2c", void 0);
    return DirectoryRoleAssignmentsInsertSecurity;
}(SpeakeasyBase));
export { DirectoryRoleAssignmentsInsertSecurity };
var DirectoryRoleAssignmentsInsertRequest = /** @class */ (function (_super) {
    __extends(DirectoryRoleAssignmentsInsertRequest, _super);
    function DirectoryRoleAssignmentsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryRoleAssignmentsInsertPathParams)
    ], DirectoryRoleAssignmentsInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryRoleAssignmentsInsertQueryParams)
    ], DirectoryRoleAssignmentsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RoleAssignment)
    ], DirectoryRoleAssignmentsInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryRoleAssignmentsInsertSecurity)
    ], DirectoryRoleAssignmentsInsertRequest.prototype, "security", void 0);
    return DirectoryRoleAssignmentsInsertRequest;
}(SpeakeasyBase));
export { DirectoryRoleAssignmentsInsertRequest };
var DirectoryRoleAssignmentsInsertResponse = /** @class */ (function (_super) {
    __extends(DirectoryRoleAssignmentsInsertResponse, _super);
    function DirectoryRoleAssignmentsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RoleAssignment)
    ], DirectoryRoleAssignmentsInsertResponse.prototype, "roleAssignment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryRoleAssignmentsInsertResponse.prototype, "statusCode", void 0);
    return DirectoryRoleAssignmentsInsertResponse;
}(SpeakeasyBase));
export { DirectoryRoleAssignmentsInsertResponse };
