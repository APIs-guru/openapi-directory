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
import { UserCompactInput } from "./usercompact";
export var GoalRequestMetricUnitEnum;
(function (GoalRequestMetricUnitEnum) {
    GoalRequestMetricUnitEnum["None"] = "none";
    GoalRequestMetricUnitEnum["Currency"] = "currency";
    GoalRequestMetricUnitEnum["Percentage"] = "percentage";
})(GoalRequestMetricUnitEnum || (GoalRequestMetricUnitEnum = {}));
var GoalRequestMetricInput = /** @class */ (function (_super) {
    __extends(GoalRequestMetricInput, _super);
    function GoalRequestMetricInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency_code" }),
        __metadata("design:type", String)
    ], GoalRequestMetricInput.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_display_value" }),
        __metadata("design:type", String)
    ], GoalRequestMetricInput.prototype, "currentDisplayValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_number_value" }),
        __metadata("design:type", Number)
    ], GoalRequestMetricInput.prototype, "currentNumberValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initial_number_value" }),
        __metadata("design:type", Number)
    ], GoalRequestMetricInput.prototype, "initialNumberValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=precision" }),
        __metadata("design:type", Number)
    ], GoalRequestMetricInput.prototype, "precision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target_number_value" }),
        __metadata("design:type", Number)
    ], GoalRequestMetricInput.prototype, "targetNumberValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], GoalRequestMetricInput.prototype, "unit", void 0);
    return GoalRequestMetricInput;
}(SpeakeasyBase));
export { GoalRequestMetricInput };
var GoalRequestOwnerInput = /** @class */ (function (_super) {
    __extends(GoalRequestOwnerInput, _super);
    function GoalRequestOwnerInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoalRequestOwnerInput.prototype, "name", void 0);
    return GoalRequestOwnerInput;
}(SpeakeasyBase));
export { GoalRequestOwnerInput };
// GoalRequestTeamInput
/**
 * *Conditional*. This property is only present when the `workspace` provided is an organization.
**/
var GoalRequestTeamInput = /** @class */ (function (_super) {
    __extends(GoalRequestTeamInput, _super);
    function GoalRequestTeamInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoalRequestTeamInput.prototype, "name", void 0);
    return GoalRequestTeamInput;
}(SpeakeasyBase));
export { GoalRequestTeamInput };
export var GoalRequestTimePeriodPeriodEnum;
(function (GoalRequestTimePeriodPeriodEnum) {
    GoalRequestTimePeriodPeriodEnum["Fy"] = "FY";
    GoalRequestTimePeriodPeriodEnum["H1"] = "H1";
    GoalRequestTimePeriodPeriodEnum["H2"] = "H2";
    GoalRequestTimePeriodPeriodEnum["Q1"] = "Q1";
    GoalRequestTimePeriodPeriodEnum["Q2"] = "Q2";
    GoalRequestTimePeriodPeriodEnum["Q3"] = "Q3";
    GoalRequestTimePeriodPeriodEnum["Q4"] = "Q4";
})(GoalRequestTimePeriodPeriodEnum || (GoalRequestTimePeriodPeriodEnum = {}));
var GoalRequestTimePeriodInput = /** @class */ (function (_super) {
    __extends(GoalRequestTimePeriodInput, _super);
    function GoalRequestTimePeriodInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_on" }),
        __metadata("design:type", String)
    ], GoalRequestTimePeriodInput.prototype, "endOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=period" }),
        __metadata("design:type", String)
    ], GoalRequestTimePeriodInput.prototype, "period", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_on" }),
        __metadata("design:type", String)
    ], GoalRequestTimePeriodInput.prototype, "startOn", void 0);
    return GoalRequestTimePeriodInput;
}(SpeakeasyBase));
export { GoalRequestTimePeriodInput };
var GoalRequestWorkspaceInput = /** @class */ (function (_super) {
    __extends(GoalRequestWorkspaceInput, _super);
    function GoalRequestWorkspaceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoalRequestWorkspaceInput.prototype, "name", void 0);
    return GoalRequestWorkspaceInput;
}(SpeakeasyBase));
export { GoalRequestWorkspaceInput };
var GoalRequestInput = /** @class */ (function (_super) {
    __extends(GoalRequestInput, _super);
    function GoalRequestInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=due_on" }),
        __metadata("design:type", String)
    ], GoalRequestInput.prototype, "dueOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers", elemType: UserCompactInput }),
        __metadata("design:type", Array)
    ], GoalRequestInput.prototype, "followers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_notes" }),
        __metadata("design:type", String)
    ], GoalRequestInput.prototype, "htmlNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_workspace_level" }),
        __metadata("design:type", Boolean)
    ], GoalRequestInput.prototype, "isWorkspaceLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liked" }),
        __metadata("design:type", Boolean)
    ], GoalRequestInput.prototype, "liked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metric" }),
        __metadata("design:type", GoalRequestMetricInput)
    ], GoalRequestInput.prototype, "metric", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoalRequestInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], GoalRequestInput.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", GoalRequestOwnerInput)
    ], GoalRequestInput.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_on" }),
        __metadata("design:type", String)
    ], GoalRequestInput.prototype, "startOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GoalRequestInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=team" }),
        __metadata("design:type", GoalRequestTeamInput)
    ], GoalRequestInput.prototype, "team", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_period" }),
        __metadata("design:type", GoalRequestTimePeriodInput)
    ], GoalRequestInput.prototype, "timePeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workspace" }),
        __metadata("design:type", GoalRequestWorkspaceInput)
    ], GoalRequestInput.prototype, "workspace", void 0);
    return GoalRequestInput;
}(SpeakeasyBase));
export { GoalRequestInput };
