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
import { ObjectExpiration } from "./objectexpiration";
// CreateUserRequest
/**
 * Request model for creating an user
**/
var CreateUserRequest = /** @class */ (function (_super) {
    __extends(CreateUserRequest, _super);
    function CreateUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authData" }),
        __metadata("design:type", UserAuthData)
    ], CreateUserRequest.prototype, "authData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authMethods", elemType: UserAuthMethod }),
        __metadata("design:type", Array)
    ], CreateUserRequest.prototype, "authMethods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], CreateUserRequest.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiration" }),
        __metadata("design:type", ObjectExpiration)
    ], CreateUserRequest.prototype, "expiration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstName" }),
        __metadata("design:type", String)
    ], CreateUserRequest.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gender" }),
        __metadata("design:type", String)
    ], CreateUserRequest.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isNonmemberViewer" }),
        __metadata("design:type", Boolean)
    ], CreateUserRequest.prototype, "isNonmemberViewer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastName" }),
        __metadata("design:type", String)
    ], CreateUserRequest.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], CreateUserRequest.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=needsToChangePassword" }),
        __metadata("design:type", Boolean)
    ], CreateUserRequest.prototype, "needsToChangePassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notifyUser" }),
        __metadata("design:type", Boolean)
    ], CreateUserRequest.prototype, "notifyUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], CreateUserRequest.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], CreateUserRequest.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=receiverLanguage" }),
        __metadata("design:type", String)
    ], CreateUserRequest.prototype, "receiverLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], CreateUserRequest.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userName" }),
        __metadata("design:type", String)
    ], CreateUserRequest.prototype, "userName", void 0);
    return CreateUserRequest;
}(SpeakeasyBase));
export { CreateUserRequest };
