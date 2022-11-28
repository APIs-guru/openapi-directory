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
var BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyPathParams, _super);
    function BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyPathParams.prototype, "resource", void 0);
    return BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyPathParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyPathParams };
var BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyQueryParams, _super);
    function BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyQueryParams };
var BeyondcorpProjectsLocationsNetConnectionsSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsNetConnectionsSetIamPolicySecurity, _super);
    function BeyondcorpProjectsLocationsNetConnectionsSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BeyondcorpProjectsLocationsNetConnectionsSetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BeyondcorpProjectsLocationsNetConnectionsSetIamPolicySecurity.prototype, "oauth2c", void 0);
    return BeyondcorpProjectsLocationsNetConnectionsSetIamPolicySecurity;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsNetConnectionsSetIamPolicySecurity };
var BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyRequest, _super);
    function BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyPathParams)
    ], BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyQueryParams)
    ], BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleIamV1SetIamPolicyRequest)
    ], BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsNetConnectionsSetIamPolicySecurity)
    ], BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyRequest.prototype, "security", void 0);
    return BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyRequest;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyRequest };
var BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyResponse, _super);
    function BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleIamV1Policy)
    ], BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyResponse.prototype, "googleIamV1Policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyResponse.prototype, "statusCode", void 0);
    return BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyResponse;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsNetConnectionsSetIamPolicyResponse };
