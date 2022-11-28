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
import { ScoutingTag } from "./scoutingtag";
export var ScoutingObservationLocationDisplayColorEnum;
(function (ScoutingObservationLocationDisplayColorEnum) {
    ScoutingObservationLocationDisplayColorEnum["Number307af7"] = "#307af7";
    ScoutingObservationLocationDisplayColorEnum["Number38d753"] = "#38d753";
    ScoutingObservationLocationDisplayColorEnum["NumberB037e4"] = "#b037e4";
    ScoutingObservationLocationDisplayColorEnum["NumberEf3e3e"] = "#ef3e3e";
    ScoutingObservationLocationDisplayColorEnum["NumberF7ec41"] = "#f7ec41";
    ScoutingObservationLocationDisplayColorEnum["NumberFf8439"] = "#ff8439";
    ScoutingObservationLocationDisplayColorEnum["Number808080"] = "#808080";
})(ScoutingObservationLocationDisplayColorEnum || (ScoutingObservationLocationDisplayColorEnum = {}));
export var ScoutingObservationStatusEnum;
(function (ScoutingObservationStatusEnum) {
    ScoutingObservationStatusEnum["Active"] = "ACTIVE";
    ScoutingObservationStatusEnum["Deleted"] = "DELETED";
})(ScoutingObservationStatusEnum || (ScoutingObservationStatusEnum = {}));
export var ScoutingObservationTimespanEnum;
(function (ScoutingObservationTimespanEnum) {
    ScoutingObservationTimespanEnum["Permanent"] = "PERMANENT";
    ScoutingObservationTimespanEnum["Seasonal"] = "SEASONAL";
})(ScoutingObservationTimespanEnum || (ScoutingObservationTimespanEnum = {}));
var ScoutingObservation = /** @class */ (function (_super) {
    __extends(ScoutingObservation, _super);
    function ScoutingObservation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", Date)
    ], ScoutingObservation.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldIds" }),
        __metadata("design:type", Array)
    ], ScoutingObservation.prototype, "fieldIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ScoutingObservation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", Object)
    ], ScoutingObservation.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationDisplayColor" }),
        __metadata("design:type", String)
    ], ScoutingObservation.prototype, "locationDisplayColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], ScoutingObservation.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", Date)
    ], ScoutingObservation.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ScoutingObservation.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: ScoutingTag }),
        __metadata("design:type", Array)
    ], ScoutingObservation.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timespan" }),
        __metadata("design:type", String)
    ], ScoutingObservation.prototype, "timespan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ScoutingObservation.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], ScoutingObservation.prototype, "updatedAt", void 0);
    return ScoutingObservation;
}(SpeakeasyBase));
export { ScoutingObservation };
