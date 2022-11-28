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
import { File } from "./file";
import { Translation } from "./translation";
var Collection = /** @class */ (function (_super) {
    __extends(Collection, _super);
    function Collection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=card_background_color" }),
        __metadata("design:type", String)
    ], Collection.prototype, "cardBackgroundColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=card_background_image" }),
        __metadata("design:type", File)
    ], Collection.prototype, "cardBackgroundImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=card_columns" }),
        __metadata("design:type", Number)
    ], Collection.prototype, "cardColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=card_style" }),
        __metadata("design:type", String)
    ], Collection.prototype, "cardStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], Collection.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Collection.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hidden_from_homepage" }),
        __metadata("design:type", Boolean)
    ], Collection.prototype, "hiddenFromHomepage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Collection.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logo" }),
        __metadata("design:type", File)
    ], Collection.prototype, "logo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Collection.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sequence" }),
        __metadata("design:type", Number)
    ], Collection.prototype, "sequence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=show_max_items_homepage" }),
        __metadata("design:type", Number)
    ], Collection.prototype, "showMaxItemsHomepage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], Collection.prototype, "slug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=translations", elemType: Translation }),
        __metadata("design:type", Array)
    ], Collection.prototype, "translations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visible" }),
        __metadata("design:type", Boolean)
    ], Collection.prototype, "visible", void 0);
    return Collection;
}(SpeakeasyBase));
export { Collection };
