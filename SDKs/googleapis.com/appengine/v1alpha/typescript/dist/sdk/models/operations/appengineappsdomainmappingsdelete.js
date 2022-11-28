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
var AppengineAppsDomainMappingsDeletePathParams = /** @class */ (function (_super) {
    __extends(AppengineAppsDomainMappingsDeletePathParams, _super);
    function AppengineAppsDomainMappingsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appsId" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsDeletePathParams.prototype, "appsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainMappingsId" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsDeletePathParams.prototype, "domainMappingsId", void 0);
    return AppengineAppsDomainMappingsDeletePathParams;
}(SpeakeasyBase));
export { AppengineAppsDomainMappingsDeletePathParams };
var AppengineAppsDomainMappingsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AppengineAppsDomainMappingsDeleteQueryParams, _super);
    function AppengineAppsDomainMappingsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppengineAppsDomainMappingsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return AppengineAppsDomainMappingsDeleteQueryParams;
}(SpeakeasyBase));
export { AppengineAppsDomainMappingsDeleteQueryParams };
var AppengineAppsDomainMappingsDeleteSecurity = /** @class */ (function (_super) {
    __extends(AppengineAppsDomainMappingsDeleteSecurity, _super);
    function AppengineAppsDomainMappingsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppengineAppsDomainMappingsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppengineAppsDomainMappingsDeleteSecurity.prototype, "oauth2c", void 0);
    return AppengineAppsDomainMappingsDeleteSecurity;
}(SpeakeasyBase));
export { AppengineAppsDomainMappingsDeleteSecurity };
var AppengineAppsDomainMappingsDeleteRequest = /** @class */ (function (_super) {
    __extends(AppengineAppsDomainMappingsDeleteRequest, _super);
    function AppengineAppsDomainMappingsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsDomainMappingsDeletePathParams)
    ], AppengineAppsDomainMappingsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsDomainMappingsDeleteQueryParams)
    ], AppengineAppsDomainMappingsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppengineAppsDomainMappingsDeleteSecurity)
    ], AppengineAppsDomainMappingsDeleteRequest.prototype, "security", void 0);
    return AppengineAppsDomainMappingsDeleteRequest;
}(SpeakeasyBase));
export { AppengineAppsDomainMappingsDeleteRequest };
var AppengineAppsDomainMappingsDeleteResponse = /** @class */ (function (_super) {
    __extends(AppengineAppsDomainMappingsDeleteResponse, _super);
    function AppengineAppsDomainMappingsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppengineAppsDomainMappingsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], AppengineAppsDomainMappingsDeleteResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppengineAppsDomainMappingsDeleteResponse.prototype, "statusCode", void 0);
    return AppengineAppsDomainMappingsDeleteResponse;
}(SpeakeasyBase));
export { AppengineAppsDomainMappingsDeleteResponse };
