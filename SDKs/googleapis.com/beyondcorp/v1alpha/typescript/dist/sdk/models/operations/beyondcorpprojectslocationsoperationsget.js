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
var BeyondcorpProjectsLocationsOperationsGetPathParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsOperationsGetPathParams, _super);
    function BeyondcorpProjectsLocationsOperationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsOperationsGetPathParams.prototype, "name", void 0);
    return BeyondcorpProjectsLocationsOperationsGetPathParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsOperationsGetPathParams };
export var BeyondcorpProjectsLocationsOperationsGetViewEnum;
(function (BeyondcorpProjectsLocationsOperationsGetViewEnum) {
    BeyondcorpProjectsLocationsOperationsGetViewEnum["InsightViewUnspecified"] = "INSIGHT_VIEW_UNSPECIFIED";
    BeyondcorpProjectsLocationsOperationsGetViewEnum["Basic"] = "BASIC";
    BeyondcorpProjectsLocationsOperationsGetViewEnum["Full"] = "FULL";
})(BeyondcorpProjectsLocationsOperationsGetViewEnum || (BeyondcorpProjectsLocationsOperationsGetViewEnum = {}));
var BeyondcorpProjectsLocationsOperationsGetQueryParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsOperationsGetQueryParams, _super);
    function BeyondcorpProjectsLocationsOperationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsOperationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsOperationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsOperationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsOperationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsOperationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsOperationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsOperationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BeyondcorpProjectsLocationsOperationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsOperationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsOperationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsOperationsGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsOperationsGetQueryParams.prototype, "view", void 0);
    return BeyondcorpProjectsLocationsOperationsGetQueryParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsOperationsGetQueryParams };
var BeyondcorpProjectsLocationsOperationsGetSecurity = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsOperationsGetSecurity, _super);
    function BeyondcorpProjectsLocationsOperationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BeyondcorpProjectsLocationsOperationsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BeyondcorpProjectsLocationsOperationsGetSecurity.prototype, "oauth2c", void 0);
    return BeyondcorpProjectsLocationsOperationsGetSecurity;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsOperationsGetSecurity };
var BeyondcorpProjectsLocationsOperationsGetRequest = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsOperationsGetRequest, _super);
    function BeyondcorpProjectsLocationsOperationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsOperationsGetPathParams)
    ], BeyondcorpProjectsLocationsOperationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsOperationsGetQueryParams)
    ], BeyondcorpProjectsLocationsOperationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsOperationsGetSecurity)
    ], BeyondcorpProjectsLocationsOperationsGetRequest.prototype, "security", void 0);
    return BeyondcorpProjectsLocationsOperationsGetRequest;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsOperationsGetRequest };
var BeyondcorpProjectsLocationsOperationsGetResponse = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsOperationsGetResponse, _super);
    function BeyondcorpProjectsLocationsOperationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsOperationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], BeyondcorpProjectsLocationsOperationsGetResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BeyondcorpProjectsLocationsOperationsGetResponse.prototype, "statusCode", void 0);
    return BeyondcorpProjectsLocationsOperationsGetResponse;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsOperationsGetResponse };
