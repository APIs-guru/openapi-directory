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
var ApigeeOrganizationsEnvironmentsSecurityReportsListPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsSecurityReportsListPathParams, _super);
    function ApigeeOrganizationsEnvironmentsSecurityReportsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSecurityReportsListPathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsEnvironmentsSecurityReportsListPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsSecurityReportsListPathParams };
var ApigeeOrganizationsEnvironmentsSecurityReportsListQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsSecurityReportsListQueryParams, _super);
    function ApigeeOrganizationsEnvironmentsSecurityReportsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSecurityReportsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSecurityReportsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSecurityReportsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSecurityReportsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dataset" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSecurityReportsListQueryParams.prototype, "dataset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSecurityReportsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSecurityReportsListQueryParams.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSecurityReportsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSecurityReportsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsSecurityReportsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSecurityReportsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsSecurityReportsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSecurityReportsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSecurityReportsListQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=submittedBy" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSecurityReportsListQueryParams.prototype, "submittedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSecurityReportsListQueryParams.prototype, "to", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSecurityReportsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSecurityReportsListQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsEnvironmentsSecurityReportsListQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsSecurityReportsListQueryParams };
var ApigeeOrganizationsEnvironmentsSecurityReportsListSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsSecurityReportsListSecurity, _super);
    function ApigeeOrganizationsEnvironmentsSecurityReportsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsEnvironmentsSecurityReportsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsEnvironmentsSecurityReportsListSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsEnvironmentsSecurityReportsListSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsSecurityReportsListSecurity };
var ApigeeOrganizationsEnvironmentsSecurityReportsListRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsSecurityReportsListRequest, _super);
    function ApigeeOrganizationsEnvironmentsSecurityReportsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsSecurityReportsListPathParams)
    ], ApigeeOrganizationsEnvironmentsSecurityReportsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsSecurityReportsListQueryParams)
    ], ApigeeOrganizationsEnvironmentsSecurityReportsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsSecurityReportsListSecurity)
    ], ApigeeOrganizationsEnvironmentsSecurityReportsListRequest.prototype, "security", void 0);
    return ApigeeOrganizationsEnvironmentsSecurityReportsListRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsSecurityReportsListRequest };
var ApigeeOrganizationsEnvironmentsSecurityReportsListResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsSecurityReportsListResponse, _super);
    function ApigeeOrganizationsEnvironmentsSecurityReportsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsSecurityReportsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1ListSecurityReportsResponse)
    ], ApigeeOrganizationsEnvironmentsSecurityReportsListResponse.prototype, "googleCloudApigeeV1ListSecurityReportsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsSecurityReportsListResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsEnvironmentsSecurityReportsListResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsSecurityReportsListResponse };
