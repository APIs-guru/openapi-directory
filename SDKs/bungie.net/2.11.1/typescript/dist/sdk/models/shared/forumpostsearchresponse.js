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
import { UserGeneralUser } from "./usergeneraluser";
import { GroupsV2GroupResponse } from "./groupsv2groupresponse";
import { ForumPollResponse } from "./forumpollresponse";
import { QueriesPagedQuery } from "./queriespagedquery";
import { ForumForumRecruitmentDetail } from "./forumforumrecruitmentdetail";
import { ForumPostResponse } from "./forumpostresponse";
import { TagsModelsContractsTagResponse } from "./tagsmodelscontractstagresponse";
var ForumPostSearchResponse = /** @class */ (function (_super) {
    __extends(ForumPostSearchResponse, _super);
    function ForumPostSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: UserGeneralUser }),
        __metadata("design:type", Array)
    ], ForumPostSearchResponse.prototype, "authors", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ForumPostSearchResponse.prototype, "availablePages", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: GroupsV2GroupResponse }),
        __metadata("design:type", Array)
    ], ForumPostSearchResponse.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ForumPostSearchResponse.prototype, "hasMore", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ForumPollResponse }),
        __metadata("design:type", Array)
    ], ForumPostSearchResponse.prototype, "polls", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QueriesPagedQuery)
    ], ForumPostSearchResponse.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ForumForumRecruitmentDetail }),
        __metadata("design:type", Array)
    ], ForumPostSearchResponse.prototype, "recruitmentDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ForumPostResponse }),
        __metadata("design:type", Array)
    ], ForumPostSearchResponse.prototype, "relatedPosts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ForumPostSearchResponse.prototype, "replacementContinuationToken", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ForumPostResponse }),
        __metadata("design:type", Array)
    ], ForumPostSearchResponse.prototype, "results", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: TagsModelsContractsTagResponse }),
        __metadata("design:type", Array)
    ], ForumPostSearchResponse.prototype, "searchedTags", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ForumPostSearchResponse.prototype, "totalResults", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ForumPostSearchResponse.prototype, "useTotalResults", void 0);
    return ForumPostSearchResponse;
}(SpeakeasyBase));
export { ForumPostSearchResponse };
