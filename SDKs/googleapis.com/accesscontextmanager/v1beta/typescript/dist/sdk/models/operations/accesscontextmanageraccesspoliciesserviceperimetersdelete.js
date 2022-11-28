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
var AccesscontextmanagerAccessPoliciesServicePerimetersDeletePathParams = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesServicePerimetersDeletePathParams, _super);
    function AccesscontextmanagerAccessPoliciesServicePerimetersDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersDeletePathParams.prototype, "name", void 0);
    return AccesscontextmanagerAccessPoliciesServicePerimetersDeletePathParams;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesServicePerimetersDeletePathParams };
var AccesscontextmanagerAccessPoliciesServicePerimetersDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesServicePerimetersDeleteQueryParams, _super);
    function AccesscontextmanagerAccessPoliciesServicePerimetersDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return AccesscontextmanagerAccessPoliciesServicePerimetersDeleteQueryParams;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesServicePerimetersDeleteQueryParams };
var AccesscontextmanagerAccessPoliciesServicePerimetersDeleteSecurity = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesServicePerimetersDeleteSecurity, _super);
    function AccesscontextmanagerAccessPoliciesServicePerimetersDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersDeleteSecurity.prototype, "oauth2c", void 0);
    return AccesscontextmanagerAccessPoliciesServicePerimetersDeleteSecurity;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesServicePerimetersDeleteSecurity };
var AccesscontextmanagerAccessPoliciesServicePerimetersDeleteRequest = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesServicePerimetersDeleteRequest, _super);
    function AccesscontextmanagerAccessPoliciesServicePerimetersDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccesscontextmanagerAccessPoliciesServicePerimetersDeletePathParams)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccesscontextmanagerAccessPoliciesServicePerimetersDeleteQueryParams)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccesscontextmanagerAccessPoliciesServicePerimetersDeleteSecurity)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersDeleteRequest.prototype, "security", void 0);
    return AccesscontextmanagerAccessPoliciesServicePerimetersDeleteRequest;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesServicePerimetersDeleteRequest };
var AccesscontextmanagerAccessPoliciesServicePerimetersDeleteResponse = /** @class */ (function (_super) {
    __extends(AccesscontextmanagerAccessPoliciesServicePerimetersDeleteResponse, _super);
    function AccesscontextmanagerAccessPoliciesServicePerimetersDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersDeleteResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AccesscontextmanagerAccessPoliciesServicePerimetersDeleteResponse.prototype, "statusCode", void 0);
    return AccesscontextmanagerAccessPoliciesServicePerimetersDeleteResponse;
}(SpeakeasyBase));
export { AccesscontextmanagerAccessPoliciesServicePerimetersDeleteResponse };
