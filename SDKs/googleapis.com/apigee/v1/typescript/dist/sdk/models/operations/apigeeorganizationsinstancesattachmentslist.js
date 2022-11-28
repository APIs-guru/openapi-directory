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
var ApigeeOrganizationsInstancesAttachmentsListPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsInstancesAttachmentsListPathParams, _super);
    function ApigeeOrganizationsInstancesAttachmentsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesAttachmentsListPathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsInstancesAttachmentsListPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsInstancesAttachmentsListPathParams };
var ApigeeOrganizationsInstancesAttachmentsListQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsInstancesAttachmentsListQueryParams, _super);
    function ApigeeOrganizationsInstancesAttachmentsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesAttachmentsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesAttachmentsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesAttachmentsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesAttachmentsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesAttachmentsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesAttachmentsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesAttachmentsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsInstancesAttachmentsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesAttachmentsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsInstancesAttachmentsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesAttachmentsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesAttachmentsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesAttachmentsListQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsInstancesAttachmentsListQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsInstancesAttachmentsListQueryParams };
var ApigeeOrganizationsInstancesAttachmentsListSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsInstancesAttachmentsListSecurity, _super);
    function ApigeeOrganizationsInstancesAttachmentsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsInstancesAttachmentsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsInstancesAttachmentsListSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsInstancesAttachmentsListSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsInstancesAttachmentsListSecurity };
var ApigeeOrganizationsInstancesAttachmentsListRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsInstancesAttachmentsListRequest, _super);
    function ApigeeOrganizationsInstancesAttachmentsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsInstancesAttachmentsListPathParams)
    ], ApigeeOrganizationsInstancesAttachmentsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsInstancesAttachmentsListQueryParams)
    ], ApigeeOrganizationsInstancesAttachmentsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsInstancesAttachmentsListSecurity)
    ], ApigeeOrganizationsInstancesAttachmentsListRequest.prototype, "security", void 0);
    return ApigeeOrganizationsInstancesAttachmentsListRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsInstancesAttachmentsListRequest };
var ApigeeOrganizationsInstancesAttachmentsListResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsInstancesAttachmentsListResponse, _super);
    function ApigeeOrganizationsInstancesAttachmentsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsInstancesAttachmentsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1ListInstanceAttachmentsResponse)
    ], ApigeeOrganizationsInstancesAttachmentsListResponse.prototype, "googleCloudApigeeV1ListInstanceAttachmentsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsInstancesAttachmentsListResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsInstancesAttachmentsListResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsInstancesAttachmentsListResponse };
