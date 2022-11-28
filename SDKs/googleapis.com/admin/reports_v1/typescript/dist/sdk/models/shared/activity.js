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
import { NestedParameter } from "./nestedparameter";
// ActivityActor
/**
 * User doing the action.
**/
var ActivityActor = /** @class */ (function (_super) {
    __extends(ActivityActor, _super);
    function ActivityActor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=callerType" }),
        __metadata("design:type", String)
    ], ActivityActor.prototype, "callerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ActivityActor.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ActivityActor.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profileId" }),
        __metadata("design:type", String)
    ], ActivityActor.prototype, "profileId", void 0);
    return ActivityActor;
}(SpeakeasyBase));
export { ActivityActor };
// ActivityEventsParametersMessageValue
/**
 * Nested parameter value pairs associated with this parameter. Complex value type for a parameter are returned as a list of parameter values. For example, the address parameter may have a value as `[{parameter: [{name: city, value: abc}]}]`
**/
var ActivityEventsParametersMessageValue = /** @class */ (function (_super) {
    __extends(ActivityEventsParametersMessageValue, _super);
    function ActivityEventsParametersMessageValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameter", elemType: NestedParameter }),
        __metadata("design:type", Array)
    ], ActivityEventsParametersMessageValue.prototype, "parameter", void 0);
    return ActivityEventsParametersMessageValue;
}(SpeakeasyBase));
export { ActivityEventsParametersMessageValue };
var ActivityEventsParametersMultiMessageValue = /** @class */ (function (_super) {
    __extends(ActivityEventsParametersMultiMessageValue, _super);
    function ActivityEventsParametersMultiMessageValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameter", elemType: NestedParameter }),
        __metadata("design:type", Array)
    ], ActivityEventsParametersMultiMessageValue.prototype, "parameter", void 0);
    return ActivityEventsParametersMultiMessageValue;
}(SpeakeasyBase));
export { ActivityEventsParametersMultiMessageValue };
var ActivityEventsParameters = /** @class */ (function (_super) {
    __extends(ActivityEventsParameters, _super);
    function ActivityEventsParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boolValue" }),
        __metadata("design:type", Boolean)
    ], ActivityEventsParameters.prototype, "boolValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intValue" }),
        __metadata("design:type", String)
    ], ActivityEventsParameters.prototype, "intValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messageValue" }),
        __metadata("design:type", ActivityEventsParametersMessageValue)
    ], ActivityEventsParameters.prototype, "messageValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multiIntValue" }),
        __metadata("design:type", Array)
    ], ActivityEventsParameters.prototype, "multiIntValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multiMessageValue", elemType: ActivityEventsParametersMultiMessageValue }),
        __metadata("design:type", Array)
    ], ActivityEventsParameters.prototype, "multiMessageValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multiValue" }),
        __metadata("design:type", Array)
    ], ActivityEventsParameters.prototype, "multiValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ActivityEventsParameters.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ActivityEventsParameters.prototype, "value", void 0);
    return ActivityEventsParameters;
}(SpeakeasyBase));
export { ActivityEventsParameters };
var ActivityEvents = /** @class */ (function (_super) {
    __extends(ActivityEvents, _super);
    function ActivityEvents() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ActivityEvents.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters", elemType: ActivityEventsParameters }),
        __metadata("design:type", Array)
    ], ActivityEvents.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ActivityEvents.prototype, "type", void 0);
    return ActivityEvents;
}(SpeakeasyBase));
export { ActivityEvents };
// ActivityId
/**
 * Unique identifier for each activity record.
**/
var ActivityId = /** @class */ (function (_super) {
    __extends(ActivityId, _super);
    function ActivityId() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applicationName" }),
        __metadata("design:type", String)
    ], ActivityId.prototype, "applicationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerId" }),
        __metadata("design:type", String)
    ], ActivityId.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time" }),
        __metadata("design:type", Date)
    ], ActivityId.prototype, "time", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uniqueQualifier" }),
        __metadata("design:type", String)
    ], ActivityId.prototype, "uniqueQualifier", void 0);
    return ActivityId;
}(SpeakeasyBase));
export { ActivityId };
// Activity
/**
 * JSON template for the activity resource.
**/
var Activity = /** @class */ (function (_super) {
    __extends(Activity, _super);
    function Activity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actor" }),
        __metadata("design:type", ActivityActor)
    ], Activity.prototype, "actor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Activity.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events", elemType: ActivityEvents }),
        __metadata("design:type", Array)
    ], Activity.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", ActivityId)
    ], Activity.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipAddress" }),
        __metadata("design:type", String)
    ], Activity.prototype, "ipAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Activity.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownerDomain" }),
        __metadata("design:type", String)
    ], Activity.prototype, "ownerDomain", void 0);
    return Activity;
}(SpeakeasyBase));
export { Activity };
