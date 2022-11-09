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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var RecordCategoryEnum;
(function (RecordCategoryEnum) {
    RecordCategoryEnum["Newspapers"] = "Newspapers";
    RecordCategoryEnum["Images"] = "Images";
    RecordCategoryEnum["Books"] = "Books";
    RecordCategoryEnum["Articles"] = "Articles";
    RecordCategoryEnum["Journals"] = "Journals";
    RecordCategoryEnum["Archives"] = "Archives";
    RecordCategoryEnum["Audio"] = "Audio";
    RecordCategoryEnum["Other"] = "Other";
    RecordCategoryEnum["Manuscripts"] = "Manuscripts";
    RecordCategoryEnum["ReferenceSources"] = "Reference sources";
    RecordCategoryEnum["ResearchPapers"] = "Research papers";
    RecordCategoryEnum["Videos"] = "Videos";
    RecordCategoryEnum["MusicScore"] = "Music Score";
    RecordCategoryEnum["Groups"] = "Groups";
    RecordCategoryEnum["Data"] = "Data";
    RecordCategoryEnum["Websites"] = "Websites";
    RecordCategoryEnum["Sets"] = "Sets";
})(RecordCategoryEnum || (RecordCategoryEnum = {}));
export var RecordCopyrightEnum;
(function (RecordCopyrightEnum) {
    RecordCopyrightEnum["AllRightsReserved"] = "All rights reserved";
    RecordCopyrightEnum["SomeRightsReserved"] = "Some rights reserved";
    RecordCopyrightEnum["NoKnownCopyrightRestrictions"] = "No known copyright restrictions";
    RecordCopyrightEnum["Unknown"] = "Unknown";
})(RecordCopyrightEnum || (RecordCopyrightEnum = {}));
var RecordLocations = /** @class */ (function (_super) {
    __extends(RecordLocations, _super);
    function RecordLocations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], RecordLocations.prototype, "comment", void 0);
    __decorate([
        Metadata({ data: "json, name=lat" }),
        __metadata("design:type", Number)
    ], RecordLocations.prototype, "lat", void 0);
    __decorate([
        Metadata({ data: "json, name=lng" }),
        __metadata("design:type", Number)
    ], RecordLocations.prototype, "lng", void 0);
    __decorate([
        Metadata({ data: "json, name=placename" }),
        __metadata("design:type", String)
    ], RecordLocations.prototype, "placename", void 0);
    return RecordLocations;
}(SpeakeasyBase));
export { RecordLocations };
export var RecordUsageEnum;
(function (RecordUsageEnum) {
    RecordUsageEnum["AllRightsReserved"] = "All rights reserved";
    RecordUsageEnum["Share"] = "Share";
    RecordUsageEnum["Modify"] = "Modify";
    RecordUsageEnum["UseCommercially"] = "Use commercially";
    RecordUsageEnum["Unknown"] = "Unknown";
})(RecordUsageEnum || (RecordUsageEnum = {}));
// Record
/**
 * *NOTE:* There are a lot of fields that are very rarely used in DigitalNZ. For instance there are custom built fields that are only relevant, and only found on specific collections. The schema below focuses on the most common / well populated fields and does not show every possible field available for a single record.
 *
**/
var Record = /** @class */ (function (_super) {
    __extends(Record, _super);
    function Record() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=category" }),
        __metadata("design:type", Array)
    ], Record.prototype, "category", void 0);
    __decorate([
        Metadata({ data: "json, name=collection" }),
        __metadata("design:type", Array)
    ], Record.prototype, "collection", void 0);
    __decorate([
        Metadata({ data: "json, name=collection_title" }),
        __metadata("design:type", Array)
    ], Record.prototype, "collectionTitle", void 0);
    __decorate([
        Metadata({ data: "json, name=content_partner" }),
        __metadata("design:type", Array)
    ], Record.prototype, "contentPartner", void 0);
    __decorate([
        Metadata({ data: "json, name=copyright" }),
        __metadata("design:type", Array)
    ], Record.prototype, "copyright", void 0);
    __decorate([
        Metadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Record.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=creator" }),
        __metadata("design:type", Array)
    ], Record.prototype, "creator", void 0);
    __decorate([
        Metadata({ data: "json, name=date" }),
        __metadata("design:type", Array)
    ], Record.prototype, "date", void 0);
    __decorate([
        Metadata({ data: "json, name=dc_identifier" }),
        __metadata("design:type", Array)
    ], Record.prototype, "dcIdentifier", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Record.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=display_collection" }),
        __metadata("design:type", String)
    ], Record.prototype, "displayCollection", void 0);
    __decorate([
        Metadata({ data: "json, name=display_content_partner" }),
        __metadata("design:type", String)
    ], Record.prototype, "displayContentPartner", void 0);
    __decorate([
        Metadata({ data: "json, name=display_date" }),
        __metadata("design:type", String)
    ], Record.prototype, "displayDate", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Record.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=landing_url" }),
        __metadata("design:type", String)
    ], Record.prototype, "landingUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=large_thumbnail_url" }),
        __metadata("design:type", String)
    ], Record.prototype, "largeThumbnailUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=locations", elemType: shared.RecordLocations }),
        __metadata("design:type", Array)
    ], Record.prototype, "locations", void 0);
    __decorate([
        Metadata({ data: "json, name=primary_collection" }),
        __metadata("design:type", Array)
    ], Record.prototype, "primaryCollection", void 0);
    __decorate([
        Metadata({ data: "json, name=rights" }),
        __metadata("design:type", String)
    ], Record.prototype, "rights", void 0);
    __decorate([
        Metadata({ data: "json, name=rights_url" }),
        __metadata("design:type", Array)
    ], Record.prototype, "rightsUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=source_url" }),
        __metadata("design:type", String)
    ], Record.prototype, "sourceUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=subject" }),
        __metadata("design:type", Array)
    ], Record.prototype, "subject", void 0);
    __decorate([
        Metadata({ data: "json, name=thumbnail_url" }),
        __metadata("design:type", String)
    ], Record.prototype, "thumbnailUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Record.prototype, "title", void 0);
    __decorate([
        Metadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Record.prototype, "updatedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=usage" }),
        __metadata("design:type", Array)
    ], Record.prototype, "usage", void 0);
    return Record;
}(SpeakeasyBase));
export { Record };
