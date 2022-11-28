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
import { ItemList } from "./itemlist";
import { Person } from "./person";
export var PageEntryTypeEnum;
(function (PageEntryTypeEnum) {
    PageEntryTypeEnum["ItemEntry"] = "ItemEntry";
    PageEntryTypeEnum["ItemDetailEntry"] = "ItemDetailEntry";
    PageEntryTypeEnum["ListEntry"] = "ListEntry";
    PageEntryTypeEnum["ListDetailEntry"] = "ListDetailEntry";
    PageEntryTypeEnum["UserEntry"] = "UserEntry";
    PageEntryTypeEnum["TextEntry"] = "TextEntry";
    PageEntryTypeEnum["ImageEntry"] = "ImageEntry";
    PageEntryTypeEnum["CustomEntry"] = "CustomEntry";
    PageEntryTypeEnum["PeopleEntry"] = "PeopleEntry";
})(PageEntryTypeEnum || (PageEntryTypeEnum = {}));
// PageEntry
/**
 * Represents an entry of a Page.
 * Defines what specific piece of content should be presented e.g. an Item or ItemList.
 * Also defines what visual template should be used to render that content.
 *
**/
var PageEntry = /** @class */ (function (_super) {
    __extends(PageEntry, _super);
    function PageEntry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customFields" }),
        __metadata("design:type", Map)
    ], PageEntry.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PageEntry.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=images" }),
        __metadata("design:type", Map)
    ], PageEntry.prototype, "images", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=item" }),
        __metadata("design:type", ItemSummary)
    ], PageEntry.prototype, "item", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=list" }),
        __metadata("design:type", ItemList)
    ], PageEntry.prototype, "list", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=people", elemType: Person }),
        __metadata("design:type", Array)
    ], PageEntry.prototype, "people", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template" }),
        __metadata("design:type", String)
    ], PageEntry.prototype, "template", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], PageEntry.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PageEntry.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PageEntry.prototype, "type", void 0);
    return PageEntry;
}(SpeakeasyBase));
export { PageEntry };
