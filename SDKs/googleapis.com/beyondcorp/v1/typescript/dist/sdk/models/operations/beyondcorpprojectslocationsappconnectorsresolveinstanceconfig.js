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
var BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigPathParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigPathParams, _super);
    function BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appConnector" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigPathParams.prototype, "appConnector", void 0);
    return BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigPathParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigPathParams };
var BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigQueryParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigQueryParams, _super);
    function BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigQueryParams.prototype, "uploadProtocol", void 0);
    return BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigQueryParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigQueryParams };
var BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigSecurity = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigSecurity, _super);
    function BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigSecurity.prototype, "oauth2c", void 0);
    return BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigSecurity;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigSecurity };
var BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigRequest = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigRequest, _super);
    function BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigPathParams)
    ], BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigQueryParams)
    ], BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigSecurity)
    ], BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigRequest.prototype, "security", void 0);
    return BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigRequest;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigRequest };
var BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigResponse = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigResponse, _super);
    function BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudBeyondcorpAppconnectorsV1ResolveInstanceConfigResponse)
    ], BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigResponse.prototype, "googleCloudBeyondcorpAppconnectorsV1ResolveInstanceConfigResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigResponse.prototype, "statusCode", void 0);
    return BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigResponse;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigResponse };
