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
import { CharacterRules } from "./characterrules";
import { PasswordExpiration } from "./passwordexpiration";
import { UserLockout } from "./userlockout";
// UpdateLoginPasswordPolicies
/**
 * Request model for updating login password policies
**/
var UpdateLoginPasswordPolicies = /** @class */ (function (_super) {
    __extends(UpdateLoginPasswordPolicies, _super);
    function UpdateLoginPasswordPolicies() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=characterRules" }),
        __metadata("design:type", CharacterRules)
    ], UpdateLoginPasswordPolicies.prototype, "characterRules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enforceLoginPasswordChange" }),
        __metadata("design:type", Boolean)
    ], UpdateLoginPasswordPolicies.prototype, "enforceLoginPasswordChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minLength" }),
        __metadata("design:type", Number)
    ], UpdateLoginPasswordPolicies.prototype, "minLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numberOfArchivedPasswords" }),
        __metadata("design:type", Number)
    ], UpdateLoginPasswordPolicies.prototype, "numberOfArchivedPasswords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passwordExpiration" }),
        __metadata("design:type", PasswordExpiration)
    ], UpdateLoginPasswordPolicies.prototype, "passwordExpiration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rejectDictionaryWords" }),
        __metadata("design:type", Boolean)
    ], UpdateLoginPasswordPolicies.prototype, "rejectDictionaryWords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rejectKeyboardPatterns" }),
        __metadata("design:type", Boolean)
    ], UpdateLoginPasswordPolicies.prototype, "rejectKeyboardPatterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rejectUserInfo" }),
        __metadata("design:type", Boolean)
    ], UpdateLoginPasswordPolicies.prototype, "rejectUserInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userLockout" }),
        __metadata("design:type", UserLockout)
    ], UpdateLoginPasswordPolicies.prototype, "userLockout", void 0);
    return UpdateLoginPasswordPolicies;
}(SpeakeasyBase));
export { UpdateLoginPasswordPolicies };
