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
var AccesscontextmanagerAccessPoliciesServicePerimetersPatchPathParams = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesServicePerimetersPatchPathParams, _super);
    function AccesscontextmanagerAccessPoliciesServicePerimetersPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersPatchPathParams.prototype, "name", void 0);
    return AccesscontextmanagerAccessPoliciesServicePerimetersPatchPathParams;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesServicePerimetersPatchPathParams };
var AccesscontextmanagerAccessPoliciesServicePerimetersPatchQueryParams = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesServicePerimetersPatchQueryParams, _super);
    function AccesscontextmanagerAccessPoliciesServicePerimetersPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersPatchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersPatchQueryParams.prototype, "uploadProtocol", void 0);
    return AccesscontextmanagerAccessPoliciesServicePerimetersPatchQueryParams;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesServicePerimetersPatchQueryParams };
var AccesscontextmanagerAccessPoliciesServicePerimetersPatchSecurity = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesServicePerimetersPatchSecurity, _super);
    function AccesscontextmanagerAccessPoliciesServicePerimetersPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersPatchSecurity.prototype, "oauth2c", void 0);
    return AccesscontextmanagerAccessPoliciesServicePerimetersPatchSecurity;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesServicePerimetersPatchSecurity };
var AccesscontextmanagerAccessPoliciesServicePerimetersPatchRequest = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesServicePerimetersPatchRequest, _super);
    function AccesscontextmanagerAccessPoliciesServicePerimetersPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AccesscontextmanagerAccessPoliciesServicePerimetersPatchPathParams)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AccesscontextmanagerAccessPoliciesServicePerimetersPatchQueryParams)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ServicePerimeter)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersPatchRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AccesscontextmanagerAccessPoliciesServicePerimetersPatchSecurity)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersPatchRequest.prototype, "security", void 0);
    return AccesscontextmanagerAccessPoliciesServicePerimetersPatchRequest;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesServicePerimetersPatchRequest };
var AccesscontextmanagerAccessPoliciesServicePerimetersPatchResponse = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesServicePerimetersPatchResponse, _super);
    function AccesscontextmanagerAccessPoliciesServicePerimetersPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersPatchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersPatchResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersPatchResponse.prototype, "statusCode", void 0);
    return AccesscontextmanagerAccessPoliciesServicePerimetersPatchResponse;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesServicePerimetersPatchResponse };
