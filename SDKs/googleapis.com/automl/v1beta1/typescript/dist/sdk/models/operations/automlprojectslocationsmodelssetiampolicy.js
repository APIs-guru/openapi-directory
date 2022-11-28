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
var AutomlProjectsLocationsModelsSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsModelsSetIamPolicyPathParams, _super);
    function AutomlProjectsLocationsModelsSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsSetIamPolicyPathParams.prototype, "resource", void 0);
    return AutomlProjectsLocationsModelsSetIamPolicyPathParams;
}(SpeakeasyBase));
export { AutomlProjectsLocationsModelsSetIamPolicyPathParams };
var AutomlProjectsLocationsModelsSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsModelsSetIamPolicyQueryParams, _super);
    function AutomlProjectsLocationsModelsSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsSetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsSetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsSetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AutomlProjectsLocationsModelsSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsSetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return AutomlProjectsLocationsModelsSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { AutomlProjectsLocationsModelsSetIamPolicyQueryParams };
var AutomlProjectsLocationsModelsSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsModelsSetIamPolicySecurity, _super);
    function AutomlProjectsLocationsModelsSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AutomlProjectsLocationsModelsSetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AutomlProjectsLocationsModelsSetIamPolicySecurity.prototype, "oauth2c", void 0);
    return AutomlProjectsLocationsModelsSetIamPolicySecurity;
}(SpeakeasyBase));
export { AutomlProjectsLocationsModelsSetIamPolicySecurity };
var AutomlProjectsLocationsModelsSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsModelsSetIamPolicyRequest, _super);
    function AutomlProjectsLocationsModelsSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AutomlProjectsLocationsModelsSetIamPolicyPathParams)
    ], AutomlProjectsLocationsModelsSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AutomlProjectsLocationsModelsSetIamPolicyQueryParams)
    ], AutomlProjectsLocationsModelsSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetIamPolicyRequest)
    ], AutomlProjectsLocationsModelsSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AutomlProjectsLocationsModelsSetIamPolicySecurity)
    ], AutomlProjectsLocationsModelsSetIamPolicyRequest.prototype, "security", void 0);
    return AutomlProjectsLocationsModelsSetIamPolicyRequest;
}(SpeakeasyBase));
export { AutomlProjectsLocationsModelsSetIamPolicyRequest };
var AutomlProjectsLocationsModelsSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsModelsSetIamPolicyResponse, _super);
    function AutomlProjectsLocationsModelsSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], AutomlProjectsLocationsModelsSetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AutomlProjectsLocationsModelsSetIamPolicyResponse.prototype, "statusCode", void 0);
    return AutomlProjectsLocationsModelsSetIamPolicyResponse;
}(SpeakeasyBase));
export { AutomlProjectsLocationsModelsSetIamPolicyResponse };
