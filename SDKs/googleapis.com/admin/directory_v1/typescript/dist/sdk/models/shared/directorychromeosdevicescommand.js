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
import { DirectoryChromeosdevicesCommandResult } from "./directorychromeosdevicescommandresult";
export var DirectoryChromeosdevicesCommandStateEnum;
(function (DirectoryChromeosdevicesCommandStateEnum) {
    DirectoryChromeosdevicesCommandStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    DirectoryChromeosdevicesCommandStateEnum["Pending"] = "PENDING";
    DirectoryChromeosdevicesCommandStateEnum["Expired"] = "EXPIRED";
    DirectoryChromeosdevicesCommandStateEnum["Cancelled"] = "CANCELLED";
    DirectoryChromeosdevicesCommandStateEnum["SentToClient"] = "SENT_TO_CLIENT";
    DirectoryChromeosdevicesCommandStateEnum["AckedByClient"] = "ACKED_BY_CLIENT";
    DirectoryChromeosdevicesCommandStateEnum["ExecutedByClient"] = "EXECUTED_BY_CLIENT";
})(DirectoryChromeosdevicesCommandStateEnum || (DirectoryChromeosdevicesCommandStateEnum = {}));
export var DirectoryChromeosdevicesCommandTypeEnum;
(function (DirectoryChromeosdevicesCommandTypeEnum) {
    DirectoryChromeosdevicesCommandTypeEnum["CommandTypeUnspecified"] = "COMMAND_TYPE_UNSPECIFIED";
    DirectoryChromeosdevicesCommandTypeEnum["Reboot"] = "REBOOT";
    DirectoryChromeosdevicesCommandTypeEnum["TakeAScreenshot"] = "TAKE_A_SCREENSHOT";
    DirectoryChromeosdevicesCommandTypeEnum["SetVolume"] = "SET_VOLUME";
    DirectoryChromeosdevicesCommandTypeEnum["WipeUsers"] = "WIPE_USERS";
    DirectoryChromeosdevicesCommandTypeEnum["RemotePowerwash"] = "REMOTE_POWERWASH";
})(DirectoryChromeosdevicesCommandTypeEnum || (DirectoryChromeosdevicesCommandTypeEnum = {}));
// DirectoryChromeosdevicesCommand
/**
 * Information regarding a command that was issued to a device.
**/
var DirectoryChromeosdevicesCommand = /** @class */ (function (_super) {
    __extends(DirectoryChromeosdevicesCommand, _super);
    function DirectoryChromeosdevicesCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commandExpireTime" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesCommand.prototype, "commandExpireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commandId" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesCommand.prototype, "commandId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commandResult" }),
        __metadata("design:type", DirectoryChromeosdevicesCommandResult)
    ], DirectoryChromeosdevicesCommand.prototype, "commandResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issueTime" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesCommand.prototype, "issueTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payload" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesCommand.prototype, "payload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesCommand.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesCommand.prototype, "type", void 0);
    return DirectoryChromeosdevicesCommand;
}(SpeakeasyBase));
export { DirectoryChromeosdevicesCommand };
