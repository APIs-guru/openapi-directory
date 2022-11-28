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
import { SearchResultTextMatches } from "./searchresulttextmatches";
var TopicSearchResultItemAliasesTopicRelation = /** @class */ (function (_super) {
    __extends(TopicSearchResultItemAliasesTopicRelation, _super);
    function TopicSearchResultItemAliasesTopicRelation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], TopicSearchResultItemAliasesTopicRelation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TopicSearchResultItemAliasesTopicRelation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relation_type" }),
        __metadata("design:type", String)
    ], TopicSearchResultItemAliasesTopicRelation.prototype, "relationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic_id" }),
        __metadata("design:type", Number)
    ], TopicSearchResultItemAliasesTopicRelation.prototype, "topicId", void 0);
    return TopicSearchResultItemAliasesTopicRelation;
}(SpeakeasyBase));
export { TopicSearchResultItemAliasesTopicRelation };
var TopicSearchResultItemAliases = /** @class */ (function (_super) {
    __extends(TopicSearchResultItemAliases, _super);
    function TopicSearchResultItemAliases() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic_relation" }),
        __metadata("design:type", TopicSearchResultItemAliasesTopicRelation)
    ], TopicSearchResultItemAliases.prototype, "topicRelation", void 0);
    return TopicSearchResultItemAliases;
}(SpeakeasyBase));
export { TopicSearchResultItemAliases };
var TopicSearchResultItemRelatedTopicRelation = /** @class */ (function (_super) {
    __extends(TopicSearchResultItemRelatedTopicRelation, _super);
    function TopicSearchResultItemRelatedTopicRelation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], TopicSearchResultItemRelatedTopicRelation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TopicSearchResultItemRelatedTopicRelation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relation_type" }),
        __metadata("design:type", String)
    ], TopicSearchResultItemRelatedTopicRelation.prototype, "relationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic_id" }),
        __metadata("design:type", Number)
    ], TopicSearchResultItemRelatedTopicRelation.prototype, "topicId", void 0);
    return TopicSearchResultItemRelatedTopicRelation;
}(SpeakeasyBase));
export { TopicSearchResultItemRelatedTopicRelation };
var TopicSearchResultItemRelated = /** @class */ (function (_super) {
    __extends(TopicSearchResultItemRelated, _super);
    function TopicSearchResultItemRelated() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic_relation" }),
        __metadata("design:type", TopicSearchResultItemRelatedTopicRelation)
    ], TopicSearchResultItemRelated.prototype, "topicRelation", void 0);
    return TopicSearchResultItemRelated;
}(SpeakeasyBase));
export { TopicSearchResultItemRelated };
// TopicSearchResultItem
/**
 * Topic Search Result Item
**/
var TopicSearchResultItem = /** @class */ (function (_super) {
    __extends(TopicSearchResultItem, _super);
    function TopicSearchResultItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aliases", elemType: TopicSearchResultItemAliases }),
        __metadata("design:type", Array)
    ], TopicSearchResultItem.prototype, "aliases", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], TopicSearchResultItem.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], TopicSearchResultItem.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=curated" }),
        __metadata("design:type", Boolean)
    ], TopicSearchResultItem.prototype, "curated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], TopicSearchResultItem.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], TopicSearchResultItem.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=featured" }),
        __metadata("design:type", Boolean)
    ], TopicSearchResultItem.prototype, "featured", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logo_url" }),
        __metadata("design:type", String)
    ], TopicSearchResultItem.prototype, "logoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TopicSearchResultItem.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=related", elemType: TopicSearchResultItemRelated }),
        __metadata("design:type", Array)
    ], TopicSearchResultItem.prototype, "related", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=released" }),
        __metadata("design:type", String)
    ], TopicSearchResultItem.prototype, "released", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repository_count" }),
        __metadata("design:type", Number)
    ], TopicSearchResultItem.prototype, "repositoryCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=score" }),
        __metadata("design:type", Number)
    ], TopicSearchResultItem.prototype, "score", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=short_description" }),
        __metadata("design:type", String)
    ], TopicSearchResultItem.prototype, "shortDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text_matches", elemType: SearchResultTextMatches }),
        __metadata("design:type", Array)
    ], TopicSearchResultItem.prototype, "textMatches", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], TopicSearchResultItem.prototype, "updatedAt", void 0);
    return TopicSearchResultItem;
}(SpeakeasyBase));
export { TopicSearchResultItem };
