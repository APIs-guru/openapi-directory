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
var BeyondcorpProjectsLocationsConnectionsResolvePathParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsConnectionsResolvePathParams, _super);
    function BeyondcorpProjectsLocationsConnectionsResolvePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectionsResolvePathParams.prototype, "parent", void 0);
    return BeyondcorpProjectsLocationsConnectionsResolvePathParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsConnectionsResolvePathParams };
var BeyondcorpProjectsLocationsConnectionsResolveQueryParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsConnectionsResolveQueryParams, _super);
    function BeyondcorpProjectsLocationsConnectionsResolveQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectionsResolveQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectionsResolveQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectionsResolveQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectionsResolveQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=connectorId" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectionsResolveQueryParams.prototype, "connectorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectionsResolveQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectionsResolveQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectionsResolveQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], BeyondcorpProjectsLocationsConnectionsResolveQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectionsResolveQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BeyondcorpProjectsLocationsConnectionsResolveQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectionsResolveQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectionsResolveQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectionsResolveQueryParams.prototype, "uploadProtocol", void 0);
    return BeyondcorpProjectsLocationsConnectionsResolveQueryParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsConnectionsResolveQueryParams };
var BeyondcorpProjectsLocationsConnectionsResolveSecurity = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsConnectionsResolveSecurity, _super);
    function BeyondcorpProjectsLocationsConnectionsResolveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BeyondcorpProjectsLocationsConnectionsResolveSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BeyondcorpProjectsLocationsConnectionsResolveSecurity.prototype, "oauth2c", void 0);
    return BeyondcorpProjectsLocationsConnectionsResolveSecurity;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsConnectionsResolveSecurity };
var BeyondcorpProjectsLocationsConnectionsResolveRequest = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsConnectionsResolveRequest, _super);
    function BeyondcorpProjectsLocationsConnectionsResolveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsConnectionsResolvePathParams)
    ], BeyondcorpProjectsLocationsConnectionsResolveRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsConnectionsResolveQueryParams)
    ], BeyondcorpProjectsLocationsConnectionsResolveRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsConnectionsResolveSecurity)
    ], BeyondcorpProjectsLocationsConnectionsResolveRequest.prototype, "security", void 0);
    return BeyondcorpProjectsLocationsConnectionsResolveRequest;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsConnectionsResolveRequest };
var BeyondcorpProjectsLocationsConnectionsResolveResponse = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsConnectionsResolveResponse, _super);
    function BeyondcorpProjectsLocationsConnectionsResolveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectionsResolveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResolveConnectionsResponse)
    ], BeyondcorpProjectsLocationsConnectionsResolveResponse.prototype, "resolveConnectionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BeyondcorpProjectsLocationsConnectionsResolveResponse.prototype, "statusCode", void 0);
    return BeyondcorpProjectsLocationsConnectionsResolveResponse;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsConnectionsResolveResponse };
