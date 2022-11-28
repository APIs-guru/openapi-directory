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
import { StringList } from "./stringlist";
export var MediationReportSpecDimensionFilterDimensionEnum;
(function (MediationReportSpecDimensionFilterDimensionEnum) {
    MediationReportSpecDimensionFilterDimensionEnum["DimensionUnspecified"] = "DIMENSION_UNSPECIFIED";
    MediationReportSpecDimensionFilterDimensionEnum["Date"] = "DATE";
    MediationReportSpecDimensionFilterDimensionEnum["Month"] = "MONTH";
    MediationReportSpecDimensionFilterDimensionEnum["Week"] = "WEEK";
    MediationReportSpecDimensionFilterDimensionEnum["AdSource"] = "AD_SOURCE";
    MediationReportSpecDimensionFilterDimensionEnum["AdSourceInstance"] = "AD_SOURCE_INSTANCE";
    MediationReportSpecDimensionFilterDimensionEnum["AdUnit"] = "AD_UNIT";
    MediationReportSpecDimensionFilterDimensionEnum["App"] = "APP";
    MediationReportSpecDimensionFilterDimensionEnum["MediationGroup"] = "MEDIATION_GROUP";
    MediationReportSpecDimensionFilterDimensionEnum["Country"] = "COUNTRY";
    MediationReportSpecDimensionFilterDimensionEnum["Format"] = "FORMAT";
    MediationReportSpecDimensionFilterDimensionEnum["Platform"] = "PLATFORM";
    MediationReportSpecDimensionFilterDimensionEnum["MobileOsVersion"] = "MOBILE_OS_VERSION";
    MediationReportSpecDimensionFilterDimensionEnum["GmaSdkVersion"] = "GMA_SDK_VERSION";
    MediationReportSpecDimensionFilterDimensionEnum["AppVersionName"] = "APP_VERSION_NAME";
    MediationReportSpecDimensionFilterDimensionEnum["ServingRestriction"] = "SERVING_RESTRICTION";
})(MediationReportSpecDimensionFilterDimensionEnum || (MediationReportSpecDimensionFilterDimensionEnum = {}));
// MediationReportSpecDimensionFilter
/**
 * Describes which report rows to match based on their dimension values.
**/
var MediationReportSpecDimensionFilter = /** @class */ (function (_super) {
    __extends(MediationReportSpecDimensionFilter, _super);
    function MediationReportSpecDimensionFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimension" }),
        __metadata("design:type", String)
    ], MediationReportSpecDimensionFilter.prototype, "dimension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matchesAny" }),
        __metadata("design:type", StringList)
    ], MediationReportSpecDimensionFilter.prototype, "matchesAny", void 0);
    return MediationReportSpecDimensionFilter;
}(SpeakeasyBase));
export { MediationReportSpecDimensionFilter };
