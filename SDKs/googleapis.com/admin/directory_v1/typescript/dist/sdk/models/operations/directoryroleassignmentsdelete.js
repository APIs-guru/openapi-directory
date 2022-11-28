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
var DirectoryRoleAssignmentsDeletePathParams = /** @class */ (function (_super) {
    __extends(DirectoryRoleAssignmentsDeletePathParams, _super);
    function DirectoryRoleAssignmentsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsDeletePathParams.prototype, "customer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=roleAssignmentId" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsDeletePathParams.prototype, "roleAssignmentId", void 0);
    return DirectoryRoleAssignmentsDeletePathParams;
}(SpeakeasyBase));
export { DirectoryRoleAssignmentsDeletePathParams };
var DirectoryRoleAssignmentsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryRoleAssignmentsDeleteQueryParams, _super);
    function DirectoryRoleAssignmentsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryRoleAssignmentsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryRoleAssignmentsDeleteQueryParams;
}(SpeakeasyBase));
export { DirectoryRoleAssignmentsDeleteQueryParams };
var DirectoryRoleAssignmentsDeleteSecurity = /** @class */ (function (_super) {
    __extends(DirectoryRoleAssignmentsDeleteSecurity, _super);
    function DirectoryRoleAssignmentsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryRoleAssignmentsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryRoleAssignmentsDeleteSecurity.prototype, "oauth2c", void 0);
    return DirectoryRoleAssignmentsDeleteSecurity;
}(SpeakeasyBase));
export { DirectoryRoleAssignmentsDeleteSecurity };
var DirectoryRoleAssignmentsDeleteRequest = /** @class */ (function (_super) {
    __extends(DirectoryRoleAssignmentsDeleteRequest, _super);
    function DirectoryRoleAssignmentsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryRoleAssignmentsDeletePathParams)
    ], DirectoryRoleAssignmentsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryRoleAssignmentsDeleteQueryParams)
    ], DirectoryRoleAssignmentsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryRoleAssignmentsDeleteSecurity)
    ], DirectoryRoleAssignmentsDeleteRequest.prototype, "security", void 0);
    return DirectoryRoleAssignmentsDeleteRequest;
}(SpeakeasyBase));
export { DirectoryRoleAssignmentsDeleteRequest };
var DirectoryRoleAssignmentsDeleteResponse = /** @class */ (function (_super) {
    __extends(DirectoryRoleAssignmentsDeleteResponse, _super);
    function DirectoryRoleAssignmentsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryRoleAssignmentsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryRoleAssignmentsDeleteResponse.prototype, "statusCode", void 0);
    return DirectoryRoleAssignmentsDeleteResponse;
}(SpeakeasyBase));
export { DirectoryRoleAssignmentsDeleteResponse };
