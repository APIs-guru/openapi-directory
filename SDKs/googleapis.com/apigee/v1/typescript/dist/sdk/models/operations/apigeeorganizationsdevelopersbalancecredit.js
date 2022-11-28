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
var ApigeeOrganizationsDevelopersBalanceCreditPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersBalanceCreditPathParams, _super);
    function ApigeeOrganizationsDevelopersBalanceCreditPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersBalanceCreditPathParams.prototype, "name", void 0);
    return ApigeeOrganizationsDevelopersBalanceCreditPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersBalanceCreditPathParams };
var ApigeeOrganizationsDevelopersBalanceCreditQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersBalanceCreditQueryParams, _super);
    function ApigeeOrganizationsDevelopersBalanceCreditQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersBalanceCreditQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersBalanceCreditQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersBalanceCreditQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersBalanceCreditQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersBalanceCreditQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersBalanceCreditQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersBalanceCreditQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsDevelopersBalanceCreditQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersBalanceCreditQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersBalanceCreditQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersBalanceCreditQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsDevelopersBalanceCreditQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersBalanceCreditQueryParams };
var ApigeeOrganizationsDevelopersBalanceCreditSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersBalanceCreditSecurity, _super);
    function ApigeeOrganizationsDevelopersBalanceCreditSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsDevelopersBalanceCreditSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsDevelopersBalanceCreditSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsDevelopersBalanceCreditSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersBalanceCreditSecurity };
var ApigeeOrganizationsDevelopersBalanceCreditRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersBalanceCreditRequest, _super);
    function ApigeeOrganizationsDevelopersBalanceCreditRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsDevelopersBalanceCreditPathParams)
    ], ApigeeOrganizationsDevelopersBalanceCreditRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsDevelopersBalanceCreditQueryParams)
    ], ApigeeOrganizationsDevelopersBalanceCreditRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudApigeeV1CreditDeveloperBalanceRequest)
    ], ApigeeOrganizationsDevelopersBalanceCreditRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsDevelopersBalanceCreditSecurity)
    ], ApigeeOrganizationsDevelopersBalanceCreditRequest.prototype, "security", void 0);
    return ApigeeOrganizationsDevelopersBalanceCreditRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersBalanceCreditRequest };
var ApigeeOrganizationsDevelopersBalanceCreditResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersBalanceCreditResponse, _super);
    function ApigeeOrganizationsDevelopersBalanceCreditResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersBalanceCreditResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1DeveloperBalance)
    ], ApigeeOrganizationsDevelopersBalanceCreditResponse.prototype, "googleCloudApigeeV1DeveloperBalance", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsDevelopersBalanceCreditResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsDevelopersBalanceCreditResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersBalanceCreditResponse };
