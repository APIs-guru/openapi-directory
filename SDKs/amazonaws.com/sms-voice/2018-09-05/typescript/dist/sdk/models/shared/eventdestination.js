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
import { CloudWatchLogsDestination } from "./cloudwatchlogsdestination";
import { KinesisFirehoseDestination } from "./kinesisfirehosedestination";
import { SnsDestination } from "./snsdestination";
// EventDestination
/**
 * An object that defines an event destination.
**/
var EventDestination = /** @class */ (function (_super) {
    __extends(EventDestination, _super);
    function EventDestination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=CloudWatchLogsDestination" }),
        __metadata("design:type", CloudWatchLogsDestination)
    ], EventDestination.prototype, "cloudWatchLogsDestination", void 0);
    __decorate([
        Metadata({ data: "json, name=Enabled" }),
        __metadata("design:type", Boolean)
    ], EventDestination.prototype, "enabled", void 0);
    __decorate([
        Metadata({ data: "json, name=KinesisFirehoseDestination" }),
        __metadata("design:type", KinesisFirehoseDestination)
    ], EventDestination.prototype, "kinesisFirehoseDestination", void 0);
    __decorate([
        Metadata({ data: "json, name=MatchingEventTypes" }),
        __metadata("design:type", Array)
    ], EventDestination.prototype, "matchingEventTypes", void 0);
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], EventDestination.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=SnsDestination" }),
        __metadata("design:type", SnsDestination)
    ], EventDestination.prototype, "snsDestination", void 0);
    return EventDestination;
}(SpeakeasyBase));
export { EventDestination };
