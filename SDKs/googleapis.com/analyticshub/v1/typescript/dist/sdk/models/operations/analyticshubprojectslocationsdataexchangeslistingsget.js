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
var AnalyticshubProjectsLocationsDataExchangesListingsGetPathParams = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListingsGetPathParams, _super);
    function AnalyticshubProjectsLocationsDataExchangesListingsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetPathParams.prototype, "name", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListingsGetPathParams;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListingsGetPathParams };
var AnalyticshubProjectsLocationsDataExchangesListingsGetQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListingsGetQueryParams, _super);
    function AnalyticshubProjectsLocationsDataExchangesListingsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListingsGetQueryParams;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListingsGetQueryParams };
var AnalyticshubProjectsLocationsDataExchangesListingsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListingsGetSecurityOption1, _super);
    function AnalyticshubProjectsLocationsDataExchangesListingsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListingsGetSecurityOption1;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListingsGetSecurityOption1 };
var AnalyticshubProjectsLocationsDataExchangesListingsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListingsGetSecurityOption2, _super);
    function AnalyticshubProjectsLocationsDataExchangesListingsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListingsGetSecurityOption2;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListingsGetSecurityOption2 };
var AnalyticshubProjectsLocationsDataExchangesListingsGetSecurity = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListingsGetSecurity, _super);
    function AnalyticshubProjectsLocationsDataExchangesListingsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticshubProjectsLocationsDataExchangesListingsGetSecurityOption1)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticshubProjectsLocationsDataExchangesListingsGetSecurityOption2)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetSecurity.prototype, "option2", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListingsGetSecurity;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListingsGetSecurity };
var AnalyticshubProjectsLocationsDataExchangesListingsGetRequest = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListingsGetRequest, _super);
    function AnalyticshubProjectsLocationsDataExchangesListingsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticshubProjectsLocationsDataExchangesListingsGetPathParams)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticshubProjectsLocationsDataExchangesListingsGetQueryParams)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticshubProjectsLocationsDataExchangesListingsGetSecurity)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetRequest.prototype, "security", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListingsGetRequest;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListingsGetRequest };
var AnalyticshubProjectsLocationsDataExchangesListingsGetResponse = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListingsGetResponse, _super);
    function AnalyticshubProjectsLocationsDataExchangesListingsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Listing)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetResponse.prototype, "listing", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticshubProjectsLocationsDataExchangesListingsGetResponse.prototype, "statusCode", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListingsGetResponse;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListingsGetResponse };
