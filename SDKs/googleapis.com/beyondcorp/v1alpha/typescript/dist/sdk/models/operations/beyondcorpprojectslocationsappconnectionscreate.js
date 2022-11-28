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
var BeyondcorpProjectsLocationsAppConnectionsCreatePathParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsAppConnectionsCreatePathParams, _super);
    function BeyondcorpProjectsLocationsAppConnectionsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectionsCreatePathParams.prototype, "parent", void 0);
    return BeyondcorpProjectsLocationsAppConnectionsCreatePathParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsAppConnectionsCreatePathParams };
var BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams, _super);
    function BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=appConnectionId" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams.prototype, "appConnectionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateOnly" }),
        __metadata("design:type", Boolean)
    ], BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams.prototype, "validateOnly", void 0);
    return BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams };
var BeyondcorpProjectsLocationsAppConnectionsCreateSecurity = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsAppConnectionsCreateSecurity, _super);
    function BeyondcorpProjectsLocationsAppConnectionsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BeyondcorpProjectsLocationsAppConnectionsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BeyondcorpProjectsLocationsAppConnectionsCreateSecurity.prototype, "oauth2c", void 0);
    return BeyondcorpProjectsLocationsAppConnectionsCreateSecurity;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsAppConnectionsCreateSecurity };
var BeyondcorpProjectsLocationsAppConnectionsCreateRequest = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsAppConnectionsCreateRequest, _super);
    function BeyondcorpProjectsLocationsAppConnectionsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsAppConnectionsCreatePathParams)
    ], BeyondcorpProjectsLocationsAppConnectionsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams)
    ], BeyondcorpProjectsLocationsAppConnectionsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionInput)
    ], BeyondcorpProjectsLocationsAppConnectionsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsAppConnectionsCreateSecurity)
    ], BeyondcorpProjectsLocationsAppConnectionsCreateRequest.prototype, "security", void 0);
    return BeyondcorpProjectsLocationsAppConnectionsCreateRequest;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsAppConnectionsCreateRequest };
var BeyondcorpProjectsLocationsAppConnectionsCreateResponse = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsAppConnectionsCreateResponse, _super);
    function BeyondcorpProjectsLocationsAppConnectionsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsAppConnectionsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], BeyondcorpProjectsLocationsAppConnectionsCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BeyondcorpProjectsLocationsAppConnectionsCreateResponse.prototype, "statusCode", void 0);
    return BeyondcorpProjectsLocationsAppConnectionsCreateResponse;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsAppConnectionsCreateResponse };
