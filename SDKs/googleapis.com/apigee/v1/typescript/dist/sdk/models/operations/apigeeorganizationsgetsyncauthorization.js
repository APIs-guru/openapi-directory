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
var ApigeeOrganizationsGetSyncAuthorizationPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsGetSyncAuthorizationPathParams, _super);
    function ApigeeOrganizationsGetSyncAuthorizationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsGetSyncAuthorizationPathParams.prototype, "name", void 0);
    return ApigeeOrganizationsGetSyncAuthorizationPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsGetSyncAuthorizationPathParams };
var ApigeeOrganizationsGetSyncAuthorizationQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsGetSyncAuthorizationQueryParams, _super);
    function ApigeeOrganizationsGetSyncAuthorizationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsGetSyncAuthorizationQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsGetSyncAuthorizationQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsGetSyncAuthorizationQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsGetSyncAuthorizationQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsGetSyncAuthorizationQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsGetSyncAuthorizationQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsGetSyncAuthorizationQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsGetSyncAuthorizationQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsGetSyncAuthorizationQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsGetSyncAuthorizationQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsGetSyncAuthorizationQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsGetSyncAuthorizationQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsGetSyncAuthorizationQueryParams };
var ApigeeOrganizationsGetSyncAuthorizationSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsGetSyncAuthorizationSecurity, _super);
    function ApigeeOrganizationsGetSyncAuthorizationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsGetSyncAuthorizationSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsGetSyncAuthorizationSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsGetSyncAuthorizationSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsGetSyncAuthorizationSecurity };
var ApigeeOrganizationsGetSyncAuthorizationRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsGetSyncAuthorizationRequest, _super);
    function ApigeeOrganizationsGetSyncAuthorizationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsGetSyncAuthorizationPathParams)
    ], ApigeeOrganizationsGetSyncAuthorizationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsGetSyncAuthorizationQueryParams)
    ], ApigeeOrganizationsGetSyncAuthorizationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], ApigeeOrganizationsGetSyncAuthorizationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsGetSyncAuthorizationSecurity)
    ], ApigeeOrganizationsGetSyncAuthorizationRequest.prototype, "security", void 0);
    return ApigeeOrganizationsGetSyncAuthorizationRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsGetSyncAuthorizationRequest };
var ApigeeOrganizationsGetSyncAuthorizationResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsGetSyncAuthorizationResponse, _super);
    function ApigeeOrganizationsGetSyncAuthorizationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsGetSyncAuthorizationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1SyncAuthorization)
    ], ApigeeOrganizationsGetSyncAuthorizationResponse.prototype, "googleCloudApigeeV1SyncAuthorization", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsGetSyncAuthorizationResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsGetSyncAuthorizationResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsGetSyncAuthorizationResponse };
