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
var BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsPathParams, _super);
    function BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsPathParams.prototype, "resource", void 0);
    return BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsPathParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsPathParams };
var BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsQueryParams, _super);
    function BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsQueryParams.prototype, "uploadProtocol", void 0);
    return BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsQueryParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsQueryParams };
var BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsSecurity, _super);
    function BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsSecurity.prototype, "oauth2c", void 0);
    return BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsSecurity;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsSecurity };
var BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsRequest, _super);
    function BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsPathParams)
    ], BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsQueryParams)
    ], BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleIamV1TestIamPermissionsRequest)
    ], BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsSecurity)
    ], BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsRequest.prototype, "security", void 0);
    return BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsRequest;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsRequest };
var BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsResponse, _super);
    function BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleIamV1TestIamPermissionsResponse)
    ], BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsResponse.prototype, "googleIamV1TestIamPermissionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsResponse.prototype, "statusCode", void 0);
    return BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsResponse;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsNetConnectionsTestIamPermissionsResponse };
