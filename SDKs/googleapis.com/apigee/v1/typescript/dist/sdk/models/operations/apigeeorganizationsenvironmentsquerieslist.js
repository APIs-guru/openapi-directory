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
var ApigeeOrganizationsEnvironmentsQueriesListPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsQueriesListPathParams, _super);
    function ApigeeOrganizationsEnvironmentsQueriesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsQueriesListPathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsEnvironmentsQueriesListPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsQueriesListPathParams };
var ApigeeOrganizationsEnvironmentsQueriesListQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsQueriesListQueryParams, _super);
    function ApigeeOrganizationsEnvironmentsQueriesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsQueriesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsQueriesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsQueriesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsQueriesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dataset" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsQueriesListQueryParams.prototype, "dataset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsQueriesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsQueriesListQueryParams.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inclQueriesWithoutReport" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsQueriesListQueryParams.prototype, "inclQueriesWithoutReport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsQueriesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsQueriesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsQueriesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsQueriesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsQueriesListQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=submittedBy" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsQueriesListQueryParams.prototype, "submittedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsQueriesListQueryParams.prototype, "to", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsQueriesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsQueriesListQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsEnvironmentsQueriesListQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsQueriesListQueryParams };
var ApigeeOrganizationsEnvironmentsQueriesListSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsQueriesListSecurity, _super);
    function ApigeeOrganizationsEnvironmentsQueriesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsEnvironmentsQueriesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsEnvironmentsQueriesListSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsEnvironmentsQueriesListSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsQueriesListSecurity };
var ApigeeOrganizationsEnvironmentsQueriesListRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsQueriesListRequest, _super);
    function ApigeeOrganizationsEnvironmentsQueriesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsQueriesListPathParams)
    ], ApigeeOrganizationsEnvironmentsQueriesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsQueriesListQueryParams)
    ], ApigeeOrganizationsEnvironmentsQueriesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsQueriesListSecurity)
    ], ApigeeOrganizationsEnvironmentsQueriesListRequest.prototype, "security", void 0);
    return ApigeeOrganizationsEnvironmentsQueriesListRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsQueriesListRequest };
var ApigeeOrganizationsEnvironmentsQueriesListResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsQueriesListResponse, _super);
    function ApigeeOrganizationsEnvironmentsQueriesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsQueriesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1ListAsyncQueriesResponse)
    ], ApigeeOrganizationsEnvironmentsQueriesListResponse.prototype, "googleCloudApigeeV1ListAsyncQueriesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsQueriesListResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsEnvironmentsQueriesListResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsQueriesListResponse };
