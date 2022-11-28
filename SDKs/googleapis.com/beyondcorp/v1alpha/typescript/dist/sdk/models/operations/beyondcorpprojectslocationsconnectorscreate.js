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
var BeyondcorpProjectsLocationsConnectorsCreatePathParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsConnectorsCreatePathParams, _super);
    function BeyondcorpProjectsLocationsConnectorsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsCreatePathParams.prototype, "parent", void 0);
    return BeyondcorpProjectsLocationsConnectorsCreatePathParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsConnectorsCreatePathParams };
var BeyondcorpProjectsLocationsConnectorsCreateQueryParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsConnectorsCreateQueryParams, _super);
    function BeyondcorpProjectsLocationsConnectorsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=connectorId" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsCreateQueryParams.prototype, "connectorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BeyondcorpProjectsLocationsConnectorsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsCreateQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateOnly" }),
        __metadata("design:type", Boolean)
    ], BeyondcorpProjectsLocationsConnectorsCreateQueryParams.prototype, "validateOnly", void 0);
    return BeyondcorpProjectsLocationsConnectorsCreateQueryParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsConnectorsCreateQueryParams };
var BeyondcorpProjectsLocationsConnectorsCreateSecurity = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsConnectorsCreateSecurity, _super);
    function BeyondcorpProjectsLocationsConnectorsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BeyondcorpProjectsLocationsConnectorsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BeyondcorpProjectsLocationsConnectorsCreateSecurity.prototype, "oauth2c", void 0);
    return BeyondcorpProjectsLocationsConnectorsCreateSecurity;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsConnectorsCreateSecurity };
var BeyondcorpProjectsLocationsConnectorsCreateRequest = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsConnectorsCreateRequest, _super);
    function BeyondcorpProjectsLocationsConnectorsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsConnectorsCreatePathParams)
    ], BeyondcorpProjectsLocationsConnectorsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsConnectorsCreateQueryParams)
    ], BeyondcorpProjectsLocationsConnectorsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ConnectorInput)
    ], BeyondcorpProjectsLocationsConnectorsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsConnectorsCreateSecurity)
    ], BeyondcorpProjectsLocationsConnectorsCreateRequest.prototype, "security", void 0);
    return BeyondcorpProjectsLocationsConnectorsCreateRequest;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsConnectorsCreateRequest };
var BeyondcorpProjectsLocationsConnectorsCreateResponse = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsConnectorsCreateResponse, _super);
    function BeyondcorpProjectsLocationsConnectorsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsConnectorsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], BeyondcorpProjectsLocationsConnectorsCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BeyondcorpProjectsLocationsConnectorsCreateResponse.prototype, "statusCode", void 0);
    return BeyondcorpProjectsLocationsConnectorsCreateResponse;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsConnectorsCreateResponse };
