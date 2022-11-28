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
var ApigeeOrganizationsHostQueriesListPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsHostQueriesListPathParams, _super);
    function ApigeeOrganizationsHostQueriesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostQueriesListPathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsHostQueriesListPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsHostQueriesListPathParams };
var ApigeeOrganizationsHostQueriesListQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsHostQueriesListQueryParams, _super);
    function ApigeeOrganizationsHostQueriesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostQueriesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostQueriesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostQueriesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostQueriesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dataset" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostQueriesListQueryParams.prototype, "dataset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=envgroupHostname" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostQueriesListQueryParams.prototype, "envgroupHostname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostQueriesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostQueriesListQueryParams.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inclQueriesWithoutReport" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostQueriesListQueryParams.prototype, "inclQueriesWithoutReport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostQueriesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostQueriesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsHostQueriesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostQueriesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostQueriesListQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=submittedBy" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostQueriesListQueryParams.prototype, "submittedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostQueriesListQueryParams.prototype, "to", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostQueriesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostQueriesListQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsHostQueriesListQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsHostQueriesListQueryParams };
var ApigeeOrganizationsHostQueriesListSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsHostQueriesListSecurity, _super);
    function ApigeeOrganizationsHostQueriesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsHostQueriesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsHostQueriesListSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsHostQueriesListSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsHostQueriesListSecurity };
var ApigeeOrganizationsHostQueriesListRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsHostQueriesListRequest, _super);
    function ApigeeOrganizationsHostQueriesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsHostQueriesListPathParams)
    ], ApigeeOrganizationsHostQueriesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsHostQueriesListQueryParams)
    ], ApigeeOrganizationsHostQueriesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsHostQueriesListSecurity)
    ], ApigeeOrganizationsHostQueriesListRequest.prototype, "security", void 0);
    return ApigeeOrganizationsHostQueriesListRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsHostQueriesListRequest };
var ApigeeOrganizationsHostQueriesListResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsHostQueriesListResponse, _super);
    function ApigeeOrganizationsHostQueriesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostQueriesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1ListAsyncQueriesResponse)
    ], ApigeeOrganizationsHostQueriesListResponse.prototype, "googleCloudApigeeV1ListAsyncQueriesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsHostQueriesListResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsHostQueriesListResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsHostQueriesListResponse };
