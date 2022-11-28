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
var ApigeeOrganizationsAnalyticsDatastoresTestPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsAnalyticsDatastoresTestPathParams, _super);
    function ApigeeOrganizationsAnalyticsDatastoresTestPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsAnalyticsDatastoresTestPathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsAnalyticsDatastoresTestPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsAnalyticsDatastoresTestPathParams };
var ApigeeOrganizationsAnalyticsDatastoresTestQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsAnalyticsDatastoresTestQueryParams, _super);
    function ApigeeOrganizationsAnalyticsDatastoresTestQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsAnalyticsDatastoresTestQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsAnalyticsDatastoresTestQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsAnalyticsDatastoresTestQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsAnalyticsDatastoresTestQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsAnalyticsDatastoresTestQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsAnalyticsDatastoresTestQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsAnalyticsDatastoresTestQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsAnalyticsDatastoresTestQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsAnalyticsDatastoresTestQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsAnalyticsDatastoresTestQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsAnalyticsDatastoresTestQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsAnalyticsDatastoresTestQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsAnalyticsDatastoresTestQueryParams };
var ApigeeOrganizationsAnalyticsDatastoresTestSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsAnalyticsDatastoresTestSecurity, _super);
    function ApigeeOrganizationsAnalyticsDatastoresTestSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsAnalyticsDatastoresTestSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsAnalyticsDatastoresTestSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsAnalyticsDatastoresTestSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsAnalyticsDatastoresTestSecurity };
var ApigeeOrganizationsAnalyticsDatastoresTestRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsAnalyticsDatastoresTestRequest, _super);
    function ApigeeOrganizationsAnalyticsDatastoresTestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsAnalyticsDatastoresTestPathParams)
    ], ApigeeOrganizationsAnalyticsDatastoresTestRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsAnalyticsDatastoresTestQueryParams)
    ], ApigeeOrganizationsAnalyticsDatastoresTestRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudApigeeV1DatastoreInput)
    ], ApigeeOrganizationsAnalyticsDatastoresTestRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsAnalyticsDatastoresTestSecurity)
    ], ApigeeOrganizationsAnalyticsDatastoresTestRequest.prototype, "security", void 0);
    return ApigeeOrganizationsAnalyticsDatastoresTestRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsAnalyticsDatastoresTestRequest };
var ApigeeOrganizationsAnalyticsDatastoresTestResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsAnalyticsDatastoresTestResponse, _super);
    function ApigeeOrganizationsAnalyticsDatastoresTestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsAnalyticsDatastoresTestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1TestDatastoreResponse)
    ], ApigeeOrganizationsAnalyticsDatastoresTestResponse.prototype, "googleCloudApigeeV1TestDatastoreResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsAnalyticsDatastoresTestResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsAnalyticsDatastoresTestResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsAnalyticsDatastoresTestResponse };
