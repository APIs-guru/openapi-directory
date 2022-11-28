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
import { Cover } from "./cover";
import { PhotoUrLs } from "./photourls";
var GroupBlast = /** @class */ (function (_super) {
    __extends(GroupBlast, _super);
    function GroupBlast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_content" }),
        __metadata("design:type", String)
    ], GroupBlast.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_blast_added" }),
        __metadata("design:type", String)
    ], GroupBlast.prototype, "dateBlastAdded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_id" }),
        __metadata("design:type", String)
    ], GroupBlast.prototype, "userId", void 0);
    return GroupBlast;
}(SpeakeasyBase));
export { GroupBlast };
var GroupDescription = /** @class */ (function (_super) {
    __extends(GroupDescription, _super);
    function GroupDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_content" }),
        __metadata("design:type", String)
    ], GroupDescription.prototype, "content", void 0);
    return GroupDescription;
}(SpeakeasyBase));
export { GroupDescription };
var GroupMembers = /** @class */ (function (_super) {
    __extends(GroupMembers, _super);
    function GroupMembers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_content" }),
        __metadata("design:type", String)
    ], GroupMembers.prototype, "content", void 0);
    return GroupMembers;
}(SpeakeasyBase));
export { GroupMembers };
var GroupName = /** @class */ (function (_super) {
    __extends(GroupName, _super);
    function GroupName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_content" }),
        __metadata("design:type", String)
    ], GroupName.prototype, "content", void 0);
    return GroupName;
}(SpeakeasyBase));
export { GroupName };
var GroupPoolCount = /** @class */ (function (_super) {
    __extends(GroupPoolCount, _super);
    function GroupPoolCount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_content" }),
        __metadata("design:type", String)
    ], GroupPoolCount.prototype, "content", void 0);
    return GroupPoolCount;
}(SpeakeasyBase));
export { GroupPoolCount };
var GroupPrivacy = /** @class */ (function (_super) {
    __extends(GroupPrivacy, _super);
    function GroupPrivacy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_content" }),
        __metadata("design:type", String)
    ], GroupPrivacy.prototype, "content", void 0);
    return GroupPrivacy;
}(SpeakeasyBase));
export { GroupPrivacy };
var GroupRestrictions = /** @class */ (function (_super) {
    __extends(GroupRestrictions, _super);
    function GroupRestrictions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=art_ok" }),
        __metadata("design:type", Boolean)
    ], GroupRestrictions.prototype, "artOk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_geo" }),
        __metadata("design:type", Boolean)
    ], GroupRestrictions.prototype, "hasGeo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=images_ok" }),
        __metadata("design:type", Boolean)
    ], GroupRestrictions.prototype, "imagesOk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moderate_ok" }),
        __metadata("design:type", Boolean)
    ], GroupRestrictions.prototype, "moderateOk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photos_ok" }),
        __metadata("design:type", Boolean)
    ], GroupRestrictions.prototype, "photosOk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restricted_ok" }),
        __metadata("design:type", Boolean)
    ], GroupRestrictions.prototype, "restrictedOk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=safe_ok" }),
        __metadata("design:type", Boolean)
    ], GroupRestrictions.prototype, "safeOk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=screens_ok" }),
        __metadata("design:type", Boolean)
    ], GroupRestrictions.prototype, "screensOk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos_ok" }),
        __metadata("design:type", Boolean)
    ], GroupRestrictions.prototype, "videosOk", void 0);
    return GroupRestrictions;
}(SpeakeasyBase));
export { GroupRestrictions };
var GroupRoles = /** @class */ (function (_super) {
    __extends(GroupRoles, _super);
    function GroupRoles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin" }),
        __metadata("design:type", String)
    ], GroupRoles.prototype, "admin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=member" }),
        __metadata("design:type", String)
    ], GroupRoles.prototype, "member", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moderator" }),
        __metadata("design:type", String)
    ], GroupRoles.prototype, "moderator", void 0);
    return GroupRoles;
}(SpeakeasyBase));
export { GroupRoles };
var GroupRules = /** @class */ (function (_super) {
    __extends(GroupRules, _super);
    function GroupRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_content" }),
        __metadata("design:type", String)
    ], GroupRules.prototype, "content", void 0);
    return GroupRules;
}(SpeakeasyBase));
export { GroupRules };
var GroupThrottle = /** @class */ (function (_super) {
    __extends(GroupThrottle, _super);
    function GroupThrottle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GroupThrottle.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], GroupThrottle.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remaining" }),
        __metadata("design:type", String)
    ], GroupThrottle.prototype, "remaining", void 0);
    return GroupThrottle;
}(SpeakeasyBase));
export { GroupThrottle };
var GroupTopicCount = /** @class */ (function (_super) {
    __extends(GroupTopicCount, _super);
    function GroupTopicCount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_content" }),
        __metadata("design:type", String)
    ], GroupTopicCount.prototype, "content", void 0);
    return GroupTopicCount;
}(SpeakeasyBase));
export { GroupTopicCount };
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    function Group() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blast" }),
        __metadata("design:type", GroupBlast)
    ], Group.prototype, "blast", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cover" }),
        __metadata("design:type", Cover)
    ], Group.prototype, "cover", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coverphoto_farm" }),
        __metadata("design:type", String)
    ], Group.prototype, "coverphotoFarm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coverphoto_server" }),
        __metadata("design:type", String)
    ], Group.prototype, "coverphotoServer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coverphoto_url" }),
        __metadata("design:type", PhotoUrLs)
    ], Group.prototype, "coverphotoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", GroupDescription)
    ], Group.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iconfarm" }),
        __metadata("design:type", String)
    ], Group.prototype, "iconfarm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iconserver" }),
        __metadata("design:type", String)
    ], Group.prototype, "iconserver", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Group.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_admin" }),
        __metadata("design:type", Boolean)
    ], Group.prototype, "isAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_member" }),
        __metadata("design:type", Boolean)
    ], Group.prototype, "isMember", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_moderator" }),
        __metadata("design:type", Boolean)
    ], Group.prototype, "isModerator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ispoolmoderated" }),
        __metadata("design:type", Boolean)
    ], Group.prototype, "ispoolmoderated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lang" }),
        __metadata("design:type", String)
    ], Group.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members" }),
        __metadata("design:type", GroupMembers)
    ], Group.prototype, "members", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", GroupName)
    ], Group.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path_alias" }),
        __metadata("design:type", String)
    ], Group.prototype, "pathAlias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pool_count" }),
        __metadata("design:type", GroupPoolCount)
    ], Group.prototype, "poolCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pool_rows" }),
        __metadata("design:type", Number)
    ], Group.prototype, "poolRows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", GroupPrivacy)
    ], Group.prototype, "privacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restrictions" }),
        __metadata("design:type", GroupRestrictions)
    ], Group.prototype, "restrictions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roles" }),
        __metadata("design:type", GroupRoles)
    ], Group.prototype, "roles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules" }),
        __metadata("design:type", GroupRules)
    ], Group.prototype, "rules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=throttle" }),
        __metadata("design:type", GroupThrottle)
    ], Group.prototype, "throttle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic_count" }),
        __metadata("design:type", GroupTopicCount)
    ], Group.prototype, "topicCount", void 0);
    return Group;
}(SpeakeasyBase));
export { Group };
