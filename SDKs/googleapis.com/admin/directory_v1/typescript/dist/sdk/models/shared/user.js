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
import { UserName } from "./username";
// UserInput
/**
 * The Directory API allows you to create and manage your account's users, user aliases, and user Gmail chat profile photos. For more information about common tasks, see the [User Accounts Developer's Guide](/admin-sdk/directory/v1/guides/manage-users.html) and the [User Aliases Developer's Guide](/admin-sdk/directory/v1/guides/manage-user-aliases.html).
**/
var UserInput = /** @class */ (function (_super) {
    __extends(UserInput, _super);
    function UserInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addresses" }),
        __metadata("design:type", Object)
    ], UserInput.prototype, "addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], UserInput.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changePasswordAtNextLogin" }),
        __metadata("design:type", Boolean)
    ], UserInput.prototype, "changePasswordAtNextLogin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customSchemas" }),
        __metadata("design:type", Map)
    ], UserInput.prototype, "customSchemas", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emails" }),
        __metadata("design:type", Object)
    ], UserInput.prototype, "emails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalIds" }),
        __metadata("design:type", Object)
    ], UserInput.prototype, "externalIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gender" }),
        __metadata("design:type", Object)
    ], UserInput.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hashFunction" }),
        __metadata("design:type", String)
    ], UserInput.prototype, "hashFunction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UserInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ims" }),
        __metadata("design:type", Object)
    ], UserInput.prototype, "ims", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeInGlobalAddressList" }),
        __metadata("design:type", Boolean)
    ], UserInput.prototype, "includeInGlobalAddressList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipWhitelisted" }),
        __metadata("design:type", Boolean)
    ], UserInput.prototype, "ipWhitelisted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keywords" }),
        __metadata("design:type", Object)
    ], UserInput.prototype, "keywords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languages" }),
        __metadata("design:type", Object)
    ], UserInput.prototype, "languages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locations" }),
        __metadata("design:type", Object)
    ], UserInput.prototype, "locations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", UserName)
    ], UserInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", Object)
    ], UserInput.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orgUnitPath" }),
        __metadata("design:type", String)
    ], UserInput.prototype, "orgUnitPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations" }),
        __metadata("design:type", Object)
    ], UserInput.prototype, "organizations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], UserInput.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phones" }),
        __metadata("design:type", Object)
    ], UserInput.prototype, "phones", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=posixAccounts" }),
        __metadata("design:type", Object)
    ], UserInput.prototype, "posixAccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryEmail" }),
        __metadata("design:type", String)
    ], UserInput.prototype, "primaryEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recoveryEmail" }),
        __metadata("design:type", String)
    ], UserInput.prototype, "recoveryEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recoveryPhone" }),
        __metadata("design:type", String)
    ], UserInput.prototype, "recoveryPhone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relations" }),
        __metadata("design:type", Object)
    ], UserInput.prototype, "relations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sshPublicKeys" }),
        __metadata("design:type", Object)
    ], UserInput.prototype, "sshPublicKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suspended" }),
        __metadata("design:type", Boolean)
    ], UserInput.prototype, "suspended", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=websites" }),
        __metadata("design:type", Object)
    ], UserInput.prototype, "websites", void 0);
    return UserInput;
}(SpeakeasyBase));
export { UserInput };
// User
/**
 * The Directory API allows you to create and manage your account's users, user aliases, and user Gmail chat profile photos. For more information about common tasks, see the [User Accounts Developer's Guide](/admin-sdk/directory/v1/guides/manage-users.html) and the [User Aliases Developer's Guide](/admin-sdk/directory/v1/guides/manage-user-aliases.html).
**/
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addresses" }),
        __metadata("design:type", Object)
    ], User.prototype, "addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=agreedToTerms" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "agreedToTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aliases" }),
        __metadata("design:type", Array)
    ], User.prototype, "aliases", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changePasswordAtNextLogin" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "changePasswordAtNextLogin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationTime" }),
        __metadata("design:type", Date)
    ], User.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customSchemas" }),
        __metadata("design:type", Map)
    ], User.prototype, "customSchemas", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerId" }),
        __metadata("design:type", String)
    ], User.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deletionTime" }),
        __metadata("design:type", Date)
    ], User.prototype, "deletionTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emails" }),
        __metadata("design:type", Object)
    ], User.prototype, "emails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], User.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalIds" }),
        __metadata("design:type", Object)
    ], User.prototype, "externalIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gender" }),
        __metadata("design:type", Object)
    ], User.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hashFunction" }),
        __metadata("design:type", String)
    ], User.prototype, "hashFunction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], User.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ims" }),
        __metadata("design:type", Object)
    ], User.prototype, "ims", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeInGlobalAddressList" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "includeInGlobalAddressList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipWhitelisted" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "ipWhitelisted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isAdmin" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "isAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDelegatedAdmin" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "isDelegatedAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isEnforcedIn2Sv" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "isEnforcedIn2Sv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isEnrolledIn2Sv" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "isEnrolledIn2Sv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isMailboxSetup" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "isMailboxSetup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keywords" }),
        __metadata("design:type", Object)
    ], User.prototype, "keywords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], User.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languages" }),
        __metadata("design:type", Object)
    ], User.prototype, "languages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastLoginTime" }),
        __metadata("design:type", Date)
    ], User.prototype, "lastLoginTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locations" }),
        __metadata("design:type", Object)
    ], User.prototype, "locations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", UserName)
    ], User.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nonEditableAliases" }),
        __metadata("design:type", Array)
    ], User.prototype, "nonEditableAliases", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", Object)
    ], User.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orgUnitPath" }),
        __metadata("design:type", String)
    ], User.prototype, "orgUnitPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations" }),
        __metadata("design:type", Object)
    ], User.prototype, "organizations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phones" }),
        __metadata("design:type", Object)
    ], User.prototype, "phones", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=posixAccounts" }),
        __metadata("design:type", Object)
    ], User.prototype, "posixAccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryEmail" }),
        __metadata("design:type", String)
    ], User.prototype, "primaryEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recoveryEmail" }),
        __metadata("design:type", String)
    ], User.prototype, "recoveryEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recoveryPhone" }),
        __metadata("design:type", String)
    ], User.prototype, "recoveryPhone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relations" }),
        __metadata("design:type", Object)
    ], User.prototype, "relations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sshPublicKeys" }),
        __metadata("design:type", Object)
    ], User.prototype, "sshPublicKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suspended" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "suspended", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suspensionReason" }),
        __metadata("design:type", String)
    ], User.prototype, "suspensionReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnailPhotoEtag" }),
        __metadata("design:type", String)
    ], User.prototype, "thumbnailPhotoEtag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnailPhotoUrl" }),
        __metadata("design:type", String)
    ], User.prototype, "thumbnailPhotoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=websites" }),
        __metadata("design:type", Object)
    ], User.prototype, "websites", void 0);
    return User;
}(SpeakeasyBase));
export { User };
