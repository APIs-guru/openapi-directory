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
import { UserCompact } from "./usercompact";
import { Like } from "./like";
export var GoalResponseMetricResourceSubtypeEnum;
(function (GoalResponseMetricResourceSubtypeEnum) {
    GoalResponseMetricResourceSubtypeEnum["Number"] = "number";
})(GoalResponseMetricResourceSubtypeEnum || (GoalResponseMetricResourceSubtypeEnum = {}));
export var GoalResponseMetricUnitEnum;
(function (GoalResponseMetricUnitEnum) {
    GoalResponseMetricUnitEnum["None"] = "none";
    GoalResponseMetricUnitEnum["Currency"] = "currency";
    GoalResponseMetricUnitEnum["Percentage"] = "percentage";
})(GoalResponseMetricUnitEnum || (GoalResponseMetricUnitEnum = {}));
var GoalResponseMetric = /** @class */ (function (_super) {
    __extends(GoalResponseMetric, _super);
    function GoalResponseMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency_code" }),
        __metadata("design:type", String)
    ], GoalResponseMetric.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_display_value" }),
        __metadata("design:type", String)
    ], GoalResponseMetric.prototype, "currentDisplayValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_number_value" }),
        __metadata("design:type", Number)
    ], GoalResponseMetric.prototype, "currentNumberValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], GoalResponseMetric.prototype, "gid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initial_number_value" }),
        __metadata("design:type", Number)
    ], GoalResponseMetric.prototype, "initialNumberValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=precision" }),
        __metadata("design:type", Number)
    ], GoalResponseMetric.prototype, "precision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_subtype" }),
        __metadata("design:type", String)
    ], GoalResponseMetric.prototype, "resourceSubtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], GoalResponseMetric.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target_number_value" }),
        __metadata("design:type", Number)
    ], GoalResponseMetric.prototype, "targetNumberValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], GoalResponseMetric.prototype, "unit", void 0);
    return GoalResponseMetric;
}(SpeakeasyBase));
export { GoalResponseMetric };
var GoalResponseOwner = /** @class */ (function (_super) {
    __extends(GoalResponseOwner, _super);
    function GoalResponseOwner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], GoalResponseOwner.prototype, "gid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoalResponseOwner.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], GoalResponseOwner.prototype, "resourceType", void 0);
    return GoalResponseOwner;
}(SpeakeasyBase));
export { GoalResponseOwner };
// GoalResponseTeam
/**
 * *Conditional*. This property is only present when the `workspace` provided is an organization.
**/
var GoalResponseTeam = /** @class */ (function (_super) {
    __extends(GoalResponseTeam, _super);
    function GoalResponseTeam() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], GoalResponseTeam.prototype, "gid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoalResponseTeam.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], GoalResponseTeam.prototype, "resourceType", void 0);
    return GoalResponseTeam;
}(SpeakeasyBase));
export { GoalResponseTeam };
export var GoalResponseTimePeriodPeriodEnum;
(function (GoalResponseTimePeriodPeriodEnum) {
    GoalResponseTimePeriodPeriodEnum["Fy"] = "FY";
    GoalResponseTimePeriodPeriodEnum["H1"] = "H1";
    GoalResponseTimePeriodPeriodEnum["H2"] = "H2";
    GoalResponseTimePeriodPeriodEnum["Q1"] = "Q1";
    GoalResponseTimePeriodPeriodEnum["Q2"] = "Q2";
    GoalResponseTimePeriodPeriodEnum["Q3"] = "Q3";
    GoalResponseTimePeriodPeriodEnum["Q4"] = "Q4";
})(GoalResponseTimePeriodPeriodEnum || (GoalResponseTimePeriodPeriodEnum = {}));
var GoalResponseTimePeriod = /** @class */ (function (_super) {
    __extends(GoalResponseTimePeriod, _super);
    function GoalResponseTimePeriod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_on" }),
        __metadata("design:type", String)
    ], GoalResponseTimePeriod.prototype, "endOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], GoalResponseTimePeriod.prototype, "gid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=period" }),
        __metadata("design:type", String)
    ], GoalResponseTimePeriod.prototype, "period", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], GoalResponseTimePeriod.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_on" }),
        __metadata("design:type", String)
    ], GoalResponseTimePeriod.prototype, "startOn", void 0);
    return GoalResponseTimePeriod;
}(SpeakeasyBase));
export { GoalResponseTimePeriod };
var GoalResponseWorkspace = /** @class */ (function (_super) {
    __extends(GoalResponseWorkspace, _super);
    function GoalResponseWorkspace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], GoalResponseWorkspace.prototype, "gid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoalResponseWorkspace.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], GoalResponseWorkspace.prototype, "resourceType", void 0);
    return GoalResponseWorkspace;
}(SpeakeasyBase));
export { GoalResponseWorkspace };
var GoalResponse = /** @class */ (function (_super) {
    __extends(GoalResponse, _super);
    function GoalResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=due_on" }),
        __metadata("design:type", String)
    ], GoalResponse.prototype, "dueOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers", elemType: UserCompact }),
        __metadata("design:type", Array)
    ], GoalResponse.prototype, "followers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], GoalResponse.prototype, "gid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_notes" }),
        __metadata("design:type", String)
    ], GoalResponse.prototype, "htmlNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_workspace_level" }),
        __metadata("design:type", Boolean)
    ], GoalResponse.prototype, "isWorkspaceLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liked" }),
        __metadata("design:type", Boolean)
    ], GoalResponse.prototype, "liked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=likes", elemType: Like }),
        __metadata("design:type", Array)
    ], GoalResponse.prototype, "likes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metric" }),
        __metadata("design:type", GoalResponseMetric)
    ], GoalResponse.prototype, "metric", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoalResponse.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], GoalResponse.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_likes" }),
        __metadata("design:type", Number)
    ], GoalResponse.prototype, "numLikes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", GoalResponseOwner)
    ], GoalResponse.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], GoalResponse.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_on" }),
        __metadata("design:type", String)
    ], GoalResponse.prototype, "startOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GoalResponse.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=team" }),
        __metadata("design:type", GoalResponseTeam)
    ], GoalResponse.prototype, "team", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_period" }),
        __metadata("design:type", GoalResponseTimePeriod)
    ], GoalResponse.prototype, "timePeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workspace" }),
        __metadata("design:type", GoalResponseWorkspace)
    ], GoalResponse.prototype, "workspace", void 0);
    return GoalResponse;
}(SpeakeasyBase));
export { GoalResponse };
