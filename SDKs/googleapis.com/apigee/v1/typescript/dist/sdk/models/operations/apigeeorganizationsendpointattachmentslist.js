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
var ApigeeOrganizationsEndpointAttachmentsListPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEndpointAttachmentsListPathParams, _super);
    function ApigeeOrganizationsEndpointAttachmentsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEndpointAttachmentsListPathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsEndpointAttachmentsListPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEndpointAttachmentsListPathParams };
var ApigeeOrganizationsEndpointAttachmentsListQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEndpointAttachmentsListQueryParams, _super);
    function ApigeeOrganizationsEndpointAttachmentsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEndpointAttachmentsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEndpointAttachmentsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEndpointAttachmentsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEndpointAttachmentsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEndpointAttachmentsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEndpointAttachmentsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEndpointAttachmentsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEndpointAttachmentsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEndpointAttachmentsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEndpointAttachmentsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEndpointAttachmentsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEndpointAttachmentsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEndpointAttachmentsListQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsEndpointAttachmentsListQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEndpointAttachmentsListQueryParams };
var ApigeeOrganizationsEndpointAttachmentsListSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEndpointAttachmentsListSecurity, _super);
    function ApigeeOrganizationsEndpointAttachmentsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsEndpointAttachmentsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsEndpointAttachmentsListSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsEndpointAttachmentsListSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsEndpointAttachmentsListSecurity };
var ApigeeOrganizationsEndpointAttachmentsListRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEndpointAttachmentsListRequest, _super);
    function ApigeeOrganizationsEndpointAttachmentsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEndpointAttachmentsListPathParams)
    ], ApigeeOrganizationsEndpointAttachmentsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEndpointAttachmentsListQueryParams)
    ], ApigeeOrganizationsEndpointAttachmentsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEndpointAttachmentsListSecurity)
    ], ApigeeOrganizationsEndpointAttachmentsListRequest.prototype, "security", void 0);
    return ApigeeOrganizationsEndpointAttachmentsListRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsEndpointAttachmentsListRequest };
var ApigeeOrganizationsEndpointAttachmentsListResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEndpointAttachmentsListResponse, _super);
    function ApigeeOrganizationsEndpointAttachmentsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEndpointAttachmentsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1ListEndpointAttachmentsResponse)
    ], ApigeeOrganizationsEndpointAttachmentsListResponse.prototype, "googleCloudApigeeV1ListEndpointAttachmentsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEndpointAttachmentsListResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsEndpointAttachmentsListResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsEndpointAttachmentsListResponse };
