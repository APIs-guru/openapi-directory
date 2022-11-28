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
var GoalEventDetailsEventConditions = /** @class */ (function (_super) {
    __extends(GoalEventDetailsEventConditions, _super);
    function GoalEventDetailsEventConditions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comparisonType" }),
        __metadata("design:type", String)
    ], GoalEventDetailsEventConditions.prototype, "comparisonType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comparisonValue" }),
        __metadata("design:type", String)
    ], GoalEventDetailsEventConditions.prototype, "comparisonValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expression" }),
        __metadata("design:type", String)
    ], GoalEventDetailsEventConditions.prototype, "expression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matchType" }),
        __metadata("design:type", String)
    ], GoalEventDetailsEventConditions.prototype, "matchType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoalEventDetailsEventConditions.prototype, "type", void 0);
    return GoalEventDetailsEventConditions;
}(SpeakeasyBase));
export { GoalEventDetailsEventConditions };
// GoalEventDetails
/**
 * Details for the goal of the type EVENT.
**/
var GoalEventDetails = /** @class */ (function (_super) {
    __extends(GoalEventDetails, _super);
    function GoalEventDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventConditions", elemType: GoalEventDetailsEventConditions }),
        __metadata("design:type", Array)
    ], GoalEventDetails.prototype, "eventConditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useEventValue" }),
        __metadata("design:type", Boolean)
    ], GoalEventDetails.prototype, "useEventValue", void 0);
    return GoalEventDetails;
}(SpeakeasyBase));
export { GoalEventDetails };
// GoalParentLink
/**
 * Parent link for a goal. Points to the view (profile) to which this goal belongs.
**/
var GoalParentLink = /** @class */ (function (_super) {
    __extends(GoalParentLink, _super);
    function GoalParentLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], GoalParentLink.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoalParentLink.prototype, "type", void 0);
    return GoalParentLink;
}(SpeakeasyBase));
export { GoalParentLink };
var GoalUrlDestinationDetailsSteps = /** @class */ (function (_super) {
    __extends(GoalUrlDestinationDetailsSteps, _super);
    function GoalUrlDestinationDetailsSteps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoalUrlDestinationDetailsSteps.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number" }),
        __metadata("design:type", Number)
    ], GoalUrlDestinationDetailsSteps.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GoalUrlDestinationDetailsSteps.prototype, "url", void 0);
    return GoalUrlDestinationDetailsSteps;
}(SpeakeasyBase));
export { GoalUrlDestinationDetailsSteps };
// GoalUrlDestinationDetails
/**
 * Details for the goal of the type URL_DESTINATION.
**/
var GoalUrlDestinationDetails = /** @class */ (function (_super) {
    __extends(GoalUrlDestinationDetails, _super);
    function GoalUrlDestinationDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caseSensitive" }),
        __metadata("design:type", Boolean)
    ], GoalUrlDestinationDetails.prototype, "caseSensitive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstStepRequired" }),
        __metadata("design:type", Boolean)
    ], GoalUrlDestinationDetails.prototype, "firstStepRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matchType" }),
        __metadata("design:type", String)
    ], GoalUrlDestinationDetails.prototype, "matchType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=steps", elemType: GoalUrlDestinationDetailsSteps }),
        __metadata("design:type", Array)
    ], GoalUrlDestinationDetails.prototype, "steps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GoalUrlDestinationDetails.prototype, "url", void 0);
    return GoalUrlDestinationDetails;
}(SpeakeasyBase));
export { GoalUrlDestinationDetails };
// GoalVisitNumPagesDetails
/**
 * Details for the goal of the type VISIT_NUM_PAGES.
**/
var GoalVisitNumPagesDetails = /** @class */ (function (_super) {
    __extends(GoalVisitNumPagesDetails, _super);
    function GoalVisitNumPagesDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comparisonType" }),
        __metadata("design:type", String)
    ], GoalVisitNumPagesDetails.prototype, "comparisonType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comparisonValue" }),
        __metadata("design:type", String)
    ], GoalVisitNumPagesDetails.prototype, "comparisonValue", void 0);
    return GoalVisitNumPagesDetails;
}(SpeakeasyBase));
export { GoalVisitNumPagesDetails };
// GoalVisitTimeOnSiteDetails
/**
 * Details for the goal of the type VISIT_TIME_ON_SITE.
**/
var GoalVisitTimeOnSiteDetails = /** @class */ (function (_super) {
    __extends(GoalVisitTimeOnSiteDetails, _super);
    function GoalVisitTimeOnSiteDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comparisonType" }),
        __metadata("design:type", String)
    ], GoalVisitTimeOnSiteDetails.prototype, "comparisonType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comparisonValue" }),
        __metadata("design:type", String)
    ], GoalVisitTimeOnSiteDetails.prototype, "comparisonValue", void 0);
    return GoalVisitTimeOnSiteDetails;
}(SpeakeasyBase));
export { GoalVisitTimeOnSiteDetails };
// Goal
/**
 * JSON template for Analytics goal resource.
**/
var Goal = /** @class */ (function (_super) {
    __extends(Goal, _super);
    function Goal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], Goal.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], Goal.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], Goal.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventDetails" }),
        __metadata("design:type", GoalEventDetails)
    ], Goal.prototype, "eventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Goal.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=internalWebPropertyId" }),
        __metadata("design:type", String)
    ], Goal.prototype, "internalWebPropertyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Goal.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Goal.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentLink" }),
        __metadata("design:type", GoalParentLink)
    ], Goal.prototype, "parentLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profileId" }),
        __metadata("design:type", String)
    ], Goal.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], Goal.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Goal.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], Goal.prototype, "updated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlDestinationDetails" }),
        __metadata("design:type", GoalUrlDestinationDetails)
    ], Goal.prototype, "urlDestinationDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], Goal.prototype, "value", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visitNumPagesDetails" }),
        __metadata("design:type", GoalVisitNumPagesDetails)
    ], Goal.prototype, "visitNumPagesDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visitTimeOnSiteDetails" }),
        __metadata("design:type", GoalVisitTimeOnSiteDetails)
    ], Goal.prototype, "visitTimeOnSiteDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webPropertyId" }),
        __metadata("design:type", String)
    ], Goal.prototype, "webPropertyId", void 0);
    return Goal;
}(SpeakeasyBase));
export { Goal };
