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
import { UserAuthData } from "./userauthdata";
import { UserAuthMethod } from "./userauthmethod";
import { CustomerData } from "./customerdata";
import { UserAttributes } from "./userattributes";
import { UserGroup } from "./usergroup";
import { RoleList } from "./rolelist";
// UserAccount
/**
 * User information
**/
var UserAccount = /** @class */ (function (_super) {
    __extends(UserAccount, _super);
    function UserAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authData" }),
        __metadata("design:type", UserAuthData)
    ], UserAccount.prototype, "authData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authMethods", elemType: UserAuthMethod }),
        __metadata("design:type", Array)
    ], UserAccount.prototype, "authMethods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customer" }),
        __metadata("design:type", CustomerData)
    ], UserAccount.prototype, "customer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], UserAccount.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireAt" }),
        __metadata("design:type", Date)
    ], UserAccount.prototype, "expireAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstName" }),
        __metadata("design:type", String)
    ], UserAccount.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gender" }),
        __metadata("design:type", String)
    ], UserAccount.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasManageableRooms" }),
        __metadata("design:type", Boolean)
    ], UserAccount.prototype, "hasManageableRooms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homeRoomId" }),
        __metadata("design:type", Number)
    ], UserAccount.prototype, "homeRoomId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], UserAccount.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isEncryptionEnabled" }),
        __metadata("design:type", Boolean)
    ], UserAccount.prototype, "isEncryptionEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isLocked" }),
        __metadata("design:type", Boolean)
    ], UserAccount.prototype, "isLocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], UserAccount.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastLoginFailAt" }),
        __metadata("design:type", Date)
    ], UserAccount.prototype, "lastLoginFailAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastLoginFailIp" }),
        __metadata("design:type", String)
    ], UserAccount.prototype, "lastLoginFailIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastLoginSuccessAt" }),
        __metadata("design:type", Date)
    ], UserAccount.prototype, "lastLoginSuccessAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastLoginSuccessIp" }),
        __metadata("design:type", String)
    ], UserAccount.prototype, "lastLoginSuccessIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastName" }),
        __metadata("design:type", String)
    ], UserAccount.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lockStatus" }),
        __metadata("design:type", Number)
    ], UserAccount.prototype, "lockStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], UserAccount.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mustSetEmail" }),
        __metadata("design:type", Boolean)
    ], UserAccount.prototype, "mustSetEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=needsToAcceptEULA" }),
        __metadata("design:type", Boolean)
    ], UserAccount.prototype, "needsToAcceptEula", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=needsToChangePassword" }),
        __metadata("design:type", Boolean)
    ], UserAccount.prototype, "needsToChangePassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=needsToChangeUserName" }),
        __metadata("design:type", Boolean)
    ], UserAccount.prototype, "needsToChangeUserName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], UserAccount.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], UserAccount.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userAttributes" }),
        __metadata("design:type", UserAttributes)
    ], UserAccount.prototype, "userAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userGroups", elemType: UserGroup }),
        __metadata("design:type", Array)
    ], UserAccount.prototype, "userGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userName" }),
        __metadata("design:type", String)
    ], UserAccount.prototype, "userName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userRoles" }),
        __metadata("design:type", RoleList)
    ], UserAccount.prototype, "userRoles", void 0);
    return UserAccount;
}(SpeakeasyBase));
export { UserAccount };
