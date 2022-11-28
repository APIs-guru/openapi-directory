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
var AuditLogEvent = /** @class */ (function (_super) {
    __extends(AuditLogEvent, _super);
    function AuditLogEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@timestamp" }),
        __metadata("design:type", Number)
    ], AuditLogEvent.prototype, "atTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], AuditLogEvent.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], AuditLogEvent.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active_was" }),
        __metadata("design:type", Boolean)
    ], AuditLogEvent.prototype, "activeWas", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actor" }),
        __metadata("design:type", String)
    ], AuditLogEvent.prototype, "actor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blocked_user" }),
        __metadata("design:type", String)
    ], AuditLogEvent.prototype, "blockedUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=business" }),
        __metadata("design:type", String)
    ], AuditLogEvent.prototype, "business", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config" }),
        __metadata("design:type", Array)
    ], AuditLogEvent.prototype, "config", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config_was" }),
        __metadata("design:type", Array)
    ], AuditLogEvent.prototype, "configWas", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content_type" }),
        __metadata("design:type", String)
    ], AuditLogEvent.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Number)
    ], AuditLogEvent.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deploy_key_fingerprint" }),
        __metadata("design:type", String)
    ], AuditLogEvent.prototype, "deployKeyFingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emoji" }),
        __metadata("design:type", String)
    ], AuditLogEvent.prototype, "emoji", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events" }),
        __metadata("design:type", Array)
    ], AuditLogEvent.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_were" }),
        __metadata("design:type", Array)
    ], AuditLogEvent.prototype, "eventsWere", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=explanation" }),
        __metadata("design:type", String)
    ], AuditLogEvent.prototype, "explanation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fingerprint" }),
        __metadata("design:type", String)
    ], AuditLogEvent.prototype, "fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hook_id" }),
        __metadata("design:type", Number)
    ], AuditLogEvent.prototype, "hookId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limited_availability" }),
        __metadata("design:type", Boolean)
    ], AuditLogEvent.prototype, "limitedAvailability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AuditLogEvent.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AuditLogEvent.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=old_user" }),
        __metadata("design:type", String)
    ], AuditLogEvent.prototype, "oldUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=openssh_public_key" }),
        __metadata("design:type", String)
    ], AuditLogEvent.prototype, "opensshPublicKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=org" }),
        __metadata("design:type", String)
    ], AuditLogEvent.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_visibility" }),
        __metadata("design:type", String)
    ], AuditLogEvent.prototype, "previousVisibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=read_only" }),
        __metadata("design:type", Boolean)
    ], AuditLogEvent.prototype, "readOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repo" }),
        __metadata("design:type", String)
    ], AuditLogEvent.prototype, "repo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repository" }),
        __metadata("design:type", String)
    ], AuditLogEvent.prototype, "repository", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repository_public" }),
        __metadata("design:type", Boolean)
    ], AuditLogEvent.prototype, "repositoryPublic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target_login" }),
        __metadata("design:type", String)
    ], AuditLogEvent.prototype, "targetLogin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=team" }),
        __metadata("design:type", String)
    ], AuditLogEvent.prototype, "team", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transport_protocol" }),
        __metadata("design:type", Number)
    ], AuditLogEvent.prototype, "transportProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transport_protocol_name" }),
        __metadata("design:type", String)
    ], AuditLogEvent.prototype, "transportProtocolName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", String)
    ], AuditLogEvent.prototype, "user", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibility" }),
        __metadata("design:type", String)
    ], AuditLogEvent.prototype, "visibility", void 0);
    return AuditLogEvent;
}(SpeakeasyBase));
export { AuditLogEvent };
