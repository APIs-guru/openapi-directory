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
var AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeletePathParams = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeletePathParams, _super);
    function AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeletePathParams.prototype, "name", void 0);
    return AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeletePathParams;
}(SpeakeasyBase));
export { AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeletePathParams };
var AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteQueryParams, _super);
    function AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteQueryParams;
}(SpeakeasyBase));
export { AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteQueryParams };
var AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteSecurity = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteSecurity, _super);
    function AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteSecurity.prototype, "oauth2c", void 0);
    return AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteSecurity;
}(SpeakeasyBase));
export { AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteSecurity };
var AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteRequest = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteRequest, _super);
    function AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeletePathParams)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteQueryParams)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteSecurity)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteRequest.prototype, "security", void 0);
    return AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteRequest;
}(SpeakeasyBase));
export { AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteRequest };
var AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteResponse = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteResponse, _super);
    function AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteResponse.prototype, "statusCode", void 0);
    return AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteResponse;
}(SpeakeasyBase));
export { AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteResponse };
