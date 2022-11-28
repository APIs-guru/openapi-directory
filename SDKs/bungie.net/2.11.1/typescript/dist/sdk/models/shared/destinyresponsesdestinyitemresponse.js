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
import { DestinyEntitiesItemsDestinyItemInstanceComponent } from "./destinyentitiesitemsdestinyiteminstancecomponent";
import { DestinyEntitiesItemsDestinyItemComponent } from "./destinyentitiesitemsdestinyitemcomponent";
import { DestinyEntitiesItemsDestinyItemObjectivesComponent } from "./destinyentitiesitemsdestinyitemobjectivescomponent";
import { DestinyEntitiesItemsDestinyItemPerksComponent } from "./destinyentitiesitemsdestinyitemperkscomponent";
import { DestinyComponentsItemsDestinyItemPlugObjectivesComponent } from "./destinycomponentsitemsdestinyitemplugobjectivescomponent";
import { DestinyEntitiesItemsDestinyItemRenderComponent } from "./destinyentitiesitemsdestinyitemrendercomponent";
import { DestinyComponentsItemsDestinyItemReusablePlugsComponent } from "./destinycomponentsitemsdestinyitemreusableplugscomponent";
import { DestinyEntitiesItemsDestinyItemSocketsComponent } from "./destinyentitiesitemsdestinyitemsocketscomponent";
import { DestinyEntitiesItemsDestinyItemStatsComponent } from "./destinyentitiesitemsdestinyitemstatscomponent";
import { DestinyEntitiesItemsDestinyItemTalentGridComponent } from "./destinyentitiesitemsdestinyitemtalentgridcomponent";
// DestinyResponsesDestinyItemResponseInstance
/**
 * Basic instance data for the item.
 * COMPONENT TYPE: ItemInstances
**/
var DestinyResponsesDestinyItemResponseInstance = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyItemResponseInstance, _super);
    function DestinyResponsesDestinyItemResponseInstance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesItemsDestinyItemInstanceComponent)
    ], DestinyResponsesDestinyItemResponseInstance.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyItemResponseInstance.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyItemResponseInstance.prototype, "privacy", void 0);
    return DestinyResponsesDestinyItemResponseInstance;
}(SpeakeasyBase));
export { DestinyResponsesDestinyItemResponseInstance };
// DestinyResponsesDestinyItemResponseItem
/**
 * Common data for the item relevant to its non-instanced properties.
 * COMPONENT TYPE: ItemCommonData
**/
var DestinyResponsesDestinyItemResponseItem = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyItemResponseItem, _super);
    function DestinyResponsesDestinyItemResponseItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesItemsDestinyItemComponent)
    ], DestinyResponsesDestinyItemResponseItem.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyItemResponseItem.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyItemResponseItem.prototype, "privacy", void 0);
    return DestinyResponsesDestinyItemResponseItem;
}(SpeakeasyBase));
export { DestinyResponsesDestinyItemResponseItem };
// DestinyResponsesDestinyItemResponseObjectives
/**
 * Information specifically about the item's objectives.
 * COMPONENT TYPE: ItemObjectives
**/
var DestinyResponsesDestinyItemResponseObjectives = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyItemResponseObjectives, _super);
    function DestinyResponsesDestinyItemResponseObjectives() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesItemsDestinyItemObjectivesComponent)
    ], DestinyResponsesDestinyItemResponseObjectives.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyItemResponseObjectives.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyItemResponseObjectives.prototype, "privacy", void 0);
    return DestinyResponsesDestinyItemResponseObjectives;
}(SpeakeasyBase));
export { DestinyResponsesDestinyItemResponseObjectives };
// DestinyResponsesDestinyItemResponsePerks
/**
 * Information specifically about the perks currently active on the item.
 * COMPONENT TYPE: ItemPerks
**/
var DestinyResponsesDestinyItemResponsePerks = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyItemResponsePerks, _super);
    function DestinyResponsesDestinyItemResponsePerks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesItemsDestinyItemPerksComponent)
    ], DestinyResponsesDestinyItemResponsePerks.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyItemResponsePerks.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyItemResponsePerks.prototype, "privacy", void 0);
    return DestinyResponsesDestinyItemResponsePerks;
}(SpeakeasyBase));
export { DestinyResponsesDestinyItemResponsePerks };
// DestinyResponsesDestinyItemResponsePlugObjectives
/**
 * Information about objectives on Plugs for a given item. See the component's documentation for more info.
 * COMPONENT TYPE: ItemPlugObjectives
**/
var DestinyResponsesDestinyItemResponsePlugObjectives = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyItemResponsePlugObjectives, _super);
    function DestinyResponsesDestinyItemResponsePlugObjectives() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyComponentsItemsDestinyItemPlugObjectivesComponent)
    ], DestinyResponsesDestinyItemResponsePlugObjectives.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyItemResponsePlugObjectives.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyItemResponsePlugObjectives.prototype, "privacy", void 0);
    return DestinyResponsesDestinyItemResponsePlugObjectives;
}(SpeakeasyBase));
export { DestinyResponsesDestinyItemResponsePlugObjectives };
// DestinyResponsesDestinyItemResponseRenderData
/**
 * Information about how to render the item in 3D.
 * COMPONENT TYPE: ItemRenderData
**/
var DestinyResponsesDestinyItemResponseRenderData = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyItemResponseRenderData, _super);
    function DestinyResponsesDestinyItemResponseRenderData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesItemsDestinyItemRenderComponent)
    ], DestinyResponsesDestinyItemResponseRenderData.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyItemResponseRenderData.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyItemResponseRenderData.prototype, "privacy", void 0);
    return DestinyResponsesDestinyItemResponseRenderData;
}(SpeakeasyBase));
export { DestinyResponsesDestinyItemResponseRenderData };
// DestinyResponsesDestinyItemResponseReusablePlugs
/**
 * Information about the Reusable Plugs for sockets on an item. These are plugs that you can insert into the given socket regardless of if you actually own an instance of that plug: they are logic-driven plugs rather than inventory-driven.
 *  These may need to be combined with Plug Set component data to get a full picture of available plugs on a given socket.
 *  COMPONENT TYPE: ItemReusablePlugs
**/
var DestinyResponsesDestinyItemResponseReusablePlugs = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyItemResponseReusablePlugs, _super);
    function DestinyResponsesDestinyItemResponseReusablePlugs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyComponentsItemsDestinyItemReusablePlugsComponent)
    ], DestinyResponsesDestinyItemResponseReusablePlugs.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyItemResponseReusablePlugs.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyItemResponseReusablePlugs.prototype, "privacy", void 0);
    return DestinyResponsesDestinyItemResponseReusablePlugs;
}(SpeakeasyBase));
export { DestinyResponsesDestinyItemResponseReusablePlugs };
// DestinyResponsesDestinyItemResponseSockets
/**
 * Information about the sockets of the item: which are currently active, what potential sockets you could have and the stats/abilities/perks you can gain from them.
 * COMPONENT TYPE: ItemSockets
**/
var DestinyResponsesDestinyItemResponseSockets = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyItemResponseSockets, _super);
    function DestinyResponsesDestinyItemResponseSockets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesItemsDestinyItemSocketsComponent)
    ], DestinyResponsesDestinyItemResponseSockets.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyItemResponseSockets.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyItemResponseSockets.prototype, "privacy", void 0);
    return DestinyResponsesDestinyItemResponseSockets;
}(SpeakeasyBase));
export { DestinyResponsesDestinyItemResponseSockets };
// DestinyResponsesDestinyItemResponseStats
/**
 * Information about the computed stats of the item: power, defense, etc...
 * COMPONENT TYPE: ItemStats
**/
var DestinyResponsesDestinyItemResponseStats = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyItemResponseStats, _super);
    function DestinyResponsesDestinyItemResponseStats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesItemsDestinyItemStatsComponent)
    ], DestinyResponsesDestinyItemResponseStats.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyItemResponseStats.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyItemResponseStats.prototype, "privacy", void 0);
    return DestinyResponsesDestinyItemResponseStats;
}(SpeakeasyBase));
export { DestinyResponsesDestinyItemResponseStats };
// DestinyResponsesDestinyItemResponseTalentGrid
/**
 * Information about the talent grid attached to the item. Talent nodes can provide a variety of benefits and abilities, and in Destiny 2 are used almost exclusively for the character's "Builds".
 * COMPONENT TYPE: ItemTalentGrids
**/
var DestinyResponsesDestinyItemResponseTalentGrid = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyItemResponseTalentGrid, _super);
    function DestinyResponsesDestinyItemResponseTalentGrid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesItemsDestinyItemTalentGridComponent)
    ], DestinyResponsesDestinyItemResponseTalentGrid.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyItemResponseTalentGrid.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyItemResponseTalentGrid.prototype, "privacy", void 0);
    return DestinyResponsesDestinyItemResponseTalentGrid;
}(SpeakeasyBase));
export { DestinyResponsesDestinyItemResponseTalentGrid };
// DestinyResponsesDestinyItemResponse
/**
 * The response object for retrieving an individual instanced item. None of these components are relevant for an item that doesn't have an "itemInstanceId": for those, get your information from the DestinyInventoryDefinition.
**/
var DestinyResponsesDestinyItemResponse = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyItemResponse, _super);
    function DestinyResponsesDestinyItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyItemResponse.prototype, "characterId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyItemResponseInstance)
    ], DestinyResponsesDestinyItemResponse.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyItemResponseItem)
    ], DestinyResponsesDestinyItemResponse.prototype, "item", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyItemResponseObjectives)
    ], DestinyResponsesDestinyItemResponse.prototype, "objectives", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyItemResponsePerks)
    ], DestinyResponsesDestinyItemResponse.prototype, "perks", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyItemResponsePlugObjectives)
    ], DestinyResponsesDestinyItemResponse.prototype, "plugObjectives", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyItemResponseRenderData)
    ], DestinyResponsesDestinyItemResponse.prototype, "renderData", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyItemResponseReusablePlugs)
    ], DestinyResponsesDestinyItemResponse.prototype, "reusablePlugs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyItemResponseSockets)
    ], DestinyResponsesDestinyItemResponse.prototype, "sockets", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyItemResponseStats)
    ], DestinyResponsesDestinyItemResponse.prototype, "stats", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyItemResponseTalentGrid)
    ], DestinyResponsesDestinyItemResponse.prototype, "talentGrid", void 0);
    return DestinyResponsesDestinyItemResponse;
}(SpeakeasyBase));
export { DestinyResponsesDestinyItemResponse };
