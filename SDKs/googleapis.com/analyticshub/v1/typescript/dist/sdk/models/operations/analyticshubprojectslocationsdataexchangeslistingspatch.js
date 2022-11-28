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
var AnalyticshubProjectsLocationsDataExchangesListingsPatchPathParams = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListingsPatchPathParams, _super);
    function AnalyticshubProjectsLocationsDataExchangesListingsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsPatchPathParams.prototype, "name", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListingsPatchPathParams;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListingsPatchPathParams };
var AnalyticshubProjectsLocationsDataExchangesListingsPatchQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListingsPatchQueryParams, _super);
    function AnalyticshubProjectsLocationsDataExchangesListingsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticshubProjectsLocationsDataExchangesListingsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListingsPatchQueryParams;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListingsPatchQueryParams };
var AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurityOption1, _super);
    function AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurityOption1;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurityOption1 };
var AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurityOption2, _super);
    function AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurityOption2;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurityOption2 };
var AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurity = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurity, _super);
    function AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurityOption1)
    ], AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurityOption2)
    ], AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurity.prototype, "option2", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurity;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurity };
var AnalyticshubProjectsLocationsDataExchangesListingsPatchRequest = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListingsPatchRequest, _super);
    function AnalyticshubProjectsLocationsDataExchangesListingsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticshubProjectsLocationsDataExchangesListingsPatchPathParams)
    ], AnalyticshubProjectsLocationsDataExchangesListingsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticshubProjectsLocationsDataExchangesListingsPatchQueryParams)
    ], AnalyticshubProjectsLocationsDataExchangesListingsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListingInput)
    ], AnalyticshubProjectsLocationsDataExchangesListingsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurity)
    ], AnalyticshubProjectsLocationsDataExchangesListingsPatchRequest.prototype, "security", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListingsPatchRequest;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListingsPatchRequest };
var AnalyticshubProjectsLocationsDataExchangesListingsPatchResponse = /** @class */ (function (_super) {
    __extends(AnalyticshubProjectsLocationsDataExchangesListingsPatchResponse, _super);
    function AnalyticshubProjectsLocationsDataExchangesListingsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticshubProjectsLocationsDataExchangesListingsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Listing)
    ], AnalyticshubProjectsLocationsDataExchangesListingsPatchResponse.prototype, "listing", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticshubProjectsLocationsDataExchangesListingsPatchResponse.prototype, "statusCode", void 0);
    return AnalyticshubProjectsLocationsDataExchangesListingsPatchResponse;
}(SpeakeasyBase));
export { AnalyticshubProjectsLocationsDataExchangesListingsPatchResponse };
