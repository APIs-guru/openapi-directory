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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var AccesscontextmanagerAccessPoliciesAccessLevelsCreatePathParams = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesAccessLevelsCreatePathParams, _super);
    function AccesscontextmanagerAccessPoliciesAccessLevelsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsCreatePathParams.prototype, "parent", void 0);
    return AccesscontextmanagerAccessPoliciesAccessLevelsCreatePathParams;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesAccessLevelsCreatePathParams };
var AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams, _super);
    function AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams };
var AccesscontextmanagerAccessPoliciesAccessLevelsCreateSecurity = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesAccessLevelsCreateSecurity, _super);
    function AccesscontextmanagerAccessPoliciesAccessLevelsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsCreateSecurity.prototype, "oauth2c", void 0);
    return AccesscontextmanagerAccessPoliciesAccessLevelsCreateSecurity;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesAccessLevelsCreateSecurity };
var AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest, _super);
    function AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AccesscontextmanagerAccessPoliciesAccessLevelsCreatePathParams)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AccesscontextmanagerAccessPoliciesAccessLevelsCreateQueryParams)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AccessLevel)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AccesscontextmanagerAccessPoliciesAccessLevelsCreateSecurity)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest.prototype, "security", void 0);
    return AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest };
var AccesscontextmanagerAccessPoliciesAccessLevelsCreateResponse = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesAccessLevelsCreateResponse, _super);
    function AccesscontextmanagerAccessPoliciesAccessLevelsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsCreateResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AccesscontextmanagerAccessPoliciesAccessLevelsCreateResponse.prototype, "statusCode", void 0);
    return AccesscontextmanagerAccessPoliciesAccessLevelsCreateResponse;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesAccessLevelsCreateResponse };
