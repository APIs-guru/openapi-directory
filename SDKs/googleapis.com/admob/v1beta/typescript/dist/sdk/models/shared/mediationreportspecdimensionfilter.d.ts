import { SpeakeasyBase } from "../../../internal/utils";
import { StringList } from "./stringlist";
export declare enum MediationReportSpecDimensionFilterDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED",
    Date = "DATE",
    Month = "MONTH",
    Week = "WEEK",
    AdSource = "AD_SOURCE",
    AdSourceInstance = "AD_SOURCE_INSTANCE",
    AdUnit = "AD_UNIT",
    App = "APP",
    MediationGroup = "MEDIATION_GROUP",
    Country = "COUNTRY",
    Format = "FORMAT",
    Platform = "PLATFORM",
    MobileOsVersion = "MOBILE_OS_VERSION",
    GmaSdkVersion = "GMA_SDK_VERSION",
    AppVersionName = "APP_VERSION_NAME",
    ServingRestriction = "SERVING_RESTRICTION"
}
/**
 * Describes which report rows to match based on their dimension values.
**/
export declare class MediationReportSpecDimensionFilter extends SpeakeasyBase {
    dimension?: MediationReportSpecDimensionFilterDimensionEnum;
    matchesAny?: StringList;
}
