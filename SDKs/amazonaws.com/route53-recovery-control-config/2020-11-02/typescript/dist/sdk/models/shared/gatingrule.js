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
import { RuleConfig } from "./ruleconfig";
import { StatusEnum } from "./statusenum";
// GatingRule
/**
 * A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify. If the gating rule evaluates to true, Amazon Route 53 Application Recovery Controller allows a set of routing control state changes to run and complete against the set of target controls.
**/
var GatingRule = /** @class */ (function (_super) {
    __extends(GatingRule, _super);
    function GatingRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ControlPanelArn" }),
        __metadata("design:type", String)
    ], GatingRule.prototype, "controlPanelArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GatingControls" }),
        __metadata("design:type", Array)
    ], GatingRule.prototype, "gatingControls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GatingRule.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RuleConfig" }),
        __metadata("design:type", RuleConfig)
    ], GatingRule.prototype, "ruleConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SafetyRuleArn" }),
        __metadata("design:type", String)
    ], GatingRule.prototype, "safetyRuleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], GatingRule.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetControls" }),
        __metadata("design:type", Array)
    ], GatingRule.prototype, "targetControls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WaitPeriodMs" }),
        __metadata("design:type", Number)
    ], GatingRule.prototype, "waitPeriodMs", void 0);
    return GatingRule;
}(SpeakeasyBase));
export { GatingRule };
