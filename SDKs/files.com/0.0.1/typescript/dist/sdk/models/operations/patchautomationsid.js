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
import * as shared from "../shared";
var PatchAutomationsIdPathParams = /** @class */ (function (_super) {
    __extends(PatchAutomationsIdPathParams, _super);
    function PatchAutomationsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PatchAutomationsIdPathParams.prototype, "id", void 0);
    return PatchAutomationsIdPathParams;
}(SpeakeasyBase));
export { PatchAutomationsIdPathParams };
export var PatchAutomationsIdRequestBodyAutomationEnum;
(function (PatchAutomationsIdRequestBodyAutomationEnum) {
    PatchAutomationsIdRequestBodyAutomationEnum["CreateFolder"] = "create_folder";
    PatchAutomationsIdRequestBodyAutomationEnum["RequestFile"] = "request_file";
    PatchAutomationsIdRequestBodyAutomationEnum["RequestMove"] = "request_move";
    PatchAutomationsIdRequestBodyAutomationEnum["CopyNewestFile"] = "copy_newest_file";
    PatchAutomationsIdRequestBodyAutomationEnum["DeleteFile"] = "delete_file";
    PatchAutomationsIdRequestBodyAutomationEnum["CopyFile"] = "copy_file";
    PatchAutomationsIdRequestBodyAutomationEnum["MoveFile"] = "move_file";
})(PatchAutomationsIdRequestBodyAutomationEnum || (PatchAutomationsIdRequestBodyAutomationEnum = {}));
export var PatchAutomationsIdRequestBodyTriggerEnum;
(function (PatchAutomationsIdRequestBodyTriggerEnum) {
    PatchAutomationsIdRequestBodyTriggerEnum["Realtime"] = "realtime";
    PatchAutomationsIdRequestBodyTriggerEnum["Daily"] = "daily";
    PatchAutomationsIdRequestBodyTriggerEnum["CustomSchedule"] = "custom_schedule";
    PatchAutomationsIdRequestBodyTriggerEnum["Webhook"] = "webhook";
    PatchAutomationsIdRequestBodyTriggerEnum["Email"] = "email";
    PatchAutomationsIdRequestBodyTriggerEnum["Action"] = "action";
})(PatchAutomationsIdRequestBodyTriggerEnum || (PatchAutomationsIdRequestBodyTriggerEnum = {}));
var PatchAutomationsIdRequestBody = /** @class */ (function (_super) {
    __extends(PatchAutomationsIdRequestBody, _super);
    function PatchAutomationsIdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=automation" }),
        __metadata("design:type", String)
    ], PatchAutomationsIdRequestBody.prototype, "automation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=destination" }),
        __metadata("design:type", String)
    ], PatchAutomationsIdRequestBody.prototype, "destination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=destination_replace_from" }),
        __metadata("design:type", String)
    ], PatchAutomationsIdRequestBody.prototype, "destinationReplaceFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=destination_replace_to" }),
        __metadata("design:type", String)
    ], PatchAutomationsIdRequestBody.prototype, "destinationReplaceTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=destinations" }),
        __metadata("design:type", Array)
    ], PatchAutomationsIdRequestBody.prototype, "destinations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=group_ids" }),
        __metadata("design:type", String)
    ], PatchAutomationsIdRequestBody.prototype, "groupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=interval" }),
        __metadata("design:type", String)
    ], PatchAutomationsIdRequestBody.prototype, "interval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=path" }),
        __metadata("design:type", String)
    ], PatchAutomationsIdRequestBody.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=schedule;json=true" }),
        __metadata("design:type", Map)
    ], PatchAutomationsIdRequestBody.prototype, "schedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=source" }),
        __metadata("design:type", String)
    ], PatchAutomationsIdRequestBody.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=trigger" }),
        __metadata("design:type", String)
    ], PatchAutomationsIdRequestBody.prototype, "trigger", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=trigger_action_path" }),
        __metadata("design:type", String)
    ], PatchAutomationsIdRequestBody.prototype, "triggerActionPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=trigger_actions" }),
        __metadata("design:type", Array)
    ], PatchAutomationsIdRequestBody.prototype, "triggerActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=user_ids" }),
        __metadata("design:type", String)
    ], PatchAutomationsIdRequestBody.prototype, "userIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=value;json=true" }),
        __metadata("design:type", Map)
    ], PatchAutomationsIdRequestBody.prototype, "value", void 0);
    return PatchAutomationsIdRequestBody;
}(SpeakeasyBase));
export { PatchAutomationsIdRequestBody };
var PatchAutomationsIdRequest = /** @class */ (function (_super) {
    __extends(PatchAutomationsIdRequest, _super);
    function PatchAutomationsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchAutomationsIdPathParams)
    ], PatchAutomationsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PatchAutomationsIdRequestBody)
    ], PatchAutomationsIdRequest.prototype, "request", void 0);
    return PatchAutomationsIdRequest;
}(SpeakeasyBase));
export { PatchAutomationsIdRequest };
var PatchAutomationsIdResponse = /** @class */ (function (_super) {
    __extends(PatchAutomationsIdResponse, _super);
    function PatchAutomationsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AutomationEntity)
    ], PatchAutomationsIdResponse.prototype, "automationEntity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchAutomationsIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchAutomationsIdResponse.prototype, "statusCode", void 0);
    return PatchAutomationsIdResponse;
}(SpeakeasyBase));
export { PatchAutomationsIdResponse };
