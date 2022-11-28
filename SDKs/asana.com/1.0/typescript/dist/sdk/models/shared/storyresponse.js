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
import { UserCompact } from "./usercompact";
import { CustomFieldCompact } from "./customfieldcompact";
import { TaskCompact } from "./taskcompact";
import { Like } from "./like";
import { StoryResponseDates } from "./storyresponsedates";
import { EnumOption } from "./enumoption";
import { SectionCompact } from "./sectioncompact";
import { Preview } from "./preview";
import { ProjectCompact } from "./projectcompact";
import { StoryCompact } from "./storycompact";
import { TagCompact } from "./tagcompact";
export var StoryResponseSourceEnum;
(function (StoryResponseSourceEnum) {
    StoryResponseSourceEnum["Web"] = "web";
    StoryResponseSourceEnum["Email"] = "email";
    StoryResponseSourceEnum["Mobile"] = "mobile";
    StoryResponseSourceEnum["Api"] = "api";
    StoryResponseSourceEnum["Unknown"] = "unknown";
})(StoryResponseSourceEnum || (StoryResponseSourceEnum = {}));
export var StoryResponseStickerNameEnum;
(function (StoryResponseStickerNameEnum) {
    StoryResponseStickerNameEnum["GreenCheckmark"] = "green_checkmark";
    StoryResponseStickerNameEnum["PeopleDancing"] = "people_dancing";
    StoryResponseStickerNameEnum["DancingUnicorn"] = "dancing_unicorn";
    StoryResponseStickerNameEnum["Heart"] = "heart";
    StoryResponseStickerNameEnum["PartyPopper"] = "party_popper";
    StoryResponseStickerNameEnum["PeopleWavingFlags"] = "people_waving_flags";
    StoryResponseStickerNameEnum["SplashingNarwhal"] = "splashing_narwhal";
    StoryResponseStickerNameEnum["Trophy"] = "trophy";
    StoryResponseStickerNameEnum["YetiRidingUnicorn"] = "yeti_riding_unicorn";
    StoryResponseStickerNameEnum["CelebratingPeople"] = "celebrating_people";
    StoryResponseStickerNameEnum["DeterminedClimbers"] = "determined_climbers";
    StoryResponseStickerNameEnum["PhoenixSpreadingLove"] = "phoenix_spreading_love";
})(StoryResponseStickerNameEnum || (StoryResponseStickerNameEnum = {}));
var StoryResponse = /** @class */ (function (_super) {
    __extends(StoryResponse, _super);
    function StoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assignee" }),
        __metadata("design:type", UserCompact)
    ], StoryResponse.prototype, "assignee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], StoryResponse.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", UserCompact)
    ], StoryResponse.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_field" }),
        __metadata("design:type", CustomFieldCompact)
    ], StoryResponse.prototype, "customField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dependency" }),
        __metadata("design:type", TaskCompact)
    ], StoryResponse.prototype, "dependency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duplicate_of" }),
        __metadata("design:type", TaskCompact)
    ], StoryResponse.prototype, "duplicateOf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duplicated_from" }),
        __metadata("design:type", TaskCompact)
    ], StoryResponse.prototype, "duplicatedFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=follower" }),
        __metadata("design:type", UserCompact)
    ], StoryResponse.prototype, "follower", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], StoryResponse.prototype, "gid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hearted" }),
        __metadata("design:type", Boolean)
    ], StoryResponse.prototype, "hearted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hearts", elemType: Like }),
        __metadata("design:type", Array)
    ], StoryResponse.prototype, "hearts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_text" }),
        __metadata("design:type", String)
    ], StoryResponse.prototype, "htmlText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_edited" }),
        __metadata("design:type", Boolean)
    ], StoryResponse.prototype, "isEdited", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_pinned" }),
        __metadata("design:type", Boolean)
    ], StoryResponse.prototype, "isPinned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liked" }),
        __metadata("design:type", Boolean)
    ], StoryResponse.prototype, "liked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=likes", elemType: Like }),
        __metadata("design:type", Array)
    ], StoryResponse.prototype, "likes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=new_approval_status" }),
        __metadata("design:type", String)
    ], StoryResponse.prototype, "newApprovalStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=new_dates" }),
        __metadata("design:type", StoryResponseDates)
    ], StoryResponse.prototype, "newDates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=new_enum_value" }),
        __metadata("design:type", EnumOption)
    ], StoryResponse.prototype, "newEnumValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=new_multi_enum_values", elemType: EnumOption }),
        __metadata("design:type", Array)
    ], StoryResponse.prototype, "newMultiEnumValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=new_name" }),
        __metadata("design:type", String)
    ], StoryResponse.prototype, "newName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=new_number_value" }),
        __metadata("design:type", Number)
    ], StoryResponse.prototype, "newNumberValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=new_resource_subtype" }),
        __metadata("design:type", String)
    ], StoryResponse.prototype, "newResourceSubtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=new_section" }),
        __metadata("design:type", SectionCompact)
    ], StoryResponse.prototype, "newSection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=new_text_value" }),
        __metadata("design:type", String)
    ], StoryResponse.prototype, "newTextValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_hearts" }),
        __metadata("design:type", Number)
    ], StoryResponse.prototype, "numHearts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_likes" }),
        __metadata("design:type", Number)
    ], StoryResponse.prototype, "numLikes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=old_approval_status" }),
        __metadata("design:type", String)
    ], StoryResponse.prototype, "oldApprovalStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=old_dates" }),
        __metadata("design:type", StoryResponseDates)
    ], StoryResponse.prototype, "oldDates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=old_enum_value" }),
        __metadata("design:type", EnumOption)
    ], StoryResponse.prototype, "oldEnumValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=old_multi_enum_values", elemType: EnumOption }),
        __metadata("design:type", Array)
    ], StoryResponse.prototype, "oldMultiEnumValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=old_name" }),
        __metadata("design:type", String)
    ], StoryResponse.prototype, "oldName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=old_number_value" }),
        __metadata("design:type", Number)
    ], StoryResponse.prototype, "oldNumberValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=old_resource_subtype" }),
        __metadata("design:type", String)
    ], StoryResponse.prototype, "oldResourceSubtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=old_section" }),
        __metadata("design:type", SectionCompact)
    ], StoryResponse.prototype, "oldSection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=old_text_value" }),
        __metadata("design:type", String)
    ], StoryResponse.prototype, "oldTextValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previews", elemType: Preview }),
        __metadata("design:type", Array)
    ], StoryResponse.prototype, "previews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=project" }),
        __metadata("design:type", ProjectCompact)
    ], StoryResponse.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_subtype" }),
        __metadata("design:type", String)
    ], StoryResponse.prototype, "resourceSubtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], StoryResponse.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], StoryResponse.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sticker_name" }),
        __metadata("design:type", String)
    ], StoryResponse.prototype, "stickerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=story" }),
        __metadata("design:type", StoryCompact)
    ], StoryResponse.prototype, "story", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag" }),
        __metadata("design:type", TagCompact)
    ], StoryResponse.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target" }),
        __metadata("design:type", Object)
    ], StoryResponse.prototype, "target", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=task" }),
        __metadata("design:type", TaskCompact)
    ], StoryResponse.prototype, "task", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], StoryResponse.prototype, "text", void 0);
    return StoryResponse;
}(SpeakeasyBase));
export { StoryResponse };
