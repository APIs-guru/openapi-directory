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
import { HookResponse } from "./hookresponse";
var HookConfig = /** @class */ (function (_super) {
    __extends(HookConfig, _super);
    function HookConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content_type" }),
        __metadata("design:type", String)
    ], HookConfig.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=digest" }),
        __metadata("design:type", String)
    ], HookConfig.prototype, "digest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], HookConfig.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insecure_ssl" }),
        __metadata("design:type", String)
    ], HookConfig.prototype, "insecureSsl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], HookConfig.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=room" }),
        __metadata("design:type", String)
    ], HookConfig.prototype, "room", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secret" }),
        __metadata("design:type", String)
    ], HookConfig.prototype, "secret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subdomain" }),
        __metadata("design:type", String)
    ], HookConfig.prototype, "subdomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], HookConfig.prototype, "token", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], HookConfig.prototype, "url", void 0);
    return HookConfig;
}(SpeakeasyBase));
export { HookConfig };
// Hook
/**
 * Webhooks for repositories.
**/
var Hook = /** @class */ (function (_super) {
    __extends(Hook, _super);
    function Hook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], Hook.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config" }),
        __metadata("design:type", HookConfig)
    ], Hook.prototype, "config", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Hook.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events" }),
        __metadata("design:type", Array)
    ], Hook.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Hook.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_response" }),
        __metadata("design:type", HookResponse)
    ], Hook.prototype, "lastResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Hook.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ping_url" }),
        __metadata("design:type", String)
    ], Hook.prototype, "pingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=test_url" }),
        __metadata("design:type", String)
    ], Hook.prototype, "testUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Hook.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Hook.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Hook.prototype, "url", void 0);
    return Hook;
}(SpeakeasyBase));
export { Hook };
