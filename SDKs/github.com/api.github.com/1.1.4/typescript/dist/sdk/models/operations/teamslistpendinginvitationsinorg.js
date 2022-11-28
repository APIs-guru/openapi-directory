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
var TeamsListPendingInvitationsInOrgPathParams = /** @class */ (function (_super) {
    __extends(TeamsListPendingInvitationsInOrgPathParams, _super);
    function TeamsListPendingInvitationsInOrgPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], TeamsListPendingInvitationsInOrgPathParams.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_slug" }),
        __metadata("design:type", String)
    ], TeamsListPendingInvitationsInOrgPathParams.prototype, "teamSlug", void 0);
    return TeamsListPendingInvitationsInOrgPathParams;
}(SpeakeasyBase));
export { TeamsListPendingInvitationsInOrgPathParams };
var TeamsListPendingInvitationsInOrgQueryParams = /** @class */ (function (_super) {
    __extends(TeamsListPendingInvitationsInOrgQueryParams, _super);
    function TeamsListPendingInvitationsInOrgQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], TeamsListPendingInvitationsInOrgQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], TeamsListPendingInvitationsInOrgQueryParams.prototype, "perPage", void 0);
    return TeamsListPendingInvitationsInOrgQueryParams;
}(SpeakeasyBase));
export { TeamsListPendingInvitationsInOrgQueryParams };
var TeamsListPendingInvitationsInOrgRequest = /** @class */ (function (_super) {
    __extends(TeamsListPendingInvitationsInOrgRequest, _super);
    function TeamsListPendingInvitationsInOrgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsListPendingInvitationsInOrgPathParams)
    ], TeamsListPendingInvitationsInOrgRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsListPendingInvitationsInOrgQueryParams)
    ], TeamsListPendingInvitationsInOrgRequest.prototype, "queryParams", void 0);
    return TeamsListPendingInvitationsInOrgRequest;
}(SpeakeasyBase));
export { TeamsListPendingInvitationsInOrgRequest };
var TeamsListPendingInvitationsInOrgResponse = /** @class */ (function (_super) {
    __extends(TeamsListPendingInvitationsInOrgResponse, _super);
    function TeamsListPendingInvitationsInOrgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TeamsListPendingInvitationsInOrgResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], TeamsListPendingInvitationsInOrgResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TeamsListPendingInvitationsInOrgResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.OrganizationInvitation }),
        __metadata("design:type", Array)
    ], TeamsListPendingInvitationsInOrgResponse.prototype, "organizationInvitations", void 0);
    return TeamsListPendingInvitationsInOrgResponse;
}(SpeakeasyBase));
export { TeamsListPendingInvitationsInOrgResponse };
