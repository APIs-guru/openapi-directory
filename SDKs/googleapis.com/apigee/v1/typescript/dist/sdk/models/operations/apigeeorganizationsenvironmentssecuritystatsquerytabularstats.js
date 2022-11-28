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
var ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsPathParams, _super);
    function ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orgenv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsPathParams.prototype, "orgenv", void 0);
    return ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsPathParams };
var ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsQueryParams, _super);
    function ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsQueryParams };
var ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsSecurity, _super);
    function ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsSecurity };
var ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsRequest, _super);
    function ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsPathParams)
    ], ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsQueryParams)
    ], ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudApigeeV1QueryTabularStatsRequest)
    ], ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsSecurity)
    ], ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsRequest.prototype, "security", void 0);
    return ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsRequest };
var ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsResponse, _super);
    function ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1QueryTabularStatsResponse)
    ], ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsResponse.prototype, "googleCloudApigeeV1QueryTabularStatsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsResponse };
