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
var BeyondcorpProjectsLocationsClientConnectorServicesListPathParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsClientConnectorServicesListPathParams, _super);
    function BeyondcorpProjectsLocationsClientConnectorServicesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientConnectorServicesListPathParams.prototype, "parent", void 0);
    return BeyondcorpProjectsLocationsClientConnectorServicesListPathParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsClientConnectorServicesListPathParams };
var BeyondcorpProjectsLocationsClientConnectorServicesListQueryParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsClientConnectorServicesListQueryParams, _super);
    function BeyondcorpProjectsLocationsClientConnectorServicesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientConnectorServicesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientConnectorServicesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientConnectorServicesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientConnectorServicesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientConnectorServicesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientConnectorServicesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientConnectorServicesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientConnectorServicesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientConnectorServicesListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], BeyondcorpProjectsLocationsClientConnectorServicesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientConnectorServicesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BeyondcorpProjectsLocationsClientConnectorServicesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientConnectorServicesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientConnectorServicesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientConnectorServicesListQueryParams.prototype, "uploadProtocol", void 0);
    return BeyondcorpProjectsLocationsClientConnectorServicesListQueryParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsClientConnectorServicesListQueryParams };
var BeyondcorpProjectsLocationsClientConnectorServicesListSecurity = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsClientConnectorServicesListSecurity, _super);
    function BeyondcorpProjectsLocationsClientConnectorServicesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BeyondcorpProjectsLocationsClientConnectorServicesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BeyondcorpProjectsLocationsClientConnectorServicesListSecurity.prototype, "oauth2c", void 0);
    return BeyondcorpProjectsLocationsClientConnectorServicesListSecurity;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsClientConnectorServicesListSecurity };
var BeyondcorpProjectsLocationsClientConnectorServicesListRequest = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsClientConnectorServicesListRequest, _super);
    function BeyondcorpProjectsLocationsClientConnectorServicesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsClientConnectorServicesListPathParams)
    ], BeyondcorpProjectsLocationsClientConnectorServicesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsClientConnectorServicesListQueryParams)
    ], BeyondcorpProjectsLocationsClientConnectorServicesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsClientConnectorServicesListSecurity)
    ], BeyondcorpProjectsLocationsClientConnectorServicesListRequest.prototype, "security", void 0);
    return BeyondcorpProjectsLocationsClientConnectorServicesListRequest;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsClientConnectorServicesListRequest };
var BeyondcorpProjectsLocationsClientConnectorServicesListResponse = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsClientConnectorServicesListResponse, _super);
    function BeyondcorpProjectsLocationsClientConnectorServicesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientConnectorServicesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListClientConnectorServicesResponse)
    ], BeyondcorpProjectsLocationsClientConnectorServicesListResponse.prototype, "listClientConnectorServicesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BeyondcorpProjectsLocationsClientConnectorServicesListResponse.prototype, "statusCode", void 0);
    return BeyondcorpProjectsLocationsClientConnectorServicesListResponse;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsClientConnectorServicesListResponse };
