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
var AccesscontextmanagerOrganizationsGcpUserAccessBindingsListPathParams = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerOrganizationsGcpUserAccessBindingsListPathParams, _super);
    function AccesscontextmanagerOrganizationsGcpUserAccessBindingsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsListPathParams.prototype, "parent", void 0);
    return AccesscontextmanagerOrganizationsGcpUserAccessBindingsListPathParams;
}(SpeakeasyBase));
export { AccesscontextmanagerOrganizationsGcpUserAccessBindingsListPathParams };
var AccesscontextmanagerOrganizationsGcpUserAccessBindingsListQueryParams = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerOrganizationsGcpUserAccessBindingsListQueryParams, _super);
    function AccesscontextmanagerOrganizationsGcpUserAccessBindingsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsListQueryParams.prototype, "uploadProtocol", void 0);
    return AccesscontextmanagerOrganizationsGcpUserAccessBindingsListQueryParams;
}(SpeakeasyBase));
export { AccesscontextmanagerOrganizationsGcpUserAccessBindingsListQueryParams };
var AccesscontextmanagerOrganizationsGcpUserAccessBindingsListSecurity = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerOrganizationsGcpUserAccessBindingsListSecurity, _super);
    function AccesscontextmanagerOrganizationsGcpUserAccessBindingsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsListSecurity.prototype, "oauth2c", void 0);
    return AccesscontextmanagerOrganizationsGcpUserAccessBindingsListSecurity;
}(SpeakeasyBase));
export { AccesscontextmanagerOrganizationsGcpUserAccessBindingsListSecurity };
var AccesscontextmanagerOrganizationsGcpUserAccessBindingsListRequest = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerOrganizationsGcpUserAccessBindingsListRequest, _super);
    function AccesscontextmanagerOrganizationsGcpUserAccessBindingsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccesscontextmanagerOrganizationsGcpUserAccessBindingsListPathParams)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccesscontextmanagerOrganizationsGcpUserAccessBindingsListQueryParams)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccesscontextmanagerOrganizationsGcpUserAccessBindingsListSecurity)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsListRequest.prototype, "security", void 0);
    return AccesscontextmanagerOrganizationsGcpUserAccessBindingsListRequest;
}(SpeakeasyBase));
export { AccesscontextmanagerOrganizationsGcpUserAccessBindingsListRequest };
var AccesscontextmanagerOrganizationsGcpUserAccessBindingsListResponse = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerOrganizationsGcpUserAccessBindingsListResponse, _super);
    function AccesscontextmanagerOrganizationsGcpUserAccessBindingsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListGcpUserAccessBindingsResponse)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsListResponse.prototype, "listGcpUserAccessBindingsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsListResponse.prototype, "statusCode", void 0);
    return AccesscontextmanagerOrganizationsGcpUserAccessBindingsListResponse;
}(SpeakeasyBase));
export { AccesscontextmanagerOrganizationsGcpUserAccessBindingsListResponse };
