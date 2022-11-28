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
import { ExternalConnection } from "./externalconnection";
import { UserSettings } from "./usersettings";
import { SubscriptionPlan } from "./subscriptionplan";
export var UserStatusEnum;
(function (UserStatusEnum) {
    UserStatusEnum["Normal"] = "Normal";
    UserStatusEnum["Fraudlent"] = "Fraudlent";
    UserStatusEnum["Locked"] = "Locked";
})(UserStatusEnum || (UserStatusEnum = {}));
export var UserTypeEnum;
(function (UserTypeEnum) {
    UserTypeEnum["Anonymous"] = "Anonymous";
    UserTypeEnum["Customer"] = "Customer";
    UserTypeEnum["SystemAdministrator"] = "SystemAdministrator";
    UserTypeEnum["Collaborator"] = "Collaborator";
})(UserTypeEnum || (UserTypeEnum = {}));
export var UserYearsOfExperienceEnum;
(function (UserYearsOfExperienceEnum) {
    UserYearsOfExperienceEnum["One"] = "One";
    UserYearsOfExperienceEnum["OneToThree"] = "OneToThree";
    UserYearsOfExperienceEnum["ThreeToFive"] = "ThreeToFive";
    UserYearsOfExperienceEnum["SixPlus"] = "SixPlus";
})(UserYearsOfExperienceEnum || (UserYearsOfExperienceEnum = {}));
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActionNotificationsLastReadOn" }),
        __metadata("design:type", Date)
    ], User.prototype, "actionNotificationsLastReadOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Email" }),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExternalConnections", elemType: ExternalConnection }),
        __metadata("design:type", Array)
    ], User.prototype, "externalConnections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasBeenOnboarded" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "hasBeenOnboarded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsLocked" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "isLocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsVerified" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "isVerified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KnowledgeNotificationsLastReadOn" }),
        __metadata("design:type", Date)
    ], User.prototype, "knowledgeNotificationsLastReadOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastSeenOn" }),
        __metadata("design:type", Date)
    ], User.prototype, "lastSeenOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], User.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Password" }),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PasswordSalt" }),
        __metadata("design:type", String)
    ], User.prototype, "passwordSalt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReferralPath" }),
        __metadata("design:type", String)
    ], User.prototype, "referralPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReferredUsers" }),
        __metadata("design:type", Number)
    ], User.prototype, "referredUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReferrerKey" }),
        __metadata("design:type", String)
    ], User.prototype, "referrerKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Settings" }),
        __metadata("design:type", UserSettings)
    ], User.prototype, "settings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], User.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubscriptionPlan" }),
        __metadata("design:type", SubscriptionPlan)
    ], User.prototype, "subscriptionPlan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], User.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Username" }),
        __metadata("design:type", String)
    ], User.prototype, "username", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VerifiedOn" }),
        __metadata("design:type", Date)
    ], User.prototype, "verifiedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=YearsOfExperience" }),
        __metadata("design:type", String)
    ], User.prototype, "yearsOfExperience", void 0);
    return User;
}(SpeakeasyBase));
export { User };
