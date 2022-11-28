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
import { ScreenviewData } from "./screenviewdata";
import { CustomDimension } from "./customdimension";
import { EcommerceData } from "./ecommercedata";
import { EventData } from "./eventdata";
import { GoalSetData } from "./goalsetdata";
import { PageviewData } from "./pageviewdata";
export var ActivityActivityTypeEnum;
(function (ActivityActivityTypeEnum) {
    ActivityActivityTypeEnum["ActivityTypeUnspecified"] = "ACTIVITY_TYPE_UNSPECIFIED";
    ActivityActivityTypeEnum["Pageview"] = "PAGEVIEW";
    ActivityActivityTypeEnum["Screenview"] = "SCREENVIEW";
    ActivityActivityTypeEnum["Goal"] = "GOAL";
    ActivityActivityTypeEnum["Ecommerce"] = "ECOMMERCE";
    ActivityActivityTypeEnum["Event"] = "EVENT";
})(ActivityActivityTypeEnum || (ActivityActivityTypeEnum = {}));
// Activity
/**
 * An Activity represents data for an activity of a user. Note that an Activity is different from a hit. A hit might result in multiple Activity's. For example, if a hit includes a transaction and a goal completion, there will be two Activity protos for this hit, one for ECOMMERCE and one for GOAL. Conversely, multiple hits can also construct one Activity. In classic e-commerce, data for one transaction might be sent through multiple hits. These hits will be merged into one ECOMMERCE Activity.
**/
var Activity = /** @class */ (function (_super) {
    __extends(Activity, _super);
    function Activity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activityTime" }),
        __metadata("design:type", String)
    ], Activity.prototype, "activityTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activityType" }),
        __metadata("design:type", String)
    ], Activity.prototype, "activityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appview" }),
        __metadata("design:type", ScreenviewData)
    ], Activity.prototype, "appview", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaign" }),
        __metadata("design:type", String)
    ], Activity.prototype, "campaign", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channelGrouping" }),
        __metadata("design:type", String)
    ], Activity.prototype, "channelGrouping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customDimension", elemType: CustomDimension }),
        __metadata("design:type", Array)
    ], Activity.prototype, "customDimension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ecommerce" }),
        __metadata("design:type", EcommerceData)
    ], Activity.prototype, "ecommerce", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event" }),
        __metadata("design:type", EventData)
    ], Activity.prototype, "event", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=goals" }),
        __metadata("design:type", GoalSetData)
    ], Activity.prototype, "goals", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostname" }),
        __metadata("design:type", String)
    ], Activity.prototype, "hostname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyword" }),
        __metadata("design:type", String)
    ], Activity.prototype, "keyword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=landingPagePath" }),
        __metadata("design:type", String)
    ], Activity.prototype, "landingPagePath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=medium" }),
        __metadata("design:type", String)
    ], Activity.prototype, "medium", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageview" }),
        __metadata("design:type", PageviewData)
    ], Activity.prototype, "pageview", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], Activity.prototype, "source", void 0);
    return Activity;
}(SpeakeasyBase));
export { Activity };
