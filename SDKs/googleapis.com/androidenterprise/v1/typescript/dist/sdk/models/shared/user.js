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
export var UserAccountTypeEnum;
(function (UserAccountTypeEnum) {
    UserAccountTypeEnum["DeviceAccount"] = "deviceAccount";
    UserAccountTypeEnum["UserAccount"] = "userAccount";
})(UserAccountTypeEnum || (UserAccountTypeEnum = {}));
export var UserManagementTypeEnum;
(function (UserManagementTypeEnum) {
    UserManagementTypeEnum["GoogleManaged"] = "googleManaged";
    UserManagementTypeEnum["EmmManaged"] = "emmManaged";
})(UserManagementTypeEnum || (UserManagementTypeEnum = {}));
// User
/**
 * A Users resource represents an account associated with an enterprise. The account may be specific to a device or to an individual user (who can then use the account across multiple devices). The account may provide access to managed Google Play only, or to other Google services, depending on the identity model: - The Google managed domain identity model requires synchronization to Google account sources (via primaryEmail). - The managed Google Play Accounts identity model provides a dynamic means for enterprises to create user or device accounts as needed. These accounts provide access to managed Google Play.
**/
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountIdentifier" }),
        __metadata("design:type", String)
    ], User.prototype, "accountIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountType" }),
        __metadata("design:type", String)
    ], User.prototype, "accountType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], User.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], User.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managementType" }),
        __metadata("design:type", String)
    ], User.prototype, "managementType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryEmail" }),
        __metadata("design:type", String)
    ], User.prototype, "primaryEmail", void 0);
    return User;
}(SpeakeasyBase));
export { User };
