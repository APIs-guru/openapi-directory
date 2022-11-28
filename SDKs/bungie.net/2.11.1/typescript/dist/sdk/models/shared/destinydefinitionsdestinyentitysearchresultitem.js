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
import { DestinyDefinitionsCommonDestinyIconSequenceDefinition } from "./destinydefinitionscommondestinyiconsequencedefinition";
// DestinyDefinitionsDestinyEntitySearchResultItemDisplayProperties
/**
 * Basic display properties on the entity, so you don't have to look up the definition to show basic results for the item.
**/
var DestinyDefinitionsDestinyEntitySearchResultItemDisplayProperties = /** @class */ (function (_super) {
    __extends(DestinyDefinitionsDestinyEntitySearchResultItemDisplayProperties, _super);
    function DestinyDefinitionsDestinyEntitySearchResultItemDisplayProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyDefinitionsDestinyEntitySearchResultItemDisplayProperties.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyDefinitionsDestinyEntitySearchResultItemDisplayProperties.prototype, "hasIcon", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyDefinitionsDestinyEntitySearchResultItemDisplayProperties.prototype, "highResIcon", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyDefinitionsDestinyEntitySearchResultItemDisplayProperties.prototype, "icon", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyDefinitionsCommonDestinyIconSequenceDefinition }),
        __metadata("design:type", Array)
    ], DestinyDefinitionsDestinyEntitySearchResultItemDisplayProperties.prototype, "iconSequences", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyDefinitionsDestinyEntitySearchResultItemDisplayProperties.prototype, "name", void 0);
    return DestinyDefinitionsDestinyEntitySearchResultItemDisplayProperties;
}(SpeakeasyBase));
export { DestinyDefinitionsDestinyEntitySearchResultItemDisplayProperties };
// DestinyDefinitionsDestinyEntitySearchResultItem
/**
 * An individual Destiny Entity returned from the entity search.
**/
var DestinyDefinitionsDestinyEntitySearchResultItem = /** @class */ (function (_super) {
    __extends(DestinyDefinitionsDestinyEntitySearchResultItem, _super);
    function DestinyDefinitionsDestinyEntitySearchResultItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyDefinitionsDestinyEntitySearchResultItemDisplayProperties)
    ], DestinyDefinitionsDestinyEntitySearchResultItem.prototype, "displayProperties", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyDefinitionsDestinyEntitySearchResultItem.prototype, "entityType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyDefinitionsDestinyEntitySearchResultItem.prototype, "hash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyDefinitionsDestinyEntitySearchResultItem.prototype, "weight", void 0);
    return DestinyDefinitionsDestinyEntitySearchResultItem;
}(SpeakeasyBase));
export { DestinyDefinitionsDestinyEntitySearchResultItem };
