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
var AnalyticshubProjectsLocationsDataExchangesCreatePathParams = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesCreatePathParams, _super);
    function AnalyticshubProjectsLocationsDataExchangesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesCreatePathParams.prototype, "parent", void 0);
    return AnalyticshubProjectsLocationsDataExchangesCreatePathParams;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesCreatePathParams };
var AnalyticshubProjectsLocationsDataExchangesCreateQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesCreateQueryParams, _super);
    function AnalyticshubProjectsLocationsDataExchangesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=dataExchangeId" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesCreateQueryParams.prototype, "dataExchangeId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticshubProjectsLocationsDataExchangesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticshubProjectsLocationsDataExchangesCreateQueryParams;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesCreateQueryParams };
var AnalyticshubProjectsLocationsDataExchangesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesCreateSecurityOption1, _super);
    function AnalyticshubProjectsLocationsDataExchangesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticshubProjectsLocationsDataExchangesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticshubProjectsLocationsDataExchangesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticshubProjectsLocationsDataExchangesCreateSecurityOption1;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesCreateSecurityOption1 };
var AnalyticshubProjectsLocationsDataExchangesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesCreateSecurityOption2, _super);
    function AnalyticshubProjectsLocationsDataExchangesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticshubProjectsLocationsDataExchangesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticshubProjectsLocationsDataExchangesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticshubProjectsLocationsDataExchangesCreateSecurityOption2;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesCreateSecurityOption2 };
var AnalyticshubProjectsLocationsDataExchangesCreateSecurity = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesCreateSecurity, _super);
    function AnalyticshubProjectsLocationsDataExchangesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticshubProjectsLocationsDataExchangesCreateSecurityOption1)
    ], AnalyticshubProjectsLocationsDataExchangesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticshubProjectsLocationsDataExchangesCreateSecurityOption2)
    ], AnalyticshubProjectsLocationsDataExchangesCreateSecurity.prototype, "option2", void 0);
    return AnalyticshubProjectsLocationsDataExchangesCreateSecurity;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesCreateSecurity };
var AnalyticshubProjectsLocationsDataExchangesCreateRequest = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesCreateRequest, _super);
    function AnalyticshubProjectsLocationsDataExchangesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AnalyticshubProjectsLocationsDataExchangesCreatePathParams)
    ], AnalyticshubProjectsLocationsDataExchangesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AnalyticshubProjectsLocationsDataExchangesCreateQueryParams)
    ], AnalyticshubProjectsLocationsDataExchangesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DataExchange)
    ], AnalyticshubProjectsLocationsDataExchangesCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AnalyticshubProjectsLocationsDataExchangesCreateSecurity)
    ], AnalyticshubProjectsLocationsDataExchangesCreateRequest.prototype, "security", void 0);
    return AnalyticshubProjectsLocationsDataExchangesCreateRequest;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesCreateRequest };
var AnalyticshubProjectsLocationsDataExchangesCreateResponse = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesCreateResponse, _super);
    function AnalyticshubProjectsLocationsDataExchangesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DataExchange)
    ], AnalyticshubProjectsLocationsDataExchangesCreateResponse.prototype, "dataExchange", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AnalyticshubProjectsLocationsDataExchangesCreateResponse.prototype, "statusCode", void 0);
    return AnalyticshubProjectsLocationsDataExchangesCreateResponse;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesCreateResponse };
