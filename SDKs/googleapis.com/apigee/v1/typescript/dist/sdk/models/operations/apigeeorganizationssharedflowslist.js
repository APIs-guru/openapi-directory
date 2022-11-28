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
var ApigeeOrganizationsSharedflowsListPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSharedflowsListPathParams, _super);
    function ApigeeOrganizationsSharedflowsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSharedflowsListPathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsSharedflowsListPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsSharedflowsListPathParams };
var ApigeeOrganizationsSharedflowsListQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSharedflowsListQueryParams, _super);
    function ApigeeOrganizationsSharedflowsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSharedflowsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSharedflowsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSharedflowsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSharedflowsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSharedflowsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeMetaData" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsSharedflowsListQueryParams.prototype, "includeMetaData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeRevisions" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsSharedflowsListQueryParams.prototype, "includeRevisions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSharedflowsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSharedflowsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsSharedflowsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSharedflowsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSharedflowsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSharedflowsListQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsSharedflowsListQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsSharedflowsListQueryParams };
var ApigeeOrganizationsSharedflowsListSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSharedflowsListSecurity, _super);
    function ApigeeOrganizationsSharedflowsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsSharedflowsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsSharedflowsListSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsSharedflowsListSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsSharedflowsListSecurity };
var ApigeeOrganizationsSharedflowsListRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSharedflowsListRequest, _super);
    function ApigeeOrganizationsSharedflowsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsSharedflowsListPathParams)
    ], ApigeeOrganizationsSharedflowsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsSharedflowsListQueryParams)
    ], ApigeeOrganizationsSharedflowsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsSharedflowsListSecurity)
    ], ApigeeOrganizationsSharedflowsListRequest.prototype, "security", void 0);
    return ApigeeOrganizationsSharedflowsListRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsSharedflowsListRequest };
var ApigeeOrganizationsSharedflowsListResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSharedflowsListResponse, _super);
    function ApigeeOrganizationsSharedflowsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSharedflowsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1ListSharedFlowsResponse)
    ], ApigeeOrganizationsSharedflowsListResponse.prototype, "googleCloudApigeeV1ListSharedFlowsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsSharedflowsListResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsSharedflowsListResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsSharedflowsListResponse };
