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
export var ItvPlanListItemIntervalEnum;
(function (ItvPlanListItemIntervalEnum) {
    ItvPlanListItemIntervalEnum["Day"] = "day";
    ItvPlanListItemIntervalEnum["Week"] = "week";
    ItvPlanListItemIntervalEnum["Month"] = "month";
    ItvPlanListItemIntervalEnum["Year"] = "year";
    ItvPlanListItemIntervalEnum["None"] = "none";
})(ItvPlanListItemIntervalEnum || (ItvPlanListItemIntervalEnum = {}));
var ItvPlanListItem = /** @class */ (function (_super) {
    __extends(ItvPlanListItem, _super);
    function ItvPlanListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], ItvPlanListItem.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], ItvPlanListItem.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ItvPlanListItem.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ItvPlanListItem.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interval" }),
        __metadata("design:type", String)
    ], ItvPlanListItem.prototype, "interval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intervalCount" }),
        __metadata("design:type", Number)
    ], ItvPlanListItem.prototype, "intervalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nickname" }),
        __metadata("design:type", String)
    ], ItvPlanListItem.prototype, "nickname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=product" }),
        __metadata("design:type", String)
    ], ItvPlanListItem.prototype, "product", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=savingLabel" }),
        __metadata("design:type", String)
    ], ItvPlanListItem.prototype, "savingLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=switchingText" }),
        __metadata("design:type", String)
    ], ItvPlanListItem.prototype, "switchingText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trialPeriodDays" }),
        __metadata("design:type", Number)
    ], ItvPlanListItem.prototype, "trialPeriodDays", void 0);
    return ItvPlanListItem;
}(SpeakeasyBase));
export { ItvPlanListItem };
