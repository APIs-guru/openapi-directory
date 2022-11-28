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
export var AutomationEntityAutomationEnum;
(function (AutomationEntityAutomationEnum) {
    AutomationEntityAutomationEnum["CreateFolder"] = "create_folder";
    AutomationEntityAutomationEnum["RequestFile"] = "request_file";
    AutomationEntityAutomationEnum["RequestMove"] = "request_move";
    AutomationEntityAutomationEnum["CopyNewestFile"] = "copy_newest_file";
    AutomationEntityAutomationEnum["DeleteFile"] = "delete_file";
    AutomationEntityAutomationEnum["CopyFile"] = "copy_file";
    AutomationEntityAutomationEnum["MoveFile"] = "move_file";
})(AutomationEntityAutomationEnum || (AutomationEntityAutomationEnum = {}));
export var AutomationEntityTriggerEnum;
(function (AutomationEntityTriggerEnum) {
    AutomationEntityTriggerEnum["Realtime"] = "realtime";
    AutomationEntityTriggerEnum["Daily"] = "daily";
    AutomationEntityTriggerEnum["CustomSchedule"] = "custom_schedule";
    AutomationEntityTriggerEnum["Webhook"] = "webhook";
    AutomationEntityTriggerEnum["Email"] = "email";
    AutomationEntityTriggerEnum["Action"] = "action";
})(AutomationEntityTriggerEnum || (AutomationEntityTriggerEnum = {}));
// AutomationEntity
/**
 * List Automations
**/
var AutomationEntity = /** @class */ (function (_super) {
    __extends(AutomationEntity, _super);
    function AutomationEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=automation" }),
        __metadata("design:type", String)
    ], AutomationEntity.prototype, "automation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_replace_from" }),
        __metadata("design:type", String)
    ], AutomationEntity.prototype, "destinationReplaceFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_replace_to" }),
        __metadata("design:type", String)
    ], AutomationEntity.prototype, "destinationReplaceTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinations" }),
        __metadata("design:type", String)
    ], AutomationEntity.prototype, "destinations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group_ids" }),
        __metadata("design:type", Array)
    ], AutomationEntity.prototype, "groupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], AutomationEntity.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interval" }),
        __metadata("design:type", String)
    ], AutomationEntity.prototype, "interval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_process_on" }),
        __metadata("design:type", String)
    ], AutomationEntity.prototype, "nextProcessOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], AutomationEntity.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule" }),
        __metadata("design:type", Map)
    ], AutomationEntity.prototype, "schedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], AutomationEntity.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trigger" }),
        __metadata("design:type", String)
    ], AutomationEntity.prototype, "trigger", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trigger_action_path" }),
        __metadata("design:type", String)
    ], AutomationEntity.prototype, "triggerActionPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trigger_actions" }),
        __metadata("design:type", String)
    ], AutomationEntity.prototype, "triggerActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_id" }),
        __metadata("design:type", Number)
    ], AutomationEntity.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_ids" }),
        __metadata("design:type", Array)
    ], AutomationEntity.prototype, "userIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Map)
    ], AutomationEntity.prototype, "value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhook_url" }),
        __metadata("design:type", String)
    ], AutomationEntity.prototype, "webhookUrl", void 0);
    return AutomationEntity;
}(SpeakeasyBase));
export { AutomationEntity };
