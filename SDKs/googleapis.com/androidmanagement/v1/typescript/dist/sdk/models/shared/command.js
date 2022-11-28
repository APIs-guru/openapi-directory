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
import { ClearAppsDataParams } from "./clearappsdataparams";
import { ClearAppsDataStatus } from "./clearappsdatastatus";
export var CommandErrorCodeEnum;
(function (CommandErrorCodeEnum) {
    CommandErrorCodeEnum["CommandErrorCodeUnspecified"] = "COMMAND_ERROR_CODE_UNSPECIFIED";
    CommandErrorCodeEnum["Unknown"] = "UNKNOWN";
    CommandErrorCodeEnum["ApiLevel"] = "API_LEVEL";
    CommandErrorCodeEnum["ManagementMode"] = "MANAGEMENT_MODE";
    CommandErrorCodeEnum["InvalidValue"] = "INVALID_VALUE";
    CommandErrorCodeEnum["Unsupported"] = "UNSUPPORTED";
})(CommandErrorCodeEnum || (CommandErrorCodeEnum = {}));
export var CommandResetPasswordFlagsEnum;
(function (CommandResetPasswordFlagsEnum) {
    CommandResetPasswordFlagsEnum["ResetPasswordFlagUnspecified"] = "RESET_PASSWORD_FLAG_UNSPECIFIED";
    CommandResetPasswordFlagsEnum["RequireEntry"] = "REQUIRE_ENTRY";
    CommandResetPasswordFlagsEnum["DoNotAskCredentialsOnBoot"] = "DO_NOT_ASK_CREDENTIALS_ON_BOOT";
    CommandResetPasswordFlagsEnum["LockNow"] = "LOCK_NOW";
})(CommandResetPasswordFlagsEnum || (CommandResetPasswordFlagsEnum = {}));
export var CommandTypeEnum;
(function (CommandTypeEnum) {
    CommandTypeEnum["CommandTypeUnspecified"] = "COMMAND_TYPE_UNSPECIFIED";
    CommandTypeEnum["Lock"] = "LOCK";
    CommandTypeEnum["ResetPassword"] = "RESET_PASSWORD";
    CommandTypeEnum["Reboot"] = "REBOOT";
    CommandTypeEnum["RelinquishOwnership"] = "RELINQUISH_OWNERSHIP";
    CommandTypeEnum["ClearAppData"] = "CLEAR_APP_DATA";
})(CommandTypeEnum || (CommandTypeEnum = {}));
// Command
/**
 * A command.
**/
var Command = /** @class */ (function (_super) {
    __extends(Command, _super);
    function Command() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clearAppsDataParams" }),
        __metadata("design:type", ClearAppsDataParams)
    ], Command.prototype, "clearAppsDataParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clearAppsDataStatus" }),
        __metadata("design:type", ClearAppsDataStatus)
    ], Command.prototype, "clearAppsDataStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Command.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], Command.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorCode" }),
        __metadata("design:type", String)
    ], Command.prototype, "errorCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newPassword" }),
        __metadata("design:type", String)
    ], Command.prototype, "newPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resetPasswordFlags" }),
        __metadata("design:type", Array)
    ], Command.prototype, "resetPasswordFlags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Command.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userName" }),
        __metadata("design:type", String)
    ], Command.prototype, "userName", void 0);
    return Command;
}(SpeakeasyBase));
export { Command };
