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
var AnalyticshubProjectsLocationsDataExchangesListingsDeletePathParams = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListingsDeletePathParams, _super);
    function AnalyticshubProjectsLocationsDataExchangesListingsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsDeletePathParams.prototype, "name", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListingsDeletePathParams;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListingsDeletePathParams };
var AnalyticshubProjectsLocationsDataExchangesListingsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListingsDeleteQueryParams, _super);
    function AnalyticshubProjectsLocationsDataExchangesListingsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticshubProjectsLocationsDataExchangesListingsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListingsDeleteQueryParams;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListingsDeleteQueryParams };
var AnalyticshubProjectsLocationsDataExchangesListingsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListingsDeleteSecurityOption1, _super);
    function AnalyticshubProjectsLocationsDataExchangesListingsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticshubProjectsLocationsDataExchangesListingsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticshubProjectsLocationsDataExchangesListingsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListingsDeleteSecurityOption1;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListingsDeleteSecurityOption1 };
var AnalyticshubProjectsLocationsDataExchangesListingsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListingsDeleteSecurityOption2, _super);
    function AnalyticshubProjectsLocationsDataExchangesListingsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticshubProjectsLocationsDataExchangesListingsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticshubProjectsLocationsDataExchangesListingsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListingsDeleteSecurityOption2;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListingsDeleteSecurityOption2 };
var AnalyticshubProjectsLocationsDataExchangesListingsDeleteSecurity = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListingsDeleteSecurity, _super);
    function AnalyticshubProjectsLocationsDataExchangesListingsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticshubProjectsLocationsDataExchangesListingsDeleteSecurityOption1)
    ], AnalyticshubProjectsLocationsDataExchangesListingsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticshubProjectsLocationsDataExchangesListingsDeleteSecurityOption2)
    ], AnalyticshubProjectsLocationsDataExchangesListingsDeleteSecurity.prototype, "option2", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListingsDeleteSecurity;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListingsDeleteSecurity };
var AnalyticshubProjectsLocationsDataExchangesListingsDeleteRequest = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListingsDeleteRequest, _super);
    function AnalyticshubProjectsLocationsDataExchangesListingsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticshubProjectsLocationsDataExchangesListingsDeletePathParams)
    ], AnalyticshubProjectsLocationsDataExchangesListingsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticshubProjectsLocationsDataExchangesListingsDeleteQueryParams)
    ], AnalyticshubProjectsLocationsDataExchangesListingsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticshubProjectsLocationsDataExchangesListingsDeleteSecurity)
    ], AnalyticshubProjectsLocationsDataExchangesListingsDeleteRequest.prototype, "security", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListingsDeleteRequest;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListingsDeleteRequest };
var AnalyticshubProjectsLocationsDataExchangesListingsDeleteResponse = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListingsDeleteResponse, _super);
    function AnalyticshubProjectsLocationsDataExchangesListingsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], AnalyticshubProjectsLocationsDataExchangesListingsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticshubProjectsLocationsDataExchangesListingsDeleteResponse.prototype, "statusCode", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListingsDeleteResponse;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListingsDeleteResponse };
