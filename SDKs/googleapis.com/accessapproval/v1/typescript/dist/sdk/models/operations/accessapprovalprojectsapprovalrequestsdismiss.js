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
var AccessapprovalProjectsApprovalRequestsDismissPathParams = /** @class */ (function (_super) {
    __extends(AccessapprovalProjectsApprovalRequestsDismissPathParams, _super);
    function AccessapprovalProjectsApprovalRequestsDismissPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsDismissPathParams.prototype, "name", void 0);
    return AccessapprovalProjectsApprovalRequestsDismissPathParams;
}(SpeakeasyBase));
export { AccessapprovalProjectsApprovalRequestsDismissPathParams };
var AccessapprovalProjectsApprovalRequestsDismissQueryParams = /** @class */ (function (_super) {
    __extends(AccessapprovalProjectsApprovalRequestsDismissQueryParams, _super);
    function AccessapprovalProjectsApprovalRequestsDismissQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsDismissQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsDismissQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsDismissQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsDismissQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsDismissQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsDismissQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsDismissQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AccessapprovalProjectsApprovalRequestsDismissQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsDismissQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsDismissQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsDismissQueryParams.prototype, "uploadProtocol", void 0);
    return AccessapprovalProjectsApprovalRequestsDismissQueryParams;
}(SpeakeasyBase));
export { AccessapprovalProjectsApprovalRequestsDismissQueryParams };
var AccessapprovalProjectsApprovalRequestsDismissSecurity = /** @class */ (function (_super) {
    __extends(AccessapprovalProjectsApprovalRequestsDismissSecurity, _super);
    function AccessapprovalProjectsApprovalRequestsDismissSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AccessapprovalProjectsApprovalRequestsDismissSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AccessapprovalProjectsApprovalRequestsDismissSecurity.prototype, "oauth2c", void 0);
    return AccessapprovalProjectsApprovalRequestsDismissSecurity;
}(SpeakeasyBase));
export { AccessapprovalProjectsApprovalRequestsDismissSecurity };
var AccessapprovalProjectsApprovalRequestsDismissRequest = /** @class */ (function (_super) {
    __extends(AccessapprovalProjectsApprovalRequestsDismissRequest, _super);
    function AccessapprovalProjectsApprovalRequestsDismissRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccessapprovalProjectsApprovalRequestsDismissPathParams)
    ], AccessapprovalProjectsApprovalRequestsDismissRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccessapprovalProjectsApprovalRequestsDismissQueryParams)
    ], AccessapprovalProjectsApprovalRequestsDismissRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], AccessapprovalProjectsApprovalRequestsDismissRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccessapprovalProjectsApprovalRequestsDismissSecurity)
    ], AccessapprovalProjectsApprovalRequestsDismissRequest.prototype, "security", void 0);
    return AccessapprovalProjectsApprovalRequestsDismissRequest;
}(SpeakeasyBase));
export { AccessapprovalProjectsApprovalRequestsDismissRequest };
var AccessapprovalProjectsApprovalRequestsDismissResponse = /** @class */ (function (_super) {
    __extends(AccessapprovalProjectsApprovalRequestsDismissResponse, _super);
    function AccessapprovalProjectsApprovalRequestsDismissResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApprovalRequest)
    ], AccessapprovalProjectsApprovalRequestsDismissResponse.prototype, "approvalRequest", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AccessapprovalProjectsApprovalRequestsDismissResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AccessapprovalProjectsApprovalRequestsDismissResponse.prototype, "statusCode", void 0);
    return AccessapprovalProjectsApprovalRequestsDismissResponse;
}(SpeakeasyBase));
export { AccessapprovalProjectsApprovalRequestsDismissResponse };
