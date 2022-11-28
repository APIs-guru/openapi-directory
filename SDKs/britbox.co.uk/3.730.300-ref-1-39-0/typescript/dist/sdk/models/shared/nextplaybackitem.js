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
import { ItemDetail } from "./itemdetail";
export var NextPlaybackItemSuggestionTypeEnum;
(function (NextPlaybackItemSuggestionTypeEnum) {
    NextPlaybackItemSuggestionTypeEnum["StartWatching"] = "StartWatching";
    NextPlaybackItemSuggestionTypeEnum["ContinueWatching"] = "ContinueWatching";
    NextPlaybackItemSuggestionTypeEnum["RestartWatching"] = "RestartWatching";
    NextPlaybackItemSuggestionTypeEnum["Sequential"] = "Sequential";
    NextPlaybackItemSuggestionTypeEnum["None"] = "None";
})(NextPlaybackItemSuggestionTypeEnum || (NextPlaybackItemSuggestionTypeEnum = {}));
var NextPlaybackItem = /** @class */ (function (_super) {
    __extends(NextPlaybackItem, _super);
    function NextPlaybackItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstWatchedDate" }),
        __metadata("design:type", Date)
    ], NextPlaybackItem.prototype, "firstWatchedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastWatchedDate" }),
        __metadata("design:type", Date)
    ], NextPlaybackItem.prototype, "lastWatchedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", ItemDetail)
    ], NextPlaybackItem.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceItemId" }),
        __metadata("design:type", String)
    ], NextPlaybackItem.prototype, "sourceItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestionType" }),
        __metadata("design:type", String)
    ], NextPlaybackItem.prototype, "suggestionType", void 0);
    return NextPlaybackItem;
}(SpeakeasyBase));
export { NextPlaybackItem };
