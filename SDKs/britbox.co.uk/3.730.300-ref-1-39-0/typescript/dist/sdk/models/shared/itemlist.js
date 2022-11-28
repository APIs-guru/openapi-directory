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
import { ItemSummary } from "./itemsummary";
import { ListData } from "./listdata";
import { Pagination } from "./pagination";
import { Theme } from "./theme";
export var ItemListItemTypesEnum;
(function (ItemListItemTypesEnum) {
    ItemListItemTypesEnum["Movie"] = "movie";
    ItemListItemTypesEnum["Show"] = "show";
    ItemListItemTypesEnum["Season"] = "season";
    ItemListItemTypesEnum["Episode"] = "episode";
    ItemListItemTypesEnum["Program"] = "program";
    ItemListItemTypesEnum["Link"] = "link";
    ItemListItemTypesEnum["Trailer"] = "trailer";
    ItemListItemTypesEnum["Channel"] = "channel";
    ItemListItemTypesEnum["CustomAsset"] = "customAsset";
})(ItemListItemTypesEnum || (ItemListItemTypesEnum = {}));
// ItemList
/**
 * A pageable list of items.
**/
var ItemList = /** @class */ (function (_super) {
    __extends(ItemList, _super);
    function ItemList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customFields" }),
        __metadata("design:type", Map)
    ], ItemList.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ItemList.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ItemList.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=images" }),
        __metadata("design:type", Map)
    ], ItemList.prototype, "images", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemTypes" }),
        __metadata("design:type", Array)
    ], ItemList.prototype, "itemTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: ItemSummary }),
        __metadata("design:type", Array)
    ], ItemList.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listData" }),
        __metadata("design:type", ListData)
    ], ItemList.prototype, "listData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paging" }),
        __metadata("design:type", Pagination)
    ], ItemList.prototype, "paging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameter" }),
        __metadata("design:type", String)
    ], ItemList.prototype, "parameter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], ItemList.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shortDescription" }),
        __metadata("design:type", String)
    ], ItemList.prototype, "shortDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], ItemList.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagline" }),
        __metadata("design:type", String)
    ], ItemList.prototype, "tagline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=themes", elemType: Theme }),
        __metadata("design:type", Array)
    ], ItemList.prototype, "themes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ItemList.prototype, "title", void 0);
    return ItemList;
}(SpeakeasyBase));
export { ItemList };
