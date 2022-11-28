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
export var ItemPurchaseOwnershipEnum;
(function (ItemPurchaseOwnershipEnum) {
    ItemPurchaseOwnershipEnum["Subscription"] = "Subscription";
    ItemPurchaseOwnershipEnum["Free"] = "Free";
    ItemPurchaseOwnershipEnum["Rent"] = "Rent";
    ItemPurchaseOwnershipEnum["Own"] = "Own";
    ItemPurchaseOwnershipEnum["None"] = "None";
})(ItemPurchaseOwnershipEnum || (ItemPurchaseOwnershipEnum = {}));
export var ItemPurchaseResolutionEnum;
(function (ItemPurchaseResolutionEnum) {
    ItemPurchaseResolutionEnum["Sd"] = "SD";
    ItemPurchaseResolutionEnum["Hd720"] = "HD-720";
    ItemPurchaseResolutionEnum["Hd1080"] = "HD-1080";
    ItemPurchaseResolutionEnum["Hd4K"] = "HD-4K";
    ItemPurchaseResolutionEnum["External"] = "External";
    ItemPurchaseResolutionEnum["Unknown"] = "Unknown";
})(ItemPurchaseResolutionEnum || (ItemPurchaseResolutionEnum = {}));
export var ItemPurchaseTypeEnum;
(function (ItemPurchaseTypeEnum) {
    ItemPurchaseTypeEnum["Movie"] = "movie";
    ItemPurchaseTypeEnum["Show"] = "show";
    ItemPurchaseTypeEnum["Season"] = "season";
    ItemPurchaseTypeEnum["Episode"] = "episode";
    ItemPurchaseTypeEnum["Program"] = "program";
    ItemPurchaseTypeEnum["Link"] = "link";
    ItemPurchaseTypeEnum["Trailer"] = "trailer";
    ItemPurchaseTypeEnum["Channel"] = "channel";
    ItemPurchaseTypeEnum["CustomAsset"] = "customAsset";
})(ItemPurchaseTypeEnum || (ItemPurchaseTypeEnum = {}));
var ItemPurchase = /** @class */ (function (_super) {
    __extends(ItemPurchase, _super);
    function ItemPurchase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ItemPurchase.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownership" }),
        __metadata("design:type", String)
    ], ItemPurchase.prototype, "ownership", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], ItemPurchase.prototype, "resolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ItemPurchase.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ItemPurchase.prototype, "type", void 0);
    return ItemPurchase;
}(SpeakeasyBase));
export { ItemPurchase };
