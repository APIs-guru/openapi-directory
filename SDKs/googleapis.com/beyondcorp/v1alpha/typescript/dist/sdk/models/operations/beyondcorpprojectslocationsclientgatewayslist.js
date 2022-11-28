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
var BeyondcorpProjectsLocationsClientGatewaysListPathParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsClientGatewaysListPathParams, _super);
    function BeyondcorpProjectsLocationsClientGatewaysListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysListPathParams.prototype, "parent", void 0);
    return BeyondcorpProjectsLocationsClientGatewaysListPathParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsClientGatewaysListPathParams };
var BeyondcorpProjectsLocationsClientGatewaysListQueryParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsClientGatewaysListQueryParams, _super);
    function BeyondcorpProjectsLocationsClientGatewaysListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], BeyondcorpProjectsLocationsClientGatewaysListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BeyondcorpProjectsLocationsClientGatewaysListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysListQueryParams.prototype, "uploadProtocol", void 0);
    return BeyondcorpProjectsLocationsClientGatewaysListQueryParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsClientGatewaysListQueryParams };
var BeyondcorpProjectsLocationsClientGatewaysListSecurity = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsClientGatewaysListSecurity, _super);
    function BeyondcorpProjectsLocationsClientGatewaysListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BeyondcorpProjectsLocationsClientGatewaysListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BeyondcorpProjectsLocationsClientGatewaysListSecurity.prototype, "oauth2c", void 0);
    return BeyondcorpProjectsLocationsClientGatewaysListSecurity;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsClientGatewaysListSecurity };
var BeyondcorpProjectsLocationsClientGatewaysListRequest = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsClientGatewaysListRequest, _super);
    function BeyondcorpProjectsLocationsClientGatewaysListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsClientGatewaysListPathParams)
    ], BeyondcorpProjectsLocationsClientGatewaysListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsClientGatewaysListQueryParams)
    ], BeyondcorpProjectsLocationsClientGatewaysListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsClientGatewaysListSecurity)
    ], BeyondcorpProjectsLocationsClientGatewaysListRequest.prototype, "security", void 0);
    return BeyondcorpProjectsLocationsClientGatewaysListRequest;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsClientGatewaysListRequest };
var BeyondcorpProjectsLocationsClientGatewaysListResponse = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsClientGatewaysListResponse, _super);
    function BeyondcorpProjectsLocationsClientGatewaysListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListClientGatewaysResponse)
    ], BeyondcorpProjectsLocationsClientGatewaysListResponse.prototype, "listClientGatewaysResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BeyondcorpProjectsLocationsClientGatewaysListResponse.prototype, "statusCode", void 0);
    return BeyondcorpProjectsLocationsClientGatewaysListResponse;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsClientGatewaysListResponse };
