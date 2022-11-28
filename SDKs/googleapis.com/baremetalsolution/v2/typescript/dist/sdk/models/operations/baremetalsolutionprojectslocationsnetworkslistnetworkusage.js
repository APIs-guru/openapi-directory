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
var BaremetalsolutionProjectsLocationsNetworksListNetworkUsagePathParams = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsNetworksListNetworkUsagePathParams, _super);
    function BaremetalsolutionProjectsLocationsNetworksListNetworkUsagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsNetworksListNetworkUsagePathParams.prototype, "location", void 0);
    return BaremetalsolutionProjectsLocationsNetworksListNetworkUsagePathParams;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsNetworksListNetworkUsagePathParams };
var BaremetalsolutionProjectsLocationsNetworksListNetworkUsageQueryParams = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsNetworksListNetworkUsageQueryParams, _super);
    function BaremetalsolutionProjectsLocationsNetworksListNetworkUsageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsNetworksListNetworkUsageQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsNetworksListNetworkUsageQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsNetworksListNetworkUsageQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsNetworksListNetworkUsageQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsNetworksListNetworkUsageQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsNetworksListNetworkUsageQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsNetworksListNetworkUsageQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BaremetalsolutionProjectsLocationsNetworksListNetworkUsageQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsNetworksListNetworkUsageQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsNetworksListNetworkUsageQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsNetworksListNetworkUsageQueryParams.prototype, "uploadProtocol", void 0);
    return BaremetalsolutionProjectsLocationsNetworksListNetworkUsageQueryParams;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsNetworksListNetworkUsageQueryParams };
var BaremetalsolutionProjectsLocationsNetworksListNetworkUsageSecurity = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsNetworksListNetworkUsageSecurity, _super);
    function BaremetalsolutionProjectsLocationsNetworksListNetworkUsageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BaremetalsolutionProjectsLocationsNetworksListNetworkUsageSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BaremetalsolutionProjectsLocationsNetworksListNetworkUsageSecurity.prototype, "oauth2c", void 0);
    return BaremetalsolutionProjectsLocationsNetworksListNetworkUsageSecurity;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsNetworksListNetworkUsageSecurity };
var BaremetalsolutionProjectsLocationsNetworksListNetworkUsageRequest = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsNetworksListNetworkUsageRequest, _super);
    function BaremetalsolutionProjectsLocationsNetworksListNetworkUsageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaremetalsolutionProjectsLocationsNetworksListNetworkUsagePathParams)
    ], BaremetalsolutionProjectsLocationsNetworksListNetworkUsageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaremetalsolutionProjectsLocationsNetworksListNetworkUsageQueryParams)
    ], BaremetalsolutionProjectsLocationsNetworksListNetworkUsageRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaremetalsolutionProjectsLocationsNetworksListNetworkUsageSecurity)
    ], BaremetalsolutionProjectsLocationsNetworksListNetworkUsageRequest.prototype, "security", void 0);
    return BaremetalsolutionProjectsLocationsNetworksListNetworkUsageRequest;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsNetworksListNetworkUsageRequest };
var BaremetalsolutionProjectsLocationsNetworksListNetworkUsageResponse = /** @class */ (function (_super) {
    __extends(BaremetalsolutionProjectsLocationsNetworksListNetworkUsageResponse, _super);
    function BaremetalsolutionProjectsLocationsNetworksListNetworkUsageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BaremetalsolutionProjectsLocationsNetworksListNetworkUsageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListNetworkUsageResponse)
    ], BaremetalsolutionProjectsLocationsNetworksListNetworkUsageResponse.prototype, "listNetworkUsageResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BaremetalsolutionProjectsLocationsNetworksListNetworkUsageResponse.prototype, "statusCode", void 0);
    return BaremetalsolutionProjectsLocationsNetworksListNetworkUsageResponse;
}(SpeakeasyBase));
export { BaremetalsolutionProjectsLocationsNetworksListNetworkUsageResponse };
