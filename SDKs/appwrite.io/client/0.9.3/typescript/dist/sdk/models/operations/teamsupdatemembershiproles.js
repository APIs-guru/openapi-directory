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
var TeamsUpdateMembershipRolesPathParams = /** @class */ (function (_super) {
    __extends(TeamsUpdateMembershipRolesPathParams, _super);
    function TeamsUpdateMembershipRolesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=membershipId" }),
        __metadata("design:type", String)
    ], TeamsUpdateMembershipRolesPathParams.prototype, "membershipId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" }),
        __metadata("design:type", String)
    ], TeamsUpdateMembershipRolesPathParams.prototype, "teamId", void 0);
    return TeamsUpdateMembershipRolesPathParams;
}(SpeakeasyBase));
export { TeamsUpdateMembershipRolesPathParams };
var TeamsUpdateMembershipRolesRequestBody = /** @class */ (function (_super) {
    __extends(TeamsUpdateMembershipRolesRequestBody, _super);
    function TeamsUpdateMembershipRolesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=roles" }),
        __metadata("design:type", Array)
    ], TeamsUpdateMembershipRolesRequestBody.prototype, "roles", void 0);
    return TeamsUpdateMembershipRolesRequestBody;
}(SpeakeasyBase));
export { TeamsUpdateMembershipRolesRequestBody };
var TeamsUpdateMembershipRolesSecurity = /** @class */ (function (_super) {
    __extends(TeamsUpdateMembershipRolesSecurity, _super);
    function TeamsUpdateMembershipRolesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeJwt)
    ], TeamsUpdateMembershipRolesSecurity.prototype, "jwt", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], TeamsUpdateMembershipRolesSecurity.prototype, "project", void 0);
    return TeamsUpdateMembershipRolesSecurity;
}(SpeakeasyBase));
export { TeamsUpdateMembershipRolesSecurity };
var TeamsUpdateMembershipRolesRequest = /** @class */ (function (_super) {
    __extends(TeamsUpdateMembershipRolesRequest, _super);
    function TeamsUpdateMembershipRolesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", TeamsUpdateMembershipRolesPathParams)
    ], TeamsUpdateMembershipRolesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", TeamsUpdateMembershipRolesRequestBody)
    ], TeamsUpdateMembershipRolesRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TeamsUpdateMembershipRolesSecurity)
    ], TeamsUpdateMembershipRolesRequest.prototype, "security", void 0);
    return TeamsUpdateMembershipRolesRequest;
}(SpeakeasyBase));
export { TeamsUpdateMembershipRolesRequest };
var TeamsUpdateMembershipRolesResponse = /** @class */ (function (_super) {
    __extends(TeamsUpdateMembershipRolesResponse, _super);
    function TeamsUpdateMembershipRolesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], TeamsUpdateMembershipRolesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], TeamsUpdateMembershipRolesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Membership)
    ], TeamsUpdateMembershipRolesResponse.prototype, "membership", void 0);
    return TeamsUpdateMembershipRolesResponse;
}(SpeakeasyBase));
export { TeamsUpdateMembershipRolesResponse };
