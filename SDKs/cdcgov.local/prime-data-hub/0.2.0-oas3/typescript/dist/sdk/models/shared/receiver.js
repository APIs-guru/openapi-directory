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
import { SettingMetadata } from "./settingmetadata";
export var ReceiverJurisdictionalFiltersMatchFieldsEnum;
(function (ReceiverJurisdictionalFiltersMatchFieldsEnum) {
    ReceiverJurisdictionalFiltersMatchFieldsEnum["FacilityOrPatientAddress"] = "FACILITY_OR_PATIENT_ADDRESS";
    ReceiverJurisdictionalFiltersMatchFieldsEnum["FacilityAddress"] = "FACILITY_ADDRESS";
    ReceiverJurisdictionalFiltersMatchFieldsEnum["FacilityName"] = "FACILITY_NAME";
    ReceiverJurisdictionalFiltersMatchFieldsEnum["AbnormalValue"] = "ABNORMAL_VALUE";
})(ReceiverJurisdictionalFiltersMatchFieldsEnum || (ReceiverJurisdictionalFiltersMatchFieldsEnum = {}));
// ReceiverJurisdictionalFilters
/**
 * A single filter
**/
var ReceiverJurisdictionalFilters = /** @class */ (function (_super) {
    __extends(ReceiverJurisdictionalFilters, _super);
    function ReceiverJurisdictionalFilters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=doesNotMatch" }),
        __metadata("design:type", Boolean)
    ], ReceiverJurisdictionalFilters.prototype, "doesNotMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matchFields" }),
        __metadata("design:type", String)
    ], ReceiverJurisdictionalFilters.prototype, "matchFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matchValues" }),
        __metadata("design:type", Array)
    ], ReceiverJurisdictionalFilters.prototype, "matchValues", void 0);
    return ReceiverJurisdictionalFilters;
}(SpeakeasyBase));
export { ReceiverJurisdictionalFilters };
export var ReceiverTimingFrequencyEnum;
(function (ReceiverTimingFrequencyEnum) {
    ReceiverTimingFrequencyEnum["RealTime"] = "REAL_TIME";
    ReceiverTimingFrequencyEnum["Hourly"] = "HOURLY";
    ReceiverTimingFrequencyEnum["Daily"] = "DAILY";
})(ReceiverTimingFrequencyEnum || (ReceiverTimingFrequencyEnum = {}));
// ReceiverTiming
/**
 * When the report is sent if not immediately
**/
var ReceiverTiming = /** @class */ (function (_super) {
    __extends(ReceiverTiming, _super);
    function ReceiverTiming() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dailyAt" }),
        __metadata("design:type", Number)
    ], ReceiverTiming.prototype, "dailyAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frequency" }),
        __metadata("design:type", String)
    ], ReceiverTiming.prototype, "frequency", void 0);
    return ReceiverTiming;
}(SpeakeasyBase));
export { ReceiverTiming };
// Receiver
/**
 * A receiver of reports from the data hub
**/
var Receiver = /** @class */ (function (_super) {
    __extends(Receiver, _super);
    function Receiver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Receiver.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jurisdictionalFilters", elemType: ReceiverJurisdictionalFilters }),
        __metadata("design:type", Array)
    ], Receiver.prototype, "jurisdictionalFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", SettingMetadata)
    ], Receiver.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Receiver.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizationName" }),
        __metadata("design:type", String)
    ], Receiver.prototype, "organizationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timing" }),
        __metadata("design:type", ReceiverTiming)
    ], Receiver.prototype, "timing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], Receiver.prototype, "topic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=translations" }),
        __metadata("design:type", Array)
    ], Receiver.prototype, "translations", void 0);
    return Receiver;
}(SpeakeasyBase));
export { Receiver };
// ReceiverInput
/**
 * A receiver of reports from the data hub
**/
var ReceiverInput = /** @class */ (function (_super) {
    __extends(ReceiverInput, _super);
    function ReceiverInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ReceiverInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jurisdictionalFilters", elemType: ReceiverJurisdictionalFilters }),
        __metadata("design:type", Array)
    ], ReceiverInput.prototype, "jurisdictionalFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReceiverInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timing" }),
        __metadata("design:type", ReceiverTiming)
    ], ReceiverInput.prototype, "timing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], ReceiverInput.prototype, "topic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=translations" }),
        __metadata("design:type", Array)
    ], ReceiverInput.prototype, "translations", void 0);
    return ReceiverInput;
}(SpeakeasyBase));
export { ReceiverInput };
