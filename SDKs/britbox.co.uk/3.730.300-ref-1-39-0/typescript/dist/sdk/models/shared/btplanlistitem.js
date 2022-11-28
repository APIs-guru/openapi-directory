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
export var BtPlanListItemIntervalEnum;
(function (BtPlanListItemIntervalEnum) {
    BtPlanListItemIntervalEnum["Day"] = "day";
    BtPlanListItemIntervalEnum["Week"] = "week";
    BtPlanListItemIntervalEnum["Month"] = "month";
    BtPlanListItemIntervalEnum["Year"] = "year";
    BtPlanListItemIntervalEnum["None"] = "none";
})(BtPlanListItemIntervalEnum || (BtPlanListItemIntervalEnum = {}));
var BtPlanListItem = /** @class */ (function (_super) {
    __extends(BtPlanListItem, _super);
    function BtPlanListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], BtPlanListItem.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ctaText" }),
        __metadata("design:type", String)
    ], BtPlanListItem.prototype, "ctaText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], BtPlanListItem.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], BtPlanListItem.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ees07PlanDescription" }),
        __metadata("design:type", String)
    ], BtPlanListItem.prototype, "ees07PlanDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ees07PlanTitle" }),
        __metadata("design:type", String)
    ], BtPlanListItem.prototype, "ees07PlanTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ees07Title" }),
        __metadata("design:type", String)
    ], BtPlanListItem.prototype, "ees07Title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headerText" }),
        __metadata("design:type", String)
    ], BtPlanListItem.prototype, "headerText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=heroText" }),
        __metadata("design:type", String)
    ], BtPlanListItem.prototype, "heroText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], BtPlanListItem.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interval" }),
        __metadata("design:type", String)
    ], BtPlanListItem.prototype, "interval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intervalCount" }),
        __metadata("design:type", Number)
    ], BtPlanListItem.prototype, "intervalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longText" }),
        __metadata("design:type", String)
    ], BtPlanListItem.prototype, "longText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nickname" }),
        __metadata("design:type", String)
    ], BtPlanListItem.prototype, "nickname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=noThanksText" }),
        __metadata("design:type", String)
    ], BtPlanListItem.prototype, "noThanksText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=product" }),
        __metadata("design:type", String)
    ], BtPlanListItem.prototype, "product", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=switchingText" }),
        __metadata("design:type", String)
    ], BtPlanListItem.prototype, "switchingText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=termsAndConditionsItunes" }),
        __metadata("design:type", String)
    ], BtPlanListItem.prototype, "termsAndConditionsItunes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=termsAndConditionsStripe" }),
        __metadata("design:type", String)
    ], BtPlanListItem.prototype, "termsAndConditionsStripe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trialPeriodDays" }),
        __metadata("design:type", Number)
    ], BtPlanListItem.prototype, "trialPeriodDays", void 0);
    return BtPlanListItem;
}(SpeakeasyBase));
export { BtPlanListItem };
