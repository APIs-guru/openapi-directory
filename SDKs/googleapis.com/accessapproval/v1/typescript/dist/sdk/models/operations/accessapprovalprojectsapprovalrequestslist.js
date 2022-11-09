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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var AccessapprovalProjectsApprovalRequestsListPathParams = /** @class */ (function (_super) {
    __extends(AccessapprovalProjectsApprovalRequestsListPathParams, _super);
    function AccessapprovalProjectsApprovalRequestsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsListPathParams.prototype, "parent", void 0);
    return AccessapprovalProjectsApprovalRequestsListPathParams;
}(SpeakeasyBase));
export { AccessapprovalProjectsApprovalRequestsListPathParams };
var AccessapprovalProjectsApprovalRequestsListQueryParams = /** @class */ (function (_super) {
    __extends(AccessapprovalProjectsApprovalRequestsListQueryParams, _super);
    function AccessapprovalProjectsApprovalRequestsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AccessapprovalProjectsApprovalRequestsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AccessapprovalProjectsApprovalRequestsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsListQueryParams.prototype, "uploadProtocol", void 0);
    return AccessapprovalProjectsApprovalRequestsListQueryParams;
}(SpeakeasyBase));
export { AccessapprovalProjectsApprovalRequestsListQueryParams };
var AccessapprovalProjectsApprovalRequestsListSecurity = /** @class */ (function (_super) {
    __extends(AccessapprovalProjectsApprovalRequestsListSecurity, _super);
    function AccessapprovalProjectsApprovalRequestsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AccessapprovalProjectsApprovalRequestsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AccessapprovalProjectsApprovalRequestsListSecurity.prototype, "oauth2c", void 0);
    return AccessapprovalProjectsApprovalRequestsListSecurity;
}(SpeakeasyBase));
export { AccessapprovalProjectsApprovalRequestsListSecurity };
var AccessapprovalProjectsApprovalRequestsListRequest = /** @class */ (function (_super) {
    __extends(AccessapprovalProjectsApprovalRequestsListRequest, _super);
    function AccessapprovalProjectsApprovalRequestsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AccessapprovalProjectsApprovalRequestsListPathParams)
    ], AccessapprovalProjectsApprovalRequestsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AccessapprovalProjectsApprovalRequestsListQueryParams)
    ], AccessapprovalProjectsApprovalRequestsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AccessapprovalProjectsApprovalRequestsListSecurity)
    ], AccessapprovalProjectsApprovalRequestsListRequest.prototype, "security", void 0);
    return AccessapprovalProjectsApprovalRequestsListRequest;
}(SpeakeasyBase));
export { AccessapprovalProjectsApprovalRequestsListRequest };
var AccessapprovalProjectsApprovalRequestsListResponse = /** @class */ (function (_super) {
    __extends(AccessapprovalProjectsApprovalRequestsListResponse, _super);
    function AccessapprovalProjectsApprovalRequestsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListApprovalRequestsResponse)
    ], AccessapprovalProjectsApprovalRequestsListResponse.prototype, "listApprovalRequestsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AccessapprovalProjectsApprovalRequestsListResponse.prototype, "statusCode", void 0);
    return AccessapprovalProjectsApprovalRequestsListResponse;
}(SpeakeasyBase));
export { AccessapprovalProjectsApprovalRequestsListResponse };
