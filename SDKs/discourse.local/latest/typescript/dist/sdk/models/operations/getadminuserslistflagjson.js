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
export var GetAdminUsersListFlagJsonFlagEnum;
(function (GetAdminUsersListFlagJsonFlagEnum) {
    GetAdminUsersListFlagJsonFlagEnum["Active"] = "active";
    GetAdminUsersListFlagJsonFlagEnum["New"] = "new";
    GetAdminUsersListFlagJsonFlagEnum["Staff"] = "staff";
    GetAdminUsersListFlagJsonFlagEnum["Suspended"] = "suspended";
    GetAdminUsersListFlagJsonFlagEnum["Blocked"] = "blocked";
    GetAdminUsersListFlagJsonFlagEnum["Suspect"] = "suspect";
})(GetAdminUsersListFlagJsonFlagEnum || (GetAdminUsersListFlagJsonFlagEnum = {}));
var GetAdminUsersListFlagJsonPathParams = /** @class */ (function (_super) {
    __extends(GetAdminUsersListFlagJsonPathParams, _super);
    function GetAdminUsersListFlagJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=flag" }),
        __metadata("design:type", String)
    ], GetAdminUsersListFlagJsonPathParams.prototype, "flag", void 0);
    return GetAdminUsersListFlagJsonPathParams;
}(SpeakeasyBase));
export { GetAdminUsersListFlagJsonPathParams };
export var GetAdminUsersListFlagJsonAscEnum;
(function (GetAdminUsersListFlagJsonAscEnum) {
    GetAdminUsersListFlagJsonAscEnum["True"] = "true";
})(GetAdminUsersListFlagJsonAscEnum || (GetAdminUsersListFlagJsonAscEnum = {}));
export var GetAdminUsersListFlagJsonOrderEnum;
(function (GetAdminUsersListFlagJsonOrderEnum) {
    GetAdminUsersListFlagJsonOrderEnum["Created"] = "created";
    GetAdminUsersListFlagJsonOrderEnum["LastEmailed"] = "last_emailed";
    GetAdminUsersListFlagJsonOrderEnum["Seen"] = "seen";
    GetAdminUsersListFlagJsonOrderEnum["Username"] = "username";
    GetAdminUsersListFlagJsonOrderEnum["Email"] = "email";
    GetAdminUsersListFlagJsonOrderEnum["TrustLevel"] = "trust_level";
    GetAdminUsersListFlagJsonOrderEnum["DaysVisited"] = "days_visited";
    GetAdminUsersListFlagJsonOrderEnum["PostsRead"] = "posts_read";
    GetAdminUsersListFlagJsonOrderEnum["TopicsViewed"] = "topics_viewed";
    GetAdminUsersListFlagJsonOrderEnum["Posts"] = "posts";
    GetAdminUsersListFlagJsonOrderEnum["ReadTime"] = "read_time";
})(GetAdminUsersListFlagJsonOrderEnum || (GetAdminUsersListFlagJsonOrderEnum = {}));
var GetAdminUsersListFlagJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetAdminUsersListFlagJsonQueryParams, _super);
    function GetAdminUsersListFlagJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asc" }),
        __metadata("design:type", String)
    ], GetAdminUsersListFlagJsonQueryParams.prototype, "asc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetAdminUsersListFlagJsonQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetAdminUsersListFlagJsonQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=show_emails" }),
        __metadata("design:type", Boolean)
    ], GetAdminUsersListFlagJsonQueryParams.prototype, "showEmails", void 0);
    return GetAdminUsersListFlagJsonQueryParams;
}(SpeakeasyBase));
export { GetAdminUsersListFlagJsonQueryParams };
var GetAdminUsersListFlagJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAdminUsersListFlagJson200ApplicationJson, _super);
    function GetAdminUsersListFlagJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], GetAdminUsersListFlagJson200ApplicationJson.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin" }),
        __metadata("design:type", Boolean)
    ], GetAdminUsersListFlagJson200ApplicationJson.prototype, "admin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_template" }),
        __metadata("design:type", String)
    ], GetAdminUsersListFlagJson200ApplicationJson.prototype, "avatarTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], GetAdminUsersListFlagJson200ApplicationJson.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at_age" }),
        __metadata("design:type", Object)
    ], GetAdminUsersListFlagJson200ApplicationJson.prototype, "createdAtAge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=days_visited" }),
        __metadata("design:type", Number)
    ], GetAdminUsersListFlagJson200ApplicationJson.prototype, "daysVisited", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], GetAdminUsersListFlagJson200ApplicationJson.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flag_level" }),
        __metadata("design:type", Number)
    ], GetAdminUsersListFlagJson200ApplicationJson.prototype, "flagLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetAdminUsersListFlagJson200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_emailed_age" }),
        __metadata("design:type", Object)
    ], GetAdminUsersListFlagJson200ApplicationJson.prototype, "lastEmailedAge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_emailed_at" }),
        __metadata("design:type", String)
    ], GetAdminUsersListFlagJson200ApplicationJson.prototype, "lastEmailedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_seen_age" }),
        __metadata("design:type", Object)
    ], GetAdminUsersListFlagJson200ApplicationJson.prototype, "lastSeenAge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_seen_at" }),
        __metadata("design:type", String)
    ], GetAdminUsersListFlagJson200ApplicationJson.prototype, "lastSeenAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manual_locked_trust_level" }),
        __metadata("design:type", String)
    ], GetAdminUsersListFlagJson200ApplicationJson.prototype, "manualLockedTrustLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moderator" }),
        __metadata("design:type", Boolean)
    ], GetAdminUsersListFlagJson200ApplicationJson.prototype, "moderator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetAdminUsersListFlagJson200ApplicationJson.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=post_count" }),
        __metadata("design:type", Number)
    ], GetAdminUsersListFlagJson200ApplicationJson.prototype, "postCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=posts_read_count" }),
        __metadata("design:type", Number)
    ], GetAdminUsersListFlagJson200ApplicationJson.prototype, "postsReadCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondary_emails" }),
        __metadata("design:type", Array)
    ], GetAdminUsersListFlagJson200ApplicationJson.prototype, "secondaryEmails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=staged" }),
        __metadata("design:type", Boolean)
    ], GetAdminUsersListFlagJson200ApplicationJson.prototype, "staged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_read" }),
        __metadata("design:type", Number)
    ], GetAdminUsersListFlagJson200ApplicationJson.prototype, "timeRead", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetAdminUsersListFlagJson200ApplicationJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topics_entered" }),
        __metadata("design:type", Number)
    ], GetAdminUsersListFlagJson200ApplicationJson.prototype, "topicsEntered", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trust_level" }),
        __metadata("design:type", Number)
    ], GetAdminUsersListFlagJson200ApplicationJson.prototype, "trustLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], GetAdminUsersListFlagJson200ApplicationJson.prototype, "username", void 0);
    return GetAdminUsersListFlagJson200ApplicationJson;
}(SpeakeasyBase));
export { GetAdminUsersListFlagJson200ApplicationJson };
var GetAdminUsersListFlagJsonRequest = /** @class */ (function (_super) {
    __extends(GetAdminUsersListFlagJsonRequest, _super);
    function GetAdminUsersListFlagJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAdminUsersListFlagJsonPathParams)
    ], GetAdminUsersListFlagJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAdminUsersListFlagJsonQueryParams)
    ], GetAdminUsersListFlagJsonRequest.prototype, "queryParams", void 0);
    return GetAdminUsersListFlagJsonRequest;
}(SpeakeasyBase));
export { GetAdminUsersListFlagJsonRequest };
var GetAdminUsersListFlagJsonResponse = /** @class */ (function (_super) {
    __extends(GetAdminUsersListFlagJsonResponse, _super);
    function GetAdminUsersListFlagJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAdminUsersListFlagJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: GetAdminUsersListFlagJson200ApplicationJson }),
        __metadata("design:type", Array)
    ], GetAdminUsersListFlagJsonResponse.prototype, "getAdminUsersListFlagJson200ApplicationJsonObjects", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAdminUsersListFlagJsonResponse.prototype, "statusCode", void 0);
    return GetAdminUsersListFlagJsonResponse;
}(SpeakeasyBase));
export { GetAdminUsersListFlagJsonResponse };
