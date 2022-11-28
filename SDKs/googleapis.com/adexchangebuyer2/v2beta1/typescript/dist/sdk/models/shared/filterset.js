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
import { AbsoluteDateRange } from "./absolutedaterange";
import { RealtimeTimeRange } from "./realtimetimerange";
import { RelativeDateRange } from "./relativedaterange";
export var FilterSetBreakdownDimensionsEnum;
(function (FilterSetBreakdownDimensionsEnum) {
    FilterSetBreakdownDimensionsEnum["BreakdownDimensionUnspecified"] = "BREAKDOWN_DIMENSION_UNSPECIFIED";
    FilterSetBreakdownDimensionsEnum["PublisherIdentifier"] = "PUBLISHER_IDENTIFIER";
})(FilterSetBreakdownDimensionsEnum || (FilterSetBreakdownDimensionsEnum = {}));
export var FilterSetEnvironmentEnum;
(function (FilterSetEnvironmentEnum) {
    FilterSetEnvironmentEnum["EnvironmentUnspecified"] = "ENVIRONMENT_UNSPECIFIED";
    FilterSetEnvironmentEnum["Web"] = "WEB";
    FilterSetEnvironmentEnum["App"] = "APP";
})(FilterSetEnvironmentEnum || (FilterSetEnvironmentEnum = {}));
export var FilterSetFormatEnum;
(function (FilterSetFormatEnum) {
    FilterSetFormatEnum["FormatUnspecified"] = "FORMAT_UNSPECIFIED";
    FilterSetFormatEnum["NativeDisplay"] = "NATIVE_DISPLAY";
    FilterSetFormatEnum["NativeVideo"] = "NATIVE_VIDEO";
    FilterSetFormatEnum["NonNativeDisplay"] = "NON_NATIVE_DISPLAY";
    FilterSetFormatEnum["NonNativeVideo"] = "NON_NATIVE_VIDEO";
})(FilterSetFormatEnum || (FilterSetFormatEnum = {}));
export var FilterSetFormatsEnum;
(function (FilterSetFormatsEnum) {
    FilterSetFormatsEnum["FormatUnspecified"] = "FORMAT_UNSPECIFIED";
    FilterSetFormatsEnum["NativeDisplay"] = "NATIVE_DISPLAY";
    FilterSetFormatsEnum["NativeVideo"] = "NATIVE_VIDEO";
    FilterSetFormatsEnum["NonNativeDisplay"] = "NON_NATIVE_DISPLAY";
    FilterSetFormatsEnum["NonNativeVideo"] = "NON_NATIVE_VIDEO";
})(FilterSetFormatsEnum || (FilterSetFormatsEnum = {}));
export var FilterSetPlatformsEnum;
(function (FilterSetPlatformsEnum) {
    FilterSetPlatformsEnum["PlatformUnspecified"] = "PLATFORM_UNSPECIFIED";
    FilterSetPlatformsEnum["Desktop"] = "DESKTOP";
    FilterSetPlatformsEnum["Tablet"] = "TABLET";
    FilterSetPlatformsEnum["Mobile"] = "MOBILE";
})(FilterSetPlatformsEnum || (FilterSetPlatformsEnum = {}));
export var FilterSetTimeSeriesGranularityEnum;
(function (FilterSetTimeSeriesGranularityEnum) {
    FilterSetTimeSeriesGranularityEnum["TimeSeriesGranularityUnspecified"] = "TIME_SERIES_GRANULARITY_UNSPECIFIED";
    FilterSetTimeSeriesGranularityEnum["Hourly"] = "HOURLY";
    FilterSetTimeSeriesGranularityEnum["Daily"] = "DAILY";
})(FilterSetTimeSeriesGranularityEnum || (FilterSetTimeSeriesGranularityEnum = {}));
// FilterSet
/**
 * A set of filters that is applied to a request for data. Within a filter set, an AND operation is performed across the filters represented by each field. An OR operation is performed across the filters represented by the multiple values of a repeated field, for example, "format=VIDEO AND deal_id=12 AND (seller_network_id=34 OR seller_network_id=56)".
**/
var FilterSet = /** @class */ (function (_super) {
    __extends(FilterSet, _super);
    function FilterSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=absoluteDateRange" }),
        __metadata("design:type", AbsoluteDateRange)
    ], FilterSet.prototype, "absoluteDateRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=breakdownDimensions" }),
        __metadata("design:type", Array)
    ], FilterSet.prototype, "breakdownDimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeId" }),
        __metadata("design:type", String)
    ], FilterSet.prototype, "creativeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dealId" }),
        __metadata("design:type", String)
    ], FilterSet.prototype, "dealId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", String)
    ], FilterSet.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], FilterSet.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=formats" }),
        __metadata("design:type", Array)
    ], FilterSet.prototype, "formats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], FilterSet.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platforms" }),
        __metadata("design:type", Array)
    ], FilterSet.prototype, "platforms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisherIdentifiers" }),
        __metadata("design:type", Array)
    ], FilterSet.prototype, "publisherIdentifiers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=realtimeTimeRange" }),
        __metadata("design:type", RealtimeTimeRange)
    ], FilterSet.prototype, "realtimeTimeRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relativeDateRange" }),
        __metadata("design:type", RelativeDateRange)
    ], FilterSet.prototype, "relativeDateRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sellerNetworkIds" }),
        __metadata("design:type", Array)
    ], FilterSet.prototype, "sellerNetworkIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeSeriesGranularity" }),
        __metadata("design:type", String)
    ], FilterSet.prototype, "timeSeriesGranularity", void 0);
    return FilterSet;
}(SpeakeasyBase));
export { FilterSet };
