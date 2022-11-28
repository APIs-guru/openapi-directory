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
import { EnumOption } from "./enumoption";
export var CustomFieldCompactResourceSubtypeEnum;
(function (CustomFieldCompactResourceSubtypeEnum) {
    CustomFieldCompactResourceSubtypeEnum["Text"] = "text";
    CustomFieldCompactResourceSubtypeEnum["Enum"] = "enum";
    CustomFieldCompactResourceSubtypeEnum["MultiEnum"] = "multi_enum";
    CustomFieldCompactResourceSubtypeEnum["Number"] = "number";
})(CustomFieldCompactResourceSubtypeEnum || (CustomFieldCompactResourceSubtypeEnum = {}));
export var CustomFieldCompactTypeEnum;
(function (CustomFieldCompactTypeEnum) {
    CustomFieldCompactTypeEnum["Text"] = "text";
    CustomFieldCompactTypeEnum["Enum"] = "enum";
    CustomFieldCompactTypeEnum["MultiEnum"] = "multi_enum";
    CustomFieldCompactTypeEnum["Number"] = "number";
})(CustomFieldCompactTypeEnum || (CustomFieldCompactTypeEnum = {}));
var CustomFieldCompact = /** @class */ (function (_super) {
    __extends(CustomFieldCompact, _super);
    function CustomFieldCompact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_value" }),
        __metadata("design:type", String)
    ], CustomFieldCompact.prototype, "displayValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], CustomFieldCompact.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enum_options", elemType: EnumOption }),
        __metadata("design:type", Array)
    ], CustomFieldCompact.prototype, "enumOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], CustomFieldCompact.prototype, "gid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CustomFieldCompact.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number_value" }),
        __metadata("design:type", Number)
    ], CustomFieldCompact.prototype, "numberValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_subtype" }),
        __metadata("design:type", String)
    ], CustomFieldCompact.prototype, "resourceSubtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], CustomFieldCompact.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text_value" }),
        __metadata("design:type", String)
    ], CustomFieldCompact.prototype, "textValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CustomFieldCompact.prototype, "type", void 0);
    return CustomFieldCompact;
}(SpeakeasyBase));
export { CustomFieldCompact };
