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
export var StoryRequestStickerNameEnum;
(function (StoryRequestStickerNameEnum) {
    StoryRequestStickerNameEnum["GreenCheckmark"] = "green_checkmark";
    StoryRequestStickerNameEnum["PeopleDancing"] = "people_dancing";
    StoryRequestStickerNameEnum["DancingUnicorn"] = "dancing_unicorn";
    StoryRequestStickerNameEnum["Heart"] = "heart";
    StoryRequestStickerNameEnum["PartyPopper"] = "party_popper";
    StoryRequestStickerNameEnum["PeopleWavingFlags"] = "people_waving_flags";
    StoryRequestStickerNameEnum["SplashingNarwhal"] = "splashing_narwhal";
    StoryRequestStickerNameEnum["Trophy"] = "trophy";
    StoryRequestStickerNameEnum["YetiRidingUnicorn"] = "yeti_riding_unicorn";
    StoryRequestStickerNameEnum["CelebratingPeople"] = "celebrating_people";
    StoryRequestStickerNameEnum["DeterminedClimbers"] = "determined_climbers";
    StoryRequestStickerNameEnum["PhoenixSpreadingLove"] = "phoenix_spreading_love";
})(StoryRequestStickerNameEnum || (StoryRequestStickerNameEnum = {}));
var StoryRequestInput = /** @class */ (function (_super) {
    __extends(StoryRequestInput, _super);
    function StoryRequestInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_text" }),
        __metadata("design:type", String)
    ], StoryRequestInput.prototype, "htmlText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_pinned" }),
        __metadata("design:type", Boolean)
    ], StoryRequestInput.prototype, "isPinned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sticker_name" }),
        __metadata("design:type", String)
    ], StoryRequestInput.prototype, "stickerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], StoryRequestInput.prototype, "text", void 0);
    return StoryRequestInput;
}(SpeakeasyBase));
export { StoryRequestInput };
