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
export var ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum;
(function (ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum) {
    ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum["Single"] = "single";
    ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum["Multiple"] = "multiple";
})(ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum || (ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum = {}));
var ModifierGroup = /** @class */ (function (_super) {
    __extends(ModifierGroup, _super);
    function ModifierGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alternate_name" }),
        __metadata("design:type", String)
    ], ModifierGroup.prototype, "alternateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], ModifierGroup.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], ModifierGroup.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], ModifierGroup.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ModifierGroup.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximum_allowed" }),
        __metadata("design:type", Number)
    ], ModifierGroup.prototype, "maximumAllowed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimum_required" }),
        __metadata("design:type", Number)
    ], ModifierGroup.prototype, "minimumRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modifiers" }),
        __metadata("design:type", Array)
    ], ModifierGroup.prototype, "modifiers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ModifierGroup.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=present_at_all_locations" }),
        __metadata("design:type", Boolean)
    ], ModifierGroup.prototype, "presentAtAllLocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_version" }),
        __metadata("design:type", String)
    ], ModifierGroup.prototype, "rowVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selection_type" }),
        __metadata("design:type", String)
    ], ModifierGroup.prototype, "selectionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], ModifierGroup.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], ModifierGroup.prototype, "updatedBy", void 0);
    return ModifierGroup;
}(SpeakeasyBase));
export { ModifierGroup };
var ModifierGroupInput = /** @class */ (function (_super) {
    __extends(ModifierGroupInput, _super);
    function ModifierGroupInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alternate_name" }),
        __metadata("design:type", String)
    ], ModifierGroupInput.prototype, "alternateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], ModifierGroupInput.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximum_allowed" }),
        __metadata("design:type", Number)
    ], ModifierGroupInput.prototype, "maximumAllowed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimum_required" }),
        __metadata("design:type", Number)
    ], ModifierGroupInput.prototype, "minimumRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modifiers" }),
        __metadata("design:type", Array)
    ], ModifierGroupInput.prototype, "modifiers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ModifierGroupInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=present_at_all_locations" }),
        __metadata("design:type", Boolean)
    ], ModifierGroupInput.prototype, "presentAtAllLocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_version" }),
        __metadata("design:type", String)
    ], ModifierGroupInput.prototype, "rowVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selection_type" }),
        __metadata("design:type", String)
    ], ModifierGroupInput.prototype, "selectionType", void 0);
    return ModifierGroupInput;
}(SpeakeasyBase));
export { ModifierGroupInput };
