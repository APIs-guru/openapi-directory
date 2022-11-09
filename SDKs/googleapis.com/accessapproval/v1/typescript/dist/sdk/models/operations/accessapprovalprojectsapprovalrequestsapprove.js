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
var AccessapprovalProjectsApprovalRequestsApprovePathParams = /** @class */ (function (_super) {
    __extends(AccessapprovalProjectsApprovalRequestsApprovePathParams, _super);
    function AccessapprovalProjectsApprovalRequestsApprovePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsApprovePathParams.prototype, "name", void 0);
    return AccessapprovalProjectsApprovalRequestsApprovePathParams;
}(SpeakeasyBase));
export { AccessapprovalProjectsApprovalRequestsApprovePathParams };
var AccessapprovalProjectsApprovalRequestsApproveQueryParams = /** @class */ (function (_super) {
    __extends(AccessapprovalProjectsApprovalRequestsApproveQueryParams, _super);
    function AccessapprovalProjectsApprovalRequestsApproveQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsApproveQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsApproveQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsApproveQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsApproveQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsApproveQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsApproveQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsApproveQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AccessapprovalProjectsApprovalRequestsApproveQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsApproveQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsApproveQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsApproveQueryParams.prototype, "uploadProtocol", void 0);
    return AccessapprovalProjectsApprovalRequestsApproveQueryParams;
}(SpeakeasyBase));
export { AccessapprovalProjectsApprovalRequestsApproveQueryParams };
var AccessapprovalProjectsApprovalRequestsApproveSecurity = /** @class */ (function (_super) {
    __extends(AccessapprovalProjectsApprovalRequestsApproveSecurity, _super);
    function AccessapprovalProjectsApprovalRequestsApproveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AccessapprovalProjectsApprovalRequestsApproveSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AccessapprovalProjectsApprovalRequestsApproveSecurity.prototype, "oauth2c", void 0);
    return AccessapprovalProjectsApprovalRequestsApproveSecurity;
}(SpeakeasyBase));
export { AccessapprovalProjectsApprovalRequestsApproveSecurity };
var AccessapprovalProjectsApprovalRequestsApproveRequest = /** @class */ (function (_super) {
    __extends(AccessapprovalProjectsApprovalRequestsApproveRequest, _super);
    function AccessapprovalProjectsApprovalRequestsApproveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AccessapprovalProjectsApprovalRequestsApprovePathParams)
    ], AccessapprovalProjectsApprovalRequestsApproveRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AccessapprovalProjectsApprovalRequestsApproveQueryParams)
    ], AccessapprovalProjectsApprovalRequestsApproveRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ApproveApprovalRequestMessage)
    ], AccessapprovalProjectsApprovalRequestsApproveRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AccessapprovalProjectsApprovalRequestsApproveSecurity)
    ], AccessapprovalProjectsApprovalRequestsApproveRequest.prototype, "security", void 0);
    return AccessapprovalProjectsApprovalRequestsApproveRequest;
}(SpeakeasyBase));
export { AccessapprovalProjectsApprovalRequestsApproveRequest };
var AccessapprovalProjectsApprovalRequestsApproveResponse = /** @class */ (function (_super) {
    __extends(AccessapprovalProjectsApprovalRequestsApproveResponse, _super);
    function AccessapprovalProjectsApprovalRequestsApproveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApprovalRequest)
    ], AccessapprovalProjectsApprovalRequestsApproveResponse.prototype, "approvalRequest", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsApproveResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AccessapprovalProjectsApprovalRequestsApproveResponse.prototype, "statusCode", void 0);
    return AccessapprovalProjectsApprovalRequestsApproveResponse;
}(SpeakeasyBase));
export { AccessapprovalProjectsApprovalRequestsApproveResponse };
