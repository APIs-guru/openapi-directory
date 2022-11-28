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
// FirstAdminUser
/**
 * First administrator user
**/
var FirstAdminUser = /** @class */ (function (_super) {
    __extends(FirstAdminUser, _super);
    function FirstAdminUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authData" }),
        __metadata("design:type", UserAuthData)
    ], FirstAdminUser.prototype, "authData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authMethods", elemType: UserAuthMethod }),
        __metadata("design:type", Array)
    ], FirstAdminUser.prototype, "authMethods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], FirstAdminUser.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstName" }),
        __metadata("design:type", String)
    ], FirstAdminUser.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gender" }),
        __metadata("design:type", String)
    ], FirstAdminUser.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], FirstAdminUser.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastName" }),
        __metadata("design:type", String)
    ], FirstAdminUser.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], FirstAdminUser.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=needsToChangePassword" }),
        __metadata("design:type", Boolean)
    ], FirstAdminUser.prototype, "needsToChangePassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=needsToChangeUserName" }),
        __metadata("design:type", Boolean)
    ], FirstAdminUser.prototype, "needsToChangeUserName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notifyUser" }),
        __metadata("design:type", Boolean)
    ], FirstAdminUser.prototype, "notifyUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], FirstAdminUser.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], FirstAdminUser.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=receiverLanguage" }),
        __metadata("design:type", String)
    ], FirstAdminUser.prototype, "receiverLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], FirstAdminUser.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userName" }),
        __metadata("design:type", String)
    ], FirstAdminUser.prototype, "userName", void 0);
    return FirstAdminUser;
}(SpeakeasyBase));
export { FirstAdminUser };
