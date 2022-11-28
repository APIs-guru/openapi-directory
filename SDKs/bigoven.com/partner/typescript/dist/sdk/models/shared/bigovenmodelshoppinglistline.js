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
var BigOvenModelShoppingListLine = /** @class */ (function (_super) {
    __extends(BigOvenModelShoppingListLine, _super);
    function BigOvenModelShoppingListLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateAdded" }),
        __metadata("design:type", Date)
    ], BigOvenModelShoppingListLine.prototype, "dateAdded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Dept" }),
        __metadata("design:type", String)
    ], BigOvenModelShoppingListLine.prototype, "dept", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GUID" }),
        __metadata("design:type", String)
    ], BigOvenModelShoppingListLine.prototype, "guid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HTMLItemName" }),
        __metadata("design:type", String)
    ], BigOvenModelShoppingListLine.prototype, "htmlItemName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsChecked" }),
        __metadata("design:type", Boolean)
    ], BigOvenModelShoppingListLine.prototype, "isChecked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ItemName" }),
        __metadata("design:type", String)
    ], BigOvenModelShoppingListLine.prototype, "itemName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModified" }),
        __metadata("design:type", Date)
    ], BigOvenModelShoppingListLine.prototype, "lastModified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ListID" }),
        __metadata("design:type", Number)
    ], BigOvenModelShoppingListLine.prototype, "listId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MealPlanID" }),
        __metadata("design:type", Number)
    ], BigOvenModelShoppingListLine.prototype, "mealPlanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MealPlanObjectType" }),
        __metadata("design:type", Number)
    ], BigOvenModelShoppingListLine.prototype, "mealPlanObjectType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", String)
    ], BigOvenModelShoppingListLine.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PendingAddition" }),
        __metadata("design:type", Boolean)
    ], BigOvenModelShoppingListLine.prototype, "pendingAddition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecipeID" }),
        __metadata("design:type", Number)
    ], BigOvenModelShoppingListLine.prototype, "recipeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShoppingListLineID" }),
        __metadata("design:type", Number)
    ], BigOvenModelShoppingListLine.prototype, "shoppingListLineId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Store" }),
        __metadata("design:type", String)
    ], BigOvenModelShoppingListLine.prototype, "store", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TextAmt" }),
        __metadata("design:type", String)
    ], BigOvenModelShoppingListLine.prototype, "textAmt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThirdPartyHost" }),
        __metadata("design:type", String)
    ], BigOvenModelShoppingListLine.prototype, "thirdPartyHost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThirdPartyTitle" }),
        __metadata("design:type", String)
    ], BigOvenModelShoppingListLine.prototype, "thirdPartyTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThirdPartyURL" }),
        __metadata("design:type", String)
    ], BigOvenModelShoppingListLine.prototype, "thirdPartyUrl", void 0);
    return BigOvenModelShoppingListLine;
}(SpeakeasyBase));
export { BigOvenModelShoppingListLine };
