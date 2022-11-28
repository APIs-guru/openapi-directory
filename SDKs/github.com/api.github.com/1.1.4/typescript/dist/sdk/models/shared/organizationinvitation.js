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
import { SimpleUser } from "./simpleuser";
// OrganizationInvitation
/**
 * Organization Invitation
**/
var OrganizationInvitation = /** @class */ (function (_super) {
    __extends(OrganizationInvitation, _super);
    function OrganizationInvitation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], OrganizationInvitation.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], OrganizationInvitation.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failed_at" }),
        __metadata("design:type", String)
    ], OrganizationInvitation.prototype, "failedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failed_reason" }),
        __metadata("design:type", String)
    ], OrganizationInvitation.prototype, "failedReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], OrganizationInvitation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invitation_team_url" }),
        __metadata("design:type", String)
    ], OrganizationInvitation.prototype, "invitationTeamUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invitation_teams_url" }),
        __metadata("design:type", String)
    ], OrganizationInvitation.prototype, "invitationTeamsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inviter" }),
        __metadata("design:type", SimpleUser)
    ], OrganizationInvitation.prototype, "inviter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], OrganizationInvitation.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], OrganizationInvitation.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], OrganizationInvitation.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=team_count" }),
        __metadata("design:type", Number)
    ], OrganizationInvitation.prototype, "teamCount", void 0);
    return OrganizationInvitation;
}(SpeakeasyBase));
export { OrganizationInvitation };
