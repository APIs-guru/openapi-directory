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
// ProfileChildLink
/**
 * Child link for this view (profile). Points to the list of goals for this view (profile).
**/
var ProfileChildLink = /** @class */ (function (_super) {
    __extends(ProfileChildLink, _super);
    function ProfileChildLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], ProfileChildLink.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ProfileChildLink.prototype, "type", void 0);
    return ProfileChildLink;
}(SpeakeasyBase));
export { ProfileChildLink };
// ProfileParentLink
/**
 * Parent link for this view (profile). Points to the web property to which this view (profile) belongs.
**/
var ProfileParentLink = /** @class */ (function (_super) {
    __extends(ProfileParentLink, _super);
    function ProfileParentLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], ProfileParentLink.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ProfileParentLink.prototype, "type", void 0);
    return ProfileParentLink;
}(SpeakeasyBase));
export { ProfileParentLink };
// ProfilePermissions
/**
 * Permissions the user has for this view (profile).
**/
var ProfilePermissions = /** @class */ (function (_super) {
    __extends(ProfilePermissions, _super);
    function ProfilePermissions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effective" }),
        __metadata("design:type", Array)
    ], ProfilePermissions.prototype, "effective", void 0);
    return ProfilePermissions;
}(SpeakeasyBase));
export { ProfilePermissions };
// Profile
/**
 * JSON template for an Analytics view (profile).
**/
var Profile = /** @class */ (function (_super) {
    __extends(Profile, _super);
    function Profile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], Profile.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=botFilteringEnabled" }),
        __metadata("design:type", Boolean)
    ], Profile.prototype, "botFilteringEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=childLink" }),
        __metadata("design:type", ProfileChildLink)
    ], Profile.prototype, "childLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], Profile.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], Profile.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultPage" }),
        __metadata("design:type", String)
    ], Profile.prototype, "defaultPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eCommerceTracking" }),
        __metadata("design:type", Boolean)
    ], Profile.prototype, "eCommerceTracking", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enhancedECommerceTracking" }),
        __metadata("design:type", Boolean)
    ], Profile.prototype, "enhancedECommerceTracking", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludeQueryParameters" }),
        __metadata("design:type", String)
    ], Profile.prototype, "excludeQueryParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Profile.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=internalWebPropertyId" }),
        __metadata("design:type", String)
    ], Profile.prototype, "internalWebPropertyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Profile.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Profile.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentLink" }),
        __metadata("design:type", ProfileParentLink)
    ], Profile.prototype, "parentLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", ProfilePermissions)
    ], Profile.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], Profile.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=siteSearchCategoryParameters" }),
        __metadata("design:type", String)
    ], Profile.prototype, "siteSearchCategoryParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=siteSearchQueryParameters" }),
        __metadata("design:type", String)
    ], Profile.prototype, "siteSearchQueryParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred" }),
        __metadata("design:type", Boolean)
    ], Profile.prototype, "starred", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stripSiteSearchCategoryParameters" }),
        __metadata("design:type", Boolean)
    ], Profile.prototype, "stripSiteSearchCategoryParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stripSiteSearchQueryParameters" }),
        __metadata("design:type", Boolean)
    ], Profile.prototype, "stripSiteSearchQueryParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], Profile.prototype, "timezone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Profile.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], Profile.prototype, "updated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webPropertyId" }),
        __metadata("design:type", String)
    ], Profile.prototype, "webPropertyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=websiteUrl" }),
        __metadata("design:type", String)
    ], Profile.prototype, "websiteUrl", void 0);
    return Profile;
}(SpeakeasyBase));
export { Profile };
// ProfileInput
/**
 * JSON template for an Analytics view (profile).
**/
var ProfileInput = /** @class */ (function (_super) {
    __extends(ProfileInput, _super);
    function ProfileInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], ProfileInput.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=botFilteringEnabled" }),
        __metadata("design:type", Boolean)
    ], ProfileInput.prototype, "botFilteringEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=childLink" }),
        __metadata("design:type", ProfileChildLink)
    ], ProfileInput.prototype, "childLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], ProfileInput.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultPage" }),
        __metadata("design:type", String)
    ], ProfileInput.prototype, "defaultPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eCommerceTracking" }),
        __metadata("design:type", Boolean)
    ], ProfileInput.prototype, "eCommerceTracking", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enhancedECommerceTracking" }),
        __metadata("design:type", Boolean)
    ], ProfileInput.prototype, "enhancedECommerceTracking", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludeQueryParameters" }),
        __metadata("design:type", String)
    ], ProfileInput.prototype, "excludeQueryParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ProfileInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProfileInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentLink" }),
        __metadata("design:type", ProfileParentLink)
    ], ProfileInput.prototype, "parentLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=siteSearchCategoryParameters" }),
        __metadata("design:type", String)
    ], ProfileInput.prototype, "siteSearchCategoryParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=siteSearchQueryParameters" }),
        __metadata("design:type", String)
    ], ProfileInput.prototype, "siteSearchQueryParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=starred" }),
        __metadata("design:type", Boolean)
    ], ProfileInput.prototype, "starred", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stripSiteSearchCategoryParameters" }),
        __metadata("design:type", Boolean)
    ], ProfileInput.prototype, "stripSiteSearchCategoryParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stripSiteSearchQueryParameters" }),
        __metadata("design:type", Boolean)
    ], ProfileInput.prototype, "stripSiteSearchQueryParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], ProfileInput.prototype, "timezone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ProfileInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=websiteUrl" }),
        __metadata("design:type", String)
    ], ProfileInput.prototype, "websiteUrl", void 0);
    return ProfileInput;
}(SpeakeasyBase));
export { ProfileInput };
