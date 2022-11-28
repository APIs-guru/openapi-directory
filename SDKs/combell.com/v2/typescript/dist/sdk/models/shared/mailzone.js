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
import { Alias } from "./alias";
import { AntiSpam } from "./antispam";
import { MailZoneAccount } from "./mailzoneaccount";
import { CatchAll } from "./catchall";
import { SmtpDomain } from "./smtpdomain";
var MailZone = /** @class */ (function (_super) {
    __extends(MailZone, _super);
    function MailZone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aliases", elemType: Alias }),
        __metadata("design:type", Array)
    ], MailZone.prototype, "aliases", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=anti_spam" }),
        __metadata("design:type", AntiSpam)
    ], MailZone.prototype, "antiSpam", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available_accounts", elemType: MailZoneAccount }),
        __metadata("design:type", Array)
    ], MailZone.prototype, "availableAccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=catch_all" }),
        __metadata("design:type", CatchAll)
    ], MailZone.prototype, "catchAll", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], MailZone.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MailZone.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smtp_domains", elemType: SmtpDomain }),
        __metadata("design:type", Array)
    ], MailZone.prototype, "smtpDomains", void 0);
    return MailZone;
}(SpeakeasyBase));
export { MailZone };
