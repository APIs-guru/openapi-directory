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
var OrgHookConfig = /** @class */ (function (_super) {
    __extends(OrgHookConfig, _super);
    function OrgHookConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content_type" }),
        __metadata("design:type", String)
    ], OrgHookConfig.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insecure_ssl" }),
        __metadata("design:type", String)
    ], OrgHookConfig.prototype, "insecureSsl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secret" }),
        __metadata("design:type", String)
    ], OrgHookConfig.prototype, "secret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], OrgHookConfig.prototype, "url", void 0);
    return OrgHookConfig;
}(SpeakeasyBase));
export { OrgHookConfig };
// OrgHook
/**
 * Org Hook
**/
var OrgHook = /** @class */ (function (_super) {
    __extends(OrgHook, _super);
    function OrgHook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], OrgHook.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config" }),
        __metadata("design:type", OrgHookConfig)
    ], OrgHook.prototype, "config", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], OrgHook.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events" }),
        __metadata("design:type", Array)
    ], OrgHook.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], OrgHook.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OrgHook.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ping_url" }),
        __metadata("design:type", String)
    ], OrgHook.prototype, "pingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], OrgHook.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], OrgHook.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], OrgHook.prototype, "url", void 0);
    return OrgHook;
}(SpeakeasyBase));
export { OrgHook };
