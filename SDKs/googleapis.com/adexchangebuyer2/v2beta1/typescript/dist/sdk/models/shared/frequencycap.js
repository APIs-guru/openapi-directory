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
export var FrequencyCapTimeUnitTypeEnum;
(function (FrequencyCapTimeUnitTypeEnum) {
    FrequencyCapTimeUnitTypeEnum["TimeUnitTypeUnspecified"] = "TIME_UNIT_TYPE_UNSPECIFIED";
    FrequencyCapTimeUnitTypeEnum["Minute"] = "MINUTE";
    FrequencyCapTimeUnitTypeEnum["Hour"] = "HOUR";
    FrequencyCapTimeUnitTypeEnum["Day"] = "DAY";
    FrequencyCapTimeUnitTypeEnum["Week"] = "WEEK";
    FrequencyCapTimeUnitTypeEnum["Month"] = "MONTH";
    FrequencyCapTimeUnitTypeEnum["Lifetime"] = "LIFETIME";
    FrequencyCapTimeUnitTypeEnum["Pod"] = "POD";
    FrequencyCapTimeUnitTypeEnum["Stream"] = "STREAM";
})(FrequencyCapTimeUnitTypeEnum || (FrequencyCapTimeUnitTypeEnum = {}));
// FrequencyCap
/**
 * Frequency cap.
**/
var FrequencyCap = /** @class */ (function (_super) {
    __extends(FrequencyCap, _super);
    function FrequencyCap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxImpressions" }),
        __metadata("design:type", Number)
    ], FrequencyCap.prototype, "maxImpressions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numTimeUnits" }),
        __metadata("design:type", Number)
    ], FrequencyCap.prototype, "numTimeUnits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeUnitType" }),
        __metadata("design:type", String)
    ], FrequencyCap.prototype, "timeUnitType", void 0);
    return FrequencyCap;
}(SpeakeasyBase));
export { FrequencyCap };
