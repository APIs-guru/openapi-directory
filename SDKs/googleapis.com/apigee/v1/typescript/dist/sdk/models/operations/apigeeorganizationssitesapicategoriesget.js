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
var ApigeeOrganizationsSitesApicategoriesGetPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSitesApicategoriesGetPathParams, _super);
    function ApigeeOrganizationsSitesApicategoriesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesGetPathParams.prototype, "name", void 0);
    return ApigeeOrganizationsSitesApicategoriesGetPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsSitesApicategoriesGetPathParams };
var ApigeeOrganizationsSitesApicategoriesGetQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSitesApicategoriesGetQueryParams, _super);
    function ApigeeOrganizationsSitesApicategoriesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=envgroupHostname" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesGetQueryParams.prototype, "envgroupHostname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesGetQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesGetQueryParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesGetQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesGetQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsSitesApicategoriesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=realtime" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsSitesApicategoriesGetQueryParams.prototype, "realtime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=select" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesGetQueryParams.prototype, "select", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesGetQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortby" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesGetQueryParams.prototype, "sortby", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeRange" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesGetQueryParams.prototype, "timeRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeUnit" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesGetQueryParams.prototype, "timeUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=topk" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesGetQueryParams.prototype, "topk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tsAscending" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsSitesApicategoriesGetQueryParams.prototype, "tsAscending", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tzo" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesGetQueryParams.prototype, "tzo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesGetQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsSitesApicategoriesGetQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsSitesApicategoriesGetQueryParams };
var ApigeeOrganizationsSitesApicategoriesGetSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSitesApicategoriesGetSecurity, _super);
    function ApigeeOrganizationsSitesApicategoriesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsSitesApicategoriesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsSitesApicategoriesGetSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsSitesApicategoriesGetSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsSitesApicategoriesGetSecurity };
var ApigeeOrganizationsSitesApicategoriesGetRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSitesApicategoriesGetRequest, _super);
    function ApigeeOrganizationsSitesApicategoriesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsSitesApicategoriesGetPathParams)
    ], ApigeeOrganizationsSitesApicategoriesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsSitesApicategoriesGetQueryParams)
    ], ApigeeOrganizationsSitesApicategoriesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsSitesApicategoriesGetSecurity)
    ], ApigeeOrganizationsSitesApicategoriesGetRequest.prototype, "security", void 0);
    return ApigeeOrganizationsSitesApicategoriesGetRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsSitesApicategoriesGetRequest };
var ApigeeOrganizationsSitesApicategoriesGetResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSitesApicategoriesGetResponse, _super);
    function ApigeeOrganizationsSitesApicategoriesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1ApiCategory)
    ], ApigeeOrganizationsSitesApicategoriesGetResponse.prototype, "googleCloudApigeeV1ApiCategory", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsSitesApicategoriesGetResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsSitesApicategoriesGetResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsSitesApicategoriesGetResponse };
