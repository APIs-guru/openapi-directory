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
import { OrganizationFull } from "./organizationfull";
var TeamFullTeamSimple = /** @class */ (function (_super) {
    __extends(TeamFullTeamSimple, _super);
    function TeamFullTeamSimple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], TeamFullTeamSimple.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], TeamFullTeamSimple.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], TeamFullTeamSimple.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ldap_dn" }),
        __metadata("design:type", String)
    ], TeamFullTeamSimple.prototype, "ldapDn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members_url" }),
        __metadata("design:type", String)
    ], TeamFullTeamSimple.prototype, "membersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TeamFullTeamSimple.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], TeamFullTeamSimple.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permission" }),
        __metadata("design:type", String)
    ], TeamFullTeamSimple.prototype, "permission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", String)
    ], TeamFullTeamSimple.prototype, "privacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repositories_url" }),
        __metadata("design:type", String)
    ], TeamFullTeamSimple.prototype, "repositoriesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], TeamFullTeamSimple.prototype, "slug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], TeamFullTeamSimple.prototype, "url", void 0);
    return TeamFullTeamSimple;
}(SpeakeasyBase));
export { TeamFullTeamSimple };
export var TeamFullPrivacyEnum;
(function (TeamFullPrivacyEnum) {
    TeamFullPrivacyEnum["Closed"] = "closed";
    TeamFullPrivacyEnum["Secret"] = "secret";
})(TeamFullPrivacyEnum || (TeamFullPrivacyEnum = {}));
// TeamFull
/**
 * Groups of organization members that gives permissions on specified repositories.
**/
var TeamFull = /** @class */ (function (_super) {
    __extends(TeamFull, _super);
    function TeamFull() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], TeamFull.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], TeamFull.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], TeamFull.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], TeamFull.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ldap_dn" }),
        __metadata("design:type", String)
    ], TeamFull.prototype, "ldapDn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members_count" }),
        __metadata("design:type", Number)
    ], TeamFull.prototype, "membersCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members_url" }),
        __metadata("design:type", String)
    ], TeamFull.prototype, "membersUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TeamFull.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], TeamFull.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization" }),
        __metadata("design:type", OrganizationFull)
    ], TeamFull.prototype, "organization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent" }),
        __metadata("design:type", TeamFullTeamSimple)
    ], TeamFull.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permission" }),
        __metadata("design:type", String)
    ], TeamFull.prototype, "permission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", String)
    ], TeamFull.prototype, "privacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repos_count" }),
        __metadata("design:type", Number)
    ], TeamFull.prototype, "reposCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repositories_url" }),
        __metadata("design:type", String)
    ], TeamFull.prototype, "repositoriesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], TeamFull.prototype, "slug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], TeamFull.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], TeamFull.prototype, "url", void 0);
    return TeamFull;
}(SpeakeasyBase));
export { TeamFull };
