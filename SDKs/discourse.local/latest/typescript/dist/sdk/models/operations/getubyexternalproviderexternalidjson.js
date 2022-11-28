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
var GetUByExternalProviderExternalIdJsonPathParams = /** @class */ (function (_super) {
    __extends(GetUByExternalProviderExternalIdJsonPathParams, _super);
    function GetUByExternalProviderExternalIdJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=external_id" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJsonPathParams.prototype, "externalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJsonPathParams.prototype, "provider", void 0);
    return GetUByExternalProviderExternalIdJsonPathParams;
}(SpeakeasyBase));
export { GetUByExternalProviderExternalIdJsonPathParams };
var GetUByExternalProviderExternalIdJsonHeaders = /** @class */ (function (_super) {
    __extends(GetUByExternalProviderExternalIdJsonHeaders, _super);
    function GetUByExternalProviderExternalIdJsonHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJsonHeaders.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJsonHeaders.prototype, "apiUsername", void 0);
    return GetUByExternalProviderExternalIdJsonHeaders;
}(SpeakeasyBase));
export { GetUByExternalProviderExternalIdJsonHeaders };
var GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroupUsers = /** @class */ (function (_super) {
    __extends(GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroupUsers, _super);
    function GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroupUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group_id" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroupUsers.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notification_level" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroupUsers.prototype, "notificationLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_id" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroupUsers.prototype, "userId", void 0);
    return GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroupUsers;
}(SpeakeasyBase));
export { GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroupUsers };
var GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups = /** @class */ (function (_super) {
    __extends(GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups, _super);
    function GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_membership_requests" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups.prototype, "allowMembershipRequests", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=automatic" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups.prototype, "automatic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bio_cooked" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups.prototype, "bioCooked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bio_excerpt" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups.prototype, "bioExcerpt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bio_raw" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups.prototype, "bioRaw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_admin_group" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups.prototype, "canAdminGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_see_members" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups.prototype, "canSeeMembers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_notification_level" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups.prototype, "defaultNotificationLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_bg_color" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups.prototype, "flairBgColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_color" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups.prototype, "flairColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_url" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups.prototype, "flairUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=full_name" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grant_trust_level" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups.prototype, "grantTrustLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_messages" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups.prototype, "hasMessages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=incoming_email" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups.prototype, "incomingEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members_visibility_level" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups.prototype, "membersVisibilityLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=membership_request_template" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups.prototype, "membershipRequestTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mentionable_level" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups.prototype, "mentionableLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messageable_level" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups.prototype, "messageableLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_group" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups.prototype, "primaryGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_admission" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups.prototype, "publicAdmission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_exit" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups.prototype, "publicExit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publish_read_state" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups.prototype, "publishReadState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_count" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups.prototype, "userCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibility_level" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups.prototype, "visibilityLevel", void 0);
    return GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups;
}(SpeakeasyBase));
export { GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups };
var GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserAuthTokens = /** @class */ (function (_super) {
    __extends(GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserAuthTokens, _super);
    function GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserAuthTokens() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=browser" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserAuthTokens.prototype, "browser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client_ip" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserAuthTokens.prototype, "clientIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserAuthTokens.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserAuthTokens.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icon" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserAuthTokens.prototype, "icon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserAuthTokens.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_active" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserAuthTokens.prototype, "isActive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserAuthTokens.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=os" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserAuthTokens.prototype, "os", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seen_at" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserAuthTokens.prototype, "seenAt", void 0);
    return GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserAuthTokens;
}(SpeakeasyBase));
export { GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserAuthTokens };
var GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption = /** @class */ (function (_super) {
    __extends(GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption, _super);
    function GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_private_messages" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "allowPrivateMessages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auto_track_topics_after_msecs" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "autoTrackTopicsAfterMsecs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=automatically_unpin_topics" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "automaticallyUnpinTopics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color_scheme_id" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "colorSchemeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dark_scheme_id" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "darkSchemeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=digest_after_minutes" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "digestAfterMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dynamic_favicon" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "dynamicFavicon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email_digests" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "emailDigests", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email_in_reply_to" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "emailInReplyTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email_level" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "emailLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email_messages_level" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "emailMessagesLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email_previous_replies" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "emailPreviousReplies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enable_allowed_pm_users" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "enableAllowedPmUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enable_defer" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "enableDefer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enable_quoting" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "enableQuoting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=external_links_in_new_tab" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "externalLinksInNewTab", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hide_profile_and_presence" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "hideProfileAndPresence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homepage_id" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "homepageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=include_tl0_in_digests" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "includeTl0InDigests", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=like_notification_frequency" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "likeNotificationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mailing_list_mode" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "mailingListMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mailing_list_mode_frequency" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "mailingListModeFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=new_topic_duration_minutes" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "newTopicDurationMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notification_level_when_replying" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "notificationLevelWhenReplying", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skip_new_user_tips" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "skipNewUserTips", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text_size" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "textSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text_size_seq" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "textSizeSeq", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=theme_ids" }),
        __metadata("design:type", Array)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "themeIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=theme_key_seq" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "themeKeySeq", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "timezone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title_count_mode" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "titleCountMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_id" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption.prototype, "userId", void 0);
    return GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption;
}(SpeakeasyBase));
export { GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption };
var GetUByExternalProviderExternalIdJson200ApplicationJsonUser = /** @class */ (function (_super) {
    __extends(GetUByExternalProviderExternalIdJson200ApplicationJsonUser, _super);
    function GetUByExternalProviderExternalIdJson200ApplicationJsonUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "admin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowed_pm_usernames" }),
        __metadata("design:type", Array)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "allowedPmUsernames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_template" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "avatarTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=badge_count" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "badgeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_be_deleted" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "canBeDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_change_bio" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "canChangeBio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_change_location" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "canChangeLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_change_website" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "canChangeWebsite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_delete_all_posts" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "canDeleteAllPosts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_edit" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "canEdit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_edit_email" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "canEditEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_edit_name" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "canEditName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_edit_username" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "canEditUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_ignore_user" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "canIgnoreUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_mute_user" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "canMuteUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_send_private_message_to_user" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "canSendPrivateMessageToUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_send_private_messages" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "canSendPrivateMessages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_upload_profile_header" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "canUploadProfileHeader", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_upload_user_card_background" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "canUploadUserCardBackground", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_fields" }),
        __metadata("design:type", Map)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=featured_topic" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "featuredTopic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=featured_user_badge_ids" }),
        __metadata("design:type", Array)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "featuredUserBadgeIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_bg_color" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "flairBgColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_color" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "flairColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flair_url" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "flairUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group_users", elemType: GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroupUsers }),
        __metadata("design:type", Array)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "groupUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups", elemType: GetUByExternalProviderExternalIdJson200ApplicationJsonUserGroups }),
        __metadata("design:type", Array)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_title_badges" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "hasTitleBadges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ignored" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "ignored", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ignored_usernames" }),
        __metadata("design:type", Array)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "ignoredUsernames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invited_by" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "invitedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_posted_at" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "lastPostedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_seen_at" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "lastSeenAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locale" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mailing_list_posts_per_day" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "mailingListPostsPerDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moderator" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "moderator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=muted" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "muted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=muted_category_ids" }),
        __metadata("design:type", Array)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "mutedCategoryIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=muted_tags" }),
        __metadata("design:type", Array)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "mutedTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=muted_usernames" }),
        __metadata("design:type", Array)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "mutedUsernames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pending_count" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "pendingCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=post_count" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "postCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_group_id" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "primaryGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_group_name" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "primaryGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profile_view_count" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "profileViewCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recent_time_read" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "recentTimeRead", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regular_category_ids" }),
        __metadata("design:type", Array)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "regularCategoryIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=second_factor_enabled" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "secondFactorEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=staged" }),
        __metadata("design:type", Boolean)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "staged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=system_avatar_template" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "systemAvatarTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=system_avatar_upload_id" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "systemAvatarUploadId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_read" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "timeRead", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tracked_category_ids" }),
        __metadata("design:type", Array)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "trackedCategoryIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tracked_tags" }),
        __metadata("design:type", Array)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "trackedTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trust_level" }),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "trustLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uploaded_avatar_id" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "uploadedAvatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_api_keys" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "userApiKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_auth_tokens", elemType: GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserAuthTokens }),
        __metadata("design:type", Array)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "userAuthTokens", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_fields" }),
        __metadata("design:type", Map)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "userFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_option" }),
        __metadata("design:type", GetUByExternalProviderExternalIdJson200ApplicationJsonUserUserOption)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "userOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "username", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watched_category_ids" }),
        __metadata("design:type", Array)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "watchedCategoryIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watched_first_post_category_ids" }),
        __metadata("design:type", Array)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "watchedFirstPostCategoryIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watched_tags" }),
        __metadata("design:type", Array)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "watchedTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watching_first_post_tags" }),
        __metadata("design:type", Array)
    ], GetUByExternalProviderExternalIdJson200ApplicationJsonUser.prototype, "watchingFirstPostTags", void 0);
    return GetUByExternalProviderExternalIdJson200ApplicationJsonUser;
}(SpeakeasyBase));
export { GetUByExternalProviderExternalIdJson200ApplicationJsonUser };
var GetUByExternalProviderExternalIdJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetUByExternalProviderExternalIdJson200ApplicationJson, _super);
    function GetUByExternalProviderExternalIdJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", GetUByExternalProviderExternalIdJson200ApplicationJsonUser)
    ], GetUByExternalProviderExternalIdJson200ApplicationJson.prototype, "user", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_badges" }),
        __metadata("design:type", Array)
    ], GetUByExternalProviderExternalIdJson200ApplicationJson.prototype, "userBadges", void 0);
    return GetUByExternalProviderExternalIdJson200ApplicationJson;
}(SpeakeasyBase));
export { GetUByExternalProviderExternalIdJson200ApplicationJson };
var GetUByExternalProviderExternalIdJsonRequest = /** @class */ (function (_super) {
    __extends(GetUByExternalProviderExternalIdJsonRequest, _super);
    function GetUByExternalProviderExternalIdJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUByExternalProviderExternalIdJsonPathParams)
    ], GetUByExternalProviderExternalIdJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUByExternalProviderExternalIdJsonHeaders)
    ], GetUByExternalProviderExternalIdJsonRequest.prototype, "headers", void 0);
    return GetUByExternalProviderExternalIdJsonRequest;
}(SpeakeasyBase));
export { GetUByExternalProviderExternalIdJsonRequest };
var GetUByExternalProviderExternalIdJsonResponse = /** @class */ (function (_super) {
    __extends(GetUByExternalProviderExternalIdJsonResponse, _super);
    function GetUByExternalProviderExternalIdJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUByExternalProviderExternalIdJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUByExternalProviderExternalIdJson200ApplicationJson)
    ], GetUByExternalProviderExternalIdJsonResponse.prototype, "getUByExternalProviderExternalIdJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUByExternalProviderExternalIdJsonResponse.prototype, "statusCode", void 0);
    return GetUByExternalProviderExternalIdJsonResponse;
}(SpeakeasyBase));
export { GetUByExternalProviderExternalIdJsonResponse };
