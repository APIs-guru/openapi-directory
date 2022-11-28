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
var BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigPathParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigPathParams, _super);
    function BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connector" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigPathParams.prototype, "connector", void 0);
    return BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigPathParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigPathParams };
var BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigQueryParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigQueryParams, _super);
    function BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigQueryParams.prototype, "uploadProtocol", void 0);
    return BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigQueryParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigQueryParams };
var BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigSecurity = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigSecurity, _super);
    function BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigSecurity.prototype, "oauth2c", void 0);
    return BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigSecurity;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigSecurity };
var BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigRequest = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigRequest, _super);
    function BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigPathParams)
    ], BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigQueryParams)
    ], BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigSecurity)
    ], BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigRequest.prototype, "security", void 0);
    return BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigRequest;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigRequest };
var BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigResponse = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigResponse, _super);
    function BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResolveInstanceConfigResponse)
    ], BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigResponse.prototype, "resolveInstanceConfigResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigResponse.prototype, "statusCode", void 0);
    return BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigResponse;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsConnectorsResolveInstanceConfigResponse };
