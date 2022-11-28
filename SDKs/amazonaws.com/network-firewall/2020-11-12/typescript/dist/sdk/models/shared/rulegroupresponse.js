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
import { ResourceStatusEnum } from "./resourcestatusenum";
import { Tag } from "./tag";
import { RuleGroupTypeEnum } from "./rulegrouptypeenum";
// RuleGroupResponse
/**
 * The high-level properties of a rule group. This, along with the <a>RuleGroup</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>.
**/
var RuleGroupResponse = /** @class */ (function (_super) {
    __extends(RuleGroupResponse, _super);
    function RuleGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Capacity" }),
        __metadata("design:type", Number)
    ], RuleGroupResponse.prototype, "capacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], RuleGroupResponse.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RuleGroupArn" }),
        __metadata("design:type", String)
    ], RuleGroupResponse.prototype, "ruleGroupArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RuleGroupId" }),
        __metadata("design:type", String)
    ], RuleGroupResponse.prototype, "ruleGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RuleGroupName" }),
        __metadata("design:type", String)
    ], RuleGroupResponse.prototype, "ruleGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RuleGroupStatus" }),
        __metadata("design:type", String)
    ], RuleGroupResponse.prototype, "ruleGroupStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], RuleGroupResponse.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], RuleGroupResponse.prototype, "type", void 0);
    return RuleGroupResponse;
}(SpeakeasyBase));
export { RuleGroupResponse };
