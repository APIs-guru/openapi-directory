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
// DestinyEntitiesItemsDestinyItemInstanceComponentEnergy
/**
 * IF populated, this item supports Energy mechanics (i.e. Armor 2.0), and these are the current details of its energy type and available capacity to spend energy points.
**/
var DestinyEntitiesItemsDestinyItemInstanceComponentEnergy = /** @class */ (function (_super) {
    __extends(DestinyEntitiesItemsDestinyItemInstanceComponentEnergy, _super);
    function DestinyEntitiesItemsDestinyItemInstanceComponentEnergy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemInstanceComponentEnergy.prototype, "energyCapacity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemInstanceComponentEnergy.prototype, "energyType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemInstanceComponentEnergy.prototype, "energyTypeHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemInstanceComponentEnergy.prototype, "energyUnused", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemInstanceComponentEnergy.prototype, "energyUsed", void 0);
    return DestinyEntitiesItemsDestinyItemInstanceComponentEnergy;
}(SpeakeasyBase));
export { DestinyEntitiesItemsDestinyItemInstanceComponentEnergy };
// DestinyEntitiesItemsDestinyItemInstanceComponentPrimaryStat
/**
 * The item stat that we consider to be "primary" for the item. For instance, this would be "Attack" for Weapons or "Defense" for armor.
**/
var DestinyEntitiesItemsDestinyItemInstanceComponentPrimaryStat = /** @class */ (function (_super) {
    __extends(DestinyEntitiesItemsDestinyItemInstanceComponentPrimaryStat, _super);
    function DestinyEntitiesItemsDestinyItemInstanceComponentPrimaryStat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemInstanceComponentPrimaryStat.prototype, "statHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemInstanceComponentPrimaryStat.prototype, "value", void 0);
    return DestinyEntitiesItemsDestinyItemInstanceComponentPrimaryStat;
}(SpeakeasyBase));
export { DestinyEntitiesItemsDestinyItemInstanceComponentPrimaryStat };
// DestinyEntitiesItemsDestinyItemInstanceComponent
/**
 * If an item is "instanced", this will contain information about the item's instance that doesn't fit easily into other components. One might say this is the "essential" instance data for the item.
 * Items are instanced if they require information or state that can vary. For instance, weapons are Instanced: they are given a unique identifier, uniquely generated stats, and can have their properties altered. Non-instanced items have none of these things: for instance, Glimmer has no unique properties aside from how much of it you own.
 * You can tell from an item's definition whether it will be instanced or not by looking at the DestinyInventoryItemDefinition's definition.inventory.isInstanceItem property.
**/
var DestinyEntitiesItemsDestinyItemInstanceComponent = /** @class */ (function (_super) {
    __extends(DestinyEntitiesItemsDestinyItemInstanceComponent, _super);
    function DestinyEntitiesItemsDestinyItemInstanceComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemInstanceComponent.prototype, "breakerType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemInstanceComponent.prototype, "breakerTypeHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyEntitiesItemsDestinyItemInstanceComponent.prototype, "canEquip", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemInstanceComponent.prototype, "cannotEquipReason", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemInstanceComponent.prototype, "damageType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemInstanceComponent.prototype, "damageTypeHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesItemsDestinyItemInstanceComponentEnergy)
    ], DestinyEntitiesItemsDestinyItemInstanceComponent.prototype, "energy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemInstanceComponent.prototype, "equipRequiredLevel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyEntitiesItemsDestinyItemInstanceComponent.prototype, "isEquipped", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemInstanceComponent.prototype, "itemLevel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesItemsDestinyItemInstanceComponentPrimaryStat)
    ], DestinyEntitiesItemsDestinyItemInstanceComponent.prototype, "primaryStat", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemInstanceComponent.prototype, "quality", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DestinyEntitiesItemsDestinyItemInstanceComponent.prototype, "unlockHashesRequiredToEquip", void 0);
    return DestinyEntitiesItemsDestinyItemInstanceComponent;
}(SpeakeasyBase));
export { DestinyEntitiesItemsDestinyItemInstanceComponent };
