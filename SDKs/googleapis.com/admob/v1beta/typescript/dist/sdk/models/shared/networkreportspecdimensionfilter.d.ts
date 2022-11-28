import { SpeakeasyBase } from "../../../internal/utils";
import { StringList } from "./stringlist";
export declare enum NetworkReportSpecDimensionFilterDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED",
    Date = "DATE",
    Month = "MONTH",
    Week = "WEEK",
    AdUnit = "AD_UNIT",
    App = "APP",
    AdType = "AD_TYPE",
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
export declare class NetworkReportSpecDimensionFilter extends SpeakeasyBase {
    dimension?: NetworkReportSpecDimensionFilterDimensionEnum;
    matchesAny?: StringList;
}
