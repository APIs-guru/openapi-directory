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
var ScheduleApiTriggeredCanvasesRequestBodyAudienceAndCustomAttribute = /** @class */ (function (_super) {
    __extends(ScheduleApiTriggeredCanvasesRequestBodyAudienceAndCustomAttribute, _super);
    function ScheduleApiTriggeredCanvasesRequestBodyAudienceAndCustomAttribute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comparison" }),
        __metadata("design:type", String)
    ], ScheduleApiTriggeredCanvasesRequestBodyAudienceAndCustomAttribute.prototype, "comparison", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_attribute_name" }),
        __metadata("design:type", String)
    ], ScheduleApiTriggeredCanvasesRequestBodyAudienceAndCustomAttribute.prototype, "customAttributeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ScheduleApiTriggeredCanvasesRequestBodyAudienceAndCustomAttribute.prototype, "value", void 0);
    return ScheduleApiTriggeredCanvasesRequestBodyAudienceAndCustomAttribute;
}(SpeakeasyBase));
export { ScheduleApiTriggeredCanvasesRequestBodyAudienceAndCustomAttribute };
var ScheduleApiTriggeredCanvasesRequestBodyAudienceAnd = /** @class */ (function (_super) {
    __extends(ScheduleApiTriggeredCanvasesRequestBodyAudienceAnd, _super);
    function ScheduleApiTriggeredCanvasesRequestBodyAudienceAnd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_attribute" }),
        __metadata("design:type", ScheduleApiTriggeredCanvasesRequestBodyAudienceAndCustomAttribute)
    ], ScheduleApiTriggeredCanvasesRequestBodyAudienceAnd.prototype, "customAttribute", void 0);
    return ScheduleApiTriggeredCanvasesRequestBodyAudienceAnd;
}(SpeakeasyBase));
export { ScheduleApiTriggeredCanvasesRequestBodyAudienceAnd };
var ScheduleApiTriggeredCanvasesRequestBodyAudience = /** @class */ (function (_super) {
    __extends(ScheduleApiTriggeredCanvasesRequestBodyAudience, _super);
    function ScheduleApiTriggeredCanvasesRequestBodyAudience() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AND", elemType: ScheduleApiTriggeredCanvasesRequestBodyAudienceAnd }),
        __metadata("design:type", Array)
    ], ScheduleApiTriggeredCanvasesRequestBodyAudience.prototype, "and", void 0);
    return ScheduleApiTriggeredCanvasesRequestBodyAudience;
}(SpeakeasyBase));
export { ScheduleApiTriggeredCanvasesRequestBodyAudience };
var ScheduleApiTriggeredCanvasesRequestBodyRecipients = /** @class */ (function (_super) {
    __extends(ScheduleApiTriggeredCanvasesRequestBodyRecipients, _super);
    function ScheduleApiTriggeredCanvasesRequestBodyRecipients() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canvas_entry_properties" }),
        __metadata("design:type", Map)
    ], ScheduleApiTriggeredCanvasesRequestBodyRecipients.prototype, "canvasEntryProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=external_user_id" }),
        __metadata("design:type", String)
    ], ScheduleApiTriggeredCanvasesRequestBodyRecipients.prototype, "externalUserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trigger_properties" }),
        __metadata("design:type", String)
    ], ScheduleApiTriggeredCanvasesRequestBodyRecipients.prototype, "triggerProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_alias" }),
        __metadata("design:type", String)
    ], ScheduleApiTriggeredCanvasesRequestBodyRecipients.prototype, "userAlias", void 0);
    return ScheduleApiTriggeredCanvasesRequestBodyRecipients;
}(SpeakeasyBase));
export { ScheduleApiTriggeredCanvasesRequestBodyRecipients };
var ScheduleApiTriggeredCanvasesRequestBodySchedule = /** @class */ (function (_super) {
    __extends(ScheduleApiTriggeredCanvasesRequestBodySchedule, _super);
    function ScheduleApiTriggeredCanvasesRequestBodySchedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=at_optimal_time" }),
        __metadata("design:type", Boolean)
    ], ScheduleApiTriggeredCanvasesRequestBodySchedule.prototype, "atOptimalTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=in_local_time" }),
        __metadata("design:type", Boolean)
    ], ScheduleApiTriggeredCanvasesRequestBodySchedule.prototype, "inLocalTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time" }),
        __metadata("design:type", String)
    ], ScheduleApiTriggeredCanvasesRequestBodySchedule.prototype, "time", void 0);
    return ScheduleApiTriggeredCanvasesRequestBodySchedule;
}(SpeakeasyBase));
export { ScheduleApiTriggeredCanvasesRequestBodySchedule };
var ScheduleApiTriggeredCanvasesRequestBody = /** @class */ (function (_super) {
    __extends(ScheduleApiTriggeredCanvasesRequestBody, _super);
    function ScheduleApiTriggeredCanvasesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audience" }),
        __metadata("design:type", ScheduleApiTriggeredCanvasesRequestBodyAudience)
    ], ScheduleApiTriggeredCanvasesRequestBody.prototype, "audience", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=broadcast" }),
        __metadata("design:type", Boolean)
    ], ScheduleApiTriggeredCanvasesRequestBody.prototype, "broadcast", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canvas_entry_properties" }),
        __metadata("design:type", Map)
    ], ScheduleApiTriggeredCanvasesRequestBody.prototype, "canvasEntryProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canvas_id" }),
        __metadata("design:type", String)
    ], ScheduleApiTriggeredCanvasesRequestBody.prototype, "canvasId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipients", elemType: ScheduleApiTriggeredCanvasesRequestBodyRecipients }),
        __metadata("design:type", Array)
    ], ScheduleApiTriggeredCanvasesRequestBody.prototype, "recipients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule" }),
        __metadata("design:type", ScheduleApiTriggeredCanvasesRequestBodySchedule)
    ], ScheduleApiTriggeredCanvasesRequestBody.prototype, "schedule", void 0);
    return ScheduleApiTriggeredCanvasesRequestBody;
}(SpeakeasyBase));
export { ScheduleApiTriggeredCanvasesRequestBody };
var ScheduleApiTriggeredCanvasesRequest = /** @class */ (function (_super) {
    __extends(ScheduleApiTriggeredCanvasesRequest, _super);
    function ScheduleApiTriggeredCanvasesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ScheduleApiTriggeredCanvasesRequestBody)
    ], ScheduleApiTriggeredCanvasesRequest.prototype, "request", void 0);
    return ScheduleApiTriggeredCanvasesRequest;
}(SpeakeasyBase));
export { ScheduleApiTriggeredCanvasesRequest };
var ScheduleApiTriggeredCanvasesResponse = /** @class */ (function (_super) {
    __extends(ScheduleApiTriggeredCanvasesResponse, _super);
    function ScheduleApiTriggeredCanvasesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ScheduleApiTriggeredCanvasesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ScheduleApiTriggeredCanvasesResponse.prototype, "statusCode", void 0);
    return ScheduleApiTriggeredCanvasesResponse;
}(SpeakeasyBase));
export { ScheduleApiTriggeredCanvasesResponse };
