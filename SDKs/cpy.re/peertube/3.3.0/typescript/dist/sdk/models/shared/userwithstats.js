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
import { Account } from "./account";
import { NsfwPolicyEnum } from "./nsfwpolicyenum";
export var UserWithStatsRoleLabelEnum;
(function (UserWithStatsRoleLabelEnum) {
    UserWithStatsRoleLabelEnum["User"] = "User";
    UserWithStatsRoleLabelEnum["Moderator"] = "Moderator";
    UserWithStatsRoleLabelEnum["Administrator"] = "Administrator";
})(UserWithStatsRoleLabelEnum || (UserWithStatsRoleLabelEnum = {}));
var UserWithStats = /** @class */ (function (_super) {
    __extends(UserWithStats, _super);
    function UserWithStats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abusesAcceptedCount" }),
        __metadata("design:type", Number)
    ], UserWithStats.prototype, "abusesAcceptedCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abusesCount" }),
        __metadata("design:type", Number)
    ], UserWithStats.prototype, "abusesCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abusesCreatedCount" }),
        __metadata("design:type", Number)
    ], UserWithStats.prototype, "abusesCreatedCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", Account)
    ], UserWithStats.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoPlayNextVideo" }),
        __metadata("design:type", Boolean)
    ], UserWithStats.prototype, "autoPlayNextVideo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoPlayNextVideoPlaylist" }),
        __metadata("design:type", Boolean)
    ], UserWithStats.prototype, "autoPlayNextVideoPlaylist", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoPlayVideo" }),
        __metadata("design:type", Boolean)
    ], UserWithStats.prototype, "autoPlayVideo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blocked" }),
        __metadata("design:type", Boolean)
    ], UserWithStats.prototype, "blocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blockedReason" }),
        __metadata("design:type", String)
    ], UserWithStats.prototype, "blockedReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", String)
    ], UserWithStats.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], UserWithStats.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailVerified" }),
        __metadata("design:type", Boolean)
    ], UserWithStats.prototype, "emailVerified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Map)
    ], UserWithStats.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastLoginDate" }),
        __metadata("design:type", Date)
    ], UserWithStats.prototype, "lastLoginDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=noInstanceConfigWarningModal" }),
        __metadata("design:type", Boolean)
    ], UserWithStats.prototype, "noInstanceConfigWarningModal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=noWelcomeModal" }),
        __metadata("design:type", Boolean)
    ], UserWithStats.prototype, "noWelcomeModal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nsfwPolicy" }),
        __metadata("design:type", String)
    ], UserWithStats.prototype, "nsfwPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pluginAuth" }),
        __metadata("design:type", String)
    ], UserWithStats.prototype, "pluginAuth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", Number)
    ], UserWithStats.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleLabel" }),
        __metadata("design:type", String)
    ], UserWithStats.prototype, "roleLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=theme" }),
        __metadata("design:type", String)
    ], UserWithStats.prototype, "theme", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], UserWithStats.prototype, "username", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoChannels" }),
        __metadata("design:type", Array)
    ], UserWithStats.prototype, "videoChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoCommentsCount" }),
        __metadata("design:type", Number)
    ], UserWithStats.prototype, "videoCommentsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoQuota" }),
        __metadata("design:type", Number)
    ], UserWithStats.prototype, "videoQuota", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoQuotaDaily" }),
        __metadata("design:type", Number)
    ], UserWithStats.prototype, "videoQuotaDaily", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videosCount" }),
        __metadata("design:type", Number)
    ], UserWithStats.prototype, "videosCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webtorrentEnabled" }),
        __metadata("design:type", Boolean)
    ], UserWithStats.prototype, "webtorrentEnabled", void 0);
    return UserWithStats;
}(SpeakeasyBase));
export { UserWithStats };
