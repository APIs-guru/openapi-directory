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
// DestinyEntitiesItemsDestinyItemComponentMetricObjective
/**
 * The objective progress for the currently-selected metric definition, to be displayed on the emblem nameplate.
**/
var DestinyEntitiesItemsDestinyItemComponentMetricObjective = /** @class */ (function (_super) {
    __extends(DestinyEntitiesItemsDestinyItemComponentMetricObjective, _super);
    function DestinyEntitiesItemsDestinyItemComponentMetricObjective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemComponentMetricObjective.prototype, "activityHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyEntitiesItemsDestinyItemComponentMetricObjective.prototype, "complete", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemComponentMetricObjective.prototype, "completionValue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemComponentMetricObjective.prototype, "destinationHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemComponentMetricObjective.prototype, "objectiveHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemComponentMetricObjective.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyEntitiesItemsDestinyItemComponentMetricObjective.prototype, "visible", void 0);
    return DestinyEntitiesItemsDestinyItemComponentMetricObjective;
}(SpeakeasyBase));
export { DestinyEntitiesItemsDestinyItemComponentMetricObjective };
// DestinyEntitiesItemsDestinyItemComponent
/**
 * The base item component, filled with properties that are generally useful to know in any item request or that don't feel worthwhile to put in their own component.
**/
var DestinyEntitiesItemsDestinyItemComponent = /** @class */ (function (_super) {
    __extends(DestinyEntitiesItemsDestinyItemComponent, _super);
    function DestinyEntitiesItemsDestinyItemComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemComponent.prototype, "bindStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemComponent.prototype, "bucketHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], DestinyEntitiesItemsDestinyItemComponent.prototype, "expirationDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyEntitiesItemsDestinyItemComponent.prototype, "isWrapper", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemComponent.prototype, "itemHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemComponent.prototype, "itemInstanceId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DestinyEntitiesItemsDestinyItemComponent.prototype, "itemValueVisibility", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemComponent.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyEntitiesItemsDestinyItemComponent.prototype, "lockable", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemComponent.prototype, "metricHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesItemsDestinyItemComponentMetricObjective)
    ], DestinyEntitiesItemsDestinyItemComponent.prototype, "metricObjective", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemComponent.prototype, "overrideStyleItemHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemComponent.prototype, "quantity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemComponent.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DestinyEntitiesItemsDestinyItemComponent.prototype, "tooltipNotificationIndexes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemComponent.prototype, "transferStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemComponent.prototype, "versionNumber", void 0);
    return DestinyEntitiesItemsDestinyItemComponent;
}(SpeakeasyBase));
export { DestinyEntitiesItemsDestinyItemComponent };
