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
import { RuleGroup } from "./rulegroup";
import { RuleGroupTypeEnum } from "./rulegrouptypeenum";
var UpdateRuleGroupRequest = /** @class */ (function (_super) {
    __extends(UpdateRuleGroupRequest, _super);
    function UpdateRuleGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], UpdateRuleGroupRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DryRun" }),
        __metadata("design:type", Boolean)
    ], UpdateRuleGroupRequest.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RuleGroup" }),
        __metadata("design:type", RuleGroup)
    ], UpdateRuleGroupRequest.prototype, "ruleGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RuleGroupArn" }),
        __metadata("design:type", String)
    ], UpdateRuleGroupRequest.prototype, "ruleGroupArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RuleGroupName" }),
        __metadata("design:type", String)
    ], UpdateRuleGroupRequest.prototype, "ruleGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Rules" }),
        __metadata("design:type", String)
    ], UpdateRuleGroupRequest.prototype, "rules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], UpdateRuleGroupRequest.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdateToken" }),
        __metadata("design:type", String)
    ], UpdateRuleGroupRequest.prototype, "updateToken", void 0);
    return UpdateRuleGroupRequest;
}(SpeakeasyBase));
export { UpdateRuleGroupRequest };
