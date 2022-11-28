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
var BigOvenModelApiGroceryItem = /** @class */ (function (_super) {
    __extends(BigOvenModelApiGroceryItem, _super);
    function BigOvenModelApiGroceryItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BigOvenObject" }),
        __metadata("design:type", String)
    ], BigOvenModelApiGroceryItem.prototype, "bigOvenObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDate" }),
        __metadata("design:type", Date)
    ], BigOvenModelApiGroceryItem.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Department" }),
        __metadata("design:type", String)
    ], BigOvenModelApiGroceryItem.prototype, "department", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisplayQuantity" }),
        __metadata("design:type", String)
    ], BigOvenModelApiGroceryItem.prototype, "displayQuantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GUID" }),
        __metadata("design:type", String)
    ], BigOvenModelApiGroceryItem.prototype, "guid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsChecked" }),
        __metadata("design:type", Boolean)
    ], BigOvenModelApiGroceryItem.prototype, "isChecked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ItemID" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiGroceryItem.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModified" }),
        __metadata("design:type", Date)
    ], BigOvenModelApiGroceryItem.prototype, "lastModified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalStatus" }),
        __metadata("design:type", String)
    ], BigOvenModelApiGroceryItem.prototype, "localStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], BigOvenModelApiGroceryItem.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", String)
    ], BigOvenModelApiGroceryItem.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecipeID" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiGroceryItem.prototype, "recipeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThirdPartyURL" }),
        __metadata("design:type", String)
    ], BigOvenModelApiGroceryItem.prototype, "thirdPartyUrl", void 0);
    return BigOvenModelApiGroceryItem;
}(SpeakeasyBase));
export { BigOvenModelApiGroceryItem };
