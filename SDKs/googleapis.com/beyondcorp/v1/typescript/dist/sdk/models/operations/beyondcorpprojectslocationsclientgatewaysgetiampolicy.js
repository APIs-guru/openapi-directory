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
var BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyPathParams, _super);
    function BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyPathParams.prototype, "resource", void 0);
    return BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyPathParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyPathParams };
var BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyQueryParams, _super);
    function BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=options.requestedPolicyVersion" }),
        __metadata("design:type", Number)
    ], BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyQueryParams.prototype, "optionsRequestedPolicyVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyQueryParams };
var BeyondcorpProjectsLocationsClientGatewaysGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsClientGatewaysGetIamPolicySecurity, _super);
    function BeyondcorpProjectsLocationsClientGatewaysGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BeyondcorpProjectsLocationsClientGatewaysGetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BeyondcorpProjectsLocationsClientGatewaysGetIamPolicySecurity.prototype, "oauth2c", void 0);
    return BeyondcorpProjectsLocationsClientGatewaysGetIamPolicySecurity;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsClientGatewaysGetIamPolicySecurity };
var BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyRequest, _super);
    function BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyPathParams)
    ], BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyQueryParams)
    ], BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BeyondcorpProjectsLocationsClientGatewaysGetIamPolicySecurity)
    ], BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyRequest.prototype, "security", void 0);
    return BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyRequest;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyRequest };
var BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyResponse, _super);
    function BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleIamV1Policy)
    ], BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyResponse.prototype, "googleIamV1Policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyResponse.prototype, "statusCode", void 0);
    return BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyResponse;
}(SpeakeasyBase));
export { BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyResponse };
