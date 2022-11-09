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
var AccesscontextmanagerAccessPoliciesServicePerimetersCreatePathParams = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesServicePerimetersCreatePathParams, _super);
    function AccesscontextmanagerAccessPoliciesServicePerimetersCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCreatePathParams.prototype, "parent", void 0);
    return AccesscontextmanagerAccessPoliciesServicePerimetersCreatePathParams;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesServicePerimetersCreatePathParams };
var AccesscontextmanagerAccessPoliciesServicePerimetersCreateQueryParams = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesServicePerimetersCreateQueryParams, _super);
    function AccesscontextmanagerAccessPoliciesServicePerimetersCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCreateQueryParams.prototype, "uploadProtocol", void 0);
    return AccesscontextmanagerAccessPoliciesServicePerimetersCreateQueryParams;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesServicePerimetersCreateQueryParams };
var AccesscontextmanagerAccessPoliciesServicePerimetersCreateSecurity = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesServicePerimetersCreateSecurity, _super);
    function AccesscontextmanagerAccessPoliciesServicePerimetersCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCreateSecurity.prototype, "oauth2c", void 0);
    return AccesscontextmanagerAccessPoliciesServicePerimetersCreateSecurity;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesServicePerimetersCreateSecurity };
var AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest, _super);
    function AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AccesscontextmanagerAccessPoliciesServicePerimetersCreatePathParams)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AccesscontextmanagerAccessPoliciesServicePerimetersCreateQueryParams)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ServicePerimeter)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AccesscontextmanagerAccessPoliciesServicePerimetersCreateSecurity)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest.prototype, "security", void 0);
    return AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest };
var AccesscontextmanagerAccessPoliciesServicePerimetersCreateResponse = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesServicePerimetersCreateResponse, _super);
    function AccesscontextmanagerAccessPoliciesServicePerimetersCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCreateResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersCreateResponse.prototype, "statusCode", void 0);
    return AccesscontextmanagerAccessPoliciesServicePerimetersCreateResponse;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesServicePerimetersCreateResponse };
