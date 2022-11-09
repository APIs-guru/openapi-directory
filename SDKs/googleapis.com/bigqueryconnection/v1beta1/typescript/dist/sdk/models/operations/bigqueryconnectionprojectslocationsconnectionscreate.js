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
var BigqueryconnectionProjectsLocationsConnectionsCreatePathParams = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsCreatePathParams, _super);
    function BigqueryconnectionProjectsLocationsConnectionsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsCreatePathParams.prototype, "parent", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsCreatePathParams;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsCreatePathParams };
var BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams, _super);
    function BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=connectionId" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams.prototype, "connectionId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams };
var BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1, _super);
    function BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1 };
var BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption2, _super);
    function BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption2;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption2 };
var BigqueryconnectionProjectsLocationsConnectionsCreateSecurity = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsCreateSecurity, _super);
    function BigqueryconnectionProjectsLocationsConnectionsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1)
    ], BigqueryconnectionProjectsLocationsConnectionsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption2)
    ], BigqueryconnectionProjectsLocationsConnectionsCreateSecurity.prototype, "option2", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsCreateSecurity;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsCreateSecurity };
var BigqueryconnectionProjectsLocationsConnectionsCreateRequest = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsCreateRequest, _super);
    function BigqueryconnectionProjectsLocationsConnectionsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BigqueryconnectionProjectsLocationsConnectionsCreatePathParams)
    ], BigqueryconnectionProjectsLocationsConnectionsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams)
    ], BigqueryconnectionProjectsLocationsConnectionsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Connection)
    ], BigqueryconnectionProjectsLocationsConnectionsCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BigqueryconnectionProjectsLocationsConnectionsCreateSecurity)
    ], BigqueryconnectionProjectsLocationsConnectionsCreateRequest.prototype, "security", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsCreateRequest;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsCreateRequest };
var BigqueryconnectionProjectsLocationsConnectionsCreateResponse = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsCreateResponse, _super);
    function BigqueryconnectionProjectsLocationsConnectionsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Connection)
    ], BigqueryconnectionProjectsLocationsConnectionsCreateResponse.prototype, "connection", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BigqueryconnectionProjectsLocationsConnectionsCreateResponse.prototype, "statusCode", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsCreateResponse;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsCreateResponse };
