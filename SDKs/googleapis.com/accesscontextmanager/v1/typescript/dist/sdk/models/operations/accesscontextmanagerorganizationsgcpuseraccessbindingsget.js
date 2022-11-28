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
var AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetPathParams = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetPathParams, _super);
    function AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetPathParams.prototype, "name", void 0);
    return AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetPathParams;
}(SpeakeasyBase));
export { AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetPathParams };
export var AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetFilterEnum;
(function (AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetFilterEnum) {
    AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetFilterEnum["LevelFormatUnspecified"] = "LEVEL_FORMAT_UNSPECIFIED";
    AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetFilterEnum["AsDefined"] = "AS_DEFINED";
    AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetFilterEnum["Cel"] = "CEL";
})(AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetFilterEnum || (AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetFilterEnum = {}));
var AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetQueryParams = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetQueryParams, _super);
    function AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetQueryParams.prototype, "uploadProtocol", void 0);
    return AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetQueryParams;
}(SpeakeasyBase));
export { AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetQueryParams };
var AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetSecurity = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetSecurity, _super);
    function AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetSecurity.prototype, "oauth2c", void 0);
    return AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetSecurity;
}(SpeakeasyBase));
export { AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetSecurity };
var AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetRequest = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetRequest, _super);
    function AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetPathParams)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetQueryParams)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetSecurity)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetRequest.prototype, "security", void 0);
    return AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetRequest;
}(SpeakeasyBase));
export { AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetRequest };
var AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetResponse = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetResponse, _super);
    function AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GcpUserAccessBinding)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetResponse.prototype, "gcpUserAccessBinding", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetResponse.prototype, "statusCode", void 0);
    return AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetResponse;
}(SpeakeasyBase));
export { AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetResponse };
