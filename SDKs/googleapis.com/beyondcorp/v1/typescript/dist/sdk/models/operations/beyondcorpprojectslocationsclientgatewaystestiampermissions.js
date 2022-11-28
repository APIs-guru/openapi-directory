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
var BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsPathParams, _super);
    function BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsPathParams.prototype, "resource", void 0);
    return BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsPathParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsPathParams };
var BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsQueryParams, _super);
    function BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsQueryParams.prototype, "uploadProtocol", void 0);
    return BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsQueryParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsQueryParams };
var BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsSecurity, _super);
    function BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsSecurity.prototype, "oauth2c", void 0);
    return BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsSecurity;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsSecurity };
var BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsRequest, _super);
    function BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsPathParams)
    ], BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsQueryParams)
    ], BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleIamV1TestIamPermissionsRequest)
    ], BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsSecurity)
    ], BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsRequest.prototype, "security", void 0);
    return BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsRequest;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsRequest };
var BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsResponse, _super);
    function BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleIamV1TestIamPermissionsResponse)
    ], BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsResponse.prototype, "googleIamV1TestIamPermissionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsResponse.prototype, "statusCode", void 0);
    return BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsResponse;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsResponse };
