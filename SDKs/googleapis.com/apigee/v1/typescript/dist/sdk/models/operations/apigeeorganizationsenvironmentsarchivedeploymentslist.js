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
var ApigeeOrganizationsEnvironmentsArchiveDeploymentsListPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsArchiveDeploymentsListPathParams, _super);
    function ApigeeOrganizationsEnvironmentsArchiveDeploymentsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsListPathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsEnvironmentsArchiveDeploymentsListPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsArchiveDeploymentsListPathParams };
var ApigeeOrganizationsEnvironmentsArchiveDeploymentsListQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsArchiveDeploymentsListQueryParams, _super);
    function ApigeeOrganizationsEnvironmentsArchiveDeploymentsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsListQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsEnvironmentsArchiveDeploymentsListQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsArchiveDeploymentsListQueryParams };
var ApigeeOrganizationsEnvironmentsArchiveDeploymentsListSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsArchiveDeploymentsListSecurity, _super);
    function ApigeeOrganizationsEnvironmentsArchiveDeploymentsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsListSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsEnvironmentsArchiveDeploymentsListSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsArchiveDeploymentsListSecurity };
var ApigeeOrganizationsEnvironmentsArchiveDeploymentsListRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsArchiveDeploymentsListRequest, _super);
    function ApigeeOrganizationsEnvironmentsArchiveDeploymentsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsArchiveDeploymentsListPathParams)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsArchiveDeploymentsListQueryParams)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsArchiveDeploymentsListSecurity)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsListRequest.prototype, "security", void 0);
    return ApigeeOrganizationsEnvironmentsArchiveDeploymentsListRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsArchiveDeploymentsListRequest };
var ApigeeOrganizationsEnvironmentsArchiveDeploymentsListResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsArchiveDeploymentsListResponse, _super);
    function ApigeeOrganizationsEnvironmentsArchiveDeploymentsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1ListArchiveDeploymentsResponse)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsListResponse.prototype, "googleCloudApigeeV1ListArchiveDeploymentsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsArchiveDeploymentsListResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsEnvironmentsArchiveDeploymentsListResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsArchiveDeploymentsListResponse };
