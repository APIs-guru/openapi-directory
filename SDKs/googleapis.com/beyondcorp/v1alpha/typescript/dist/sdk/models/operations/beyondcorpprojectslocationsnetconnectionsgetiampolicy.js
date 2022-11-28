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
var BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyPathParams, _super);
    function BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyPathParams.prototype, "resource", void 0);
    return BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyPathParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyPathParams };
var BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyQueryParams, _super);
    function BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=options.requestedPolicyVersion" }),
        __metadata("design:type", Number)
    ], BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyQueryParams.prototype, "optionsRequestedPolicyVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyQueryParams };
var BeyondcorpProjectsLocationsNetConnectionsGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsNetConnectionsGetIamPolicySecurity, _super);
    function BeyondcorpProjectsLocationsNetConnectionsGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BeyondcorpProjectsLocationsNetConnectionsGetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BeyondcorpProjectsLocationsNetConnectionsGetIamPolicySecurity.prototype, "oauth2c", void 0);
    return BeyondcorpProjectsLocationsNetConnectionsGetIamPolicySecurity;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsNetConnectionsGetIamPolicySecurity };
var BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyRequest, _super);
    function BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyPathParams)
    ], BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyQueryParams)
    ], BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsNetConnectionsGetIamPolicySecurity)
    ], BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyRequest.prototype, "security", void 0);
    return BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyRequest;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyRequest };
var BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyResponse, _super);
    function BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleIamV1Policy)
    ], BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyResponse.prototype, "googleIamV1Policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyResponse.prototype, "statusCode", void 0);
    return BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyResponse;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsNetConnectionsGetIamPolicyResponse };
