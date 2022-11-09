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
var BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialPathParams = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialPathParams, _super);
    function BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialPathParams.prototype, "name", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialPathParams;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialPathParams };
var BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialQueryParams, _super);
    function BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialQueryParams.prototype, "uploadProtocol", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialQueryParams;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialQueryParams };
var BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurityOption1, _super);
    function BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurityOption1;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurityOption1 };
var BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurityOption2, _super);
    function BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurityOption2;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurityOption2 };
var BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurity = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurity, _super);
    function BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurityOption1)
    ], BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurityOption2)
    ], BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurity.prototype, "option2", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurity;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurity };
var BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialRequest = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialRequest, _super);
    function BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialPathParams)
    ], BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialQueryParams)
    ], BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ConnectionCredential)
    ], BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurity)
    ], BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialRequest.prototype, "security", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialRequest;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialRequest };
var BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialResponse = /** @class */ (function (_super) {
    __extends(BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialResponse, _super);
    function BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialResponse.prototype, "statusCode", void 0);
    return BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialResponse;
}(SpeakeasyBase));
export { BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialResponse };
