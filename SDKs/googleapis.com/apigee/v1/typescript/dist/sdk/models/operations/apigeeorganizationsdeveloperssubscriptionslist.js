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
var ApigeeOrganizationsDevelopersSubscriptionsListPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersSubscriptionsListPathParams, _super);
    function ApigeeOrganizationsDevelopersSubscriptionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersSubscriptionsListPathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsDevelopersSubscriptionsListPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersSubscriptionsListPathParams };
var ApigeeOrganizationsDevelopersSubscriptionsListQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersSubscriptionsListQueryParams, _super);
    function ApigeeOrganizationsDevelopersSubscriptionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersSubscriptionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersSubscriptionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersSubscriptionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersSubscriptionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsDevelopersSubscriptionsListQueryParams.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersSubscriptionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersSubscriptionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersSubscriptionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsDevelopersSubscriptionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersSubscriptionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startKey" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersSubscriptionsListQueryParams.prototype, "startKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersSubscriptionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersSubscriptionsListQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsDevelopersSubscriptionsListQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersSubscriptionsListQueryParams };
var ApigeeOrganizationsDevelopersSubscriptionsListSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersSubscriptionsListSecurity, _super);
    function ApigeeOrganizationsDevelopersSubscriptionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsDevelopersSubscriptionsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsDevelopersSubscriptionsListSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsDevelopersSubscriptionsListSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersSubscriptionsListSecurity };
var ApigeeOrganizationsDevelopersSubscriptionsListRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersSubscriptionsListRequest, _super);
    function ApigeeOrganizationsDevelopersSubscriptionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsDevelopersSubscriptionsListPathParams)
    ], ApigeeOrganizationsDevelopersSubscriptionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsDevelopersSubscriptionsListQueryParams)
    ], ApigeeOrganizationsDevelopersSubscriptionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsDevelopersSubscriptionsListSecurity)
    ], ApigeeOrganizationsDevelopersSubscriptionsListRequest.prototype, "security", void 0);
    return ApigeeOrganizationsDevelopersSubscriptionsListRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersSubscriptionsListRequest };
var ApigeeOrganizationsDevelopersSubscriptionsListResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsDevelopersSubscriptionsListResponse, _super);
    function ApigeeOrganizationsDevelopersSubscriptionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsDevelopersSubscriptionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse)
    ], ApigeeOrganizationsDevelopersSubscriptionsListResponse.prototype, "googleCloudApigeeV1ListDeveloperSubscriptionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsDevelopersSubscriptionsListResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsDevelopersSubscriptionsListResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsDevelopersSubscriptionsListResponse };
