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
var BeyondcorpProjectsLocationsAppConnectorsListPathParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsAppConnectorsListPathParams, _super);
    function BeyondcorpProjectsLocationsAppConnectorsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectorsListPathParams.prototype, "parent", void 0);
    return BeyondcorpProjectsLocationsAppConnectorsListPathParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsAppConnectorsListPathParams };
var BeyondcorpProjectsLocationsAppConnectorsListQueryParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsAppConnectorsListQueryParams, _super);
    function BeyondcorpProjectsLocationsAppConnectorsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectorsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectorsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectorsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectorsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectorsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectorsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectorsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectorsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectorsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], BeyondcorpProjectsLocationsAppConnectorsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectorsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BeyondcorpProjectsLocationsAppConnectorsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectorsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectorsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectorsListQueryParams.prototype, "uploadProtocol", void 0);
    return BeyondcorpProjectsLocationsAppConnectorsListQueryParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsAppConnectorsListQueryParams };
var BeyondcorpProjectsLocationsAppConnectorsListSecurity = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsAppConnectorsListSecurity, _super);
    function BeyondcorpProjectsLocationsAppConnectorsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BeyondcorpProjectsLocationsAppConnectorsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BeyondcorpProjectsLocationsAppConnectorsListSecurity.prototype, "oauth2c", void 0);
    return BeyondcorpProjectsLocationsAppConnectorsListSecurity;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsAppConnectorsListSecurity };
var BeyondcorpProjectsLocationsAppConnectorsListRequest = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsAppConnectorsListRequest, _super);
    function BeyondcorpProjectsLocationsAppConnectorsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsAppConnectorsListPathParams)
    ], BeyondcorpProjectsLocationsAppConnectorsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsAppConnectorsListQueryParams)
    ], BeyondcorpProjectsLocationsAppConnectorsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsAppConnectorsListSecurity)
    ], BeyondcorpProjectsLocationsAppConnectorsListRequest.prototype, "security", void 0);
    return BeyondcorpProjectsLocationsAppConnectorsListRequest;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsAppConnectorsListRequest };
var BeyondcorpProjectsLocationsAppConnectorsListResponse = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsAppConnectorsListResponse, _super);
    function BeyondcorpProjectsLocationsAppConnectorsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectorsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse)
    ], BeyondcorpProjectsLocationsAppConnectorsListResponse.prototype, "googleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BeyondcorpProjectsLocationsAppConnectorsListResponse.prototype, "statusCode", void 0);
    return BeyondcorpProjectsLocationsAppConnectorsListResponse;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsAppConnectorsListResponse };
