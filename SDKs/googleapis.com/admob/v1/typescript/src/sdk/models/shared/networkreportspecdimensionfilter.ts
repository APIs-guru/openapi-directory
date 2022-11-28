import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StringList } from "./stringlist";


export enum NetworkReportSpecDimensionFilterDimensionEnum {
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


// NetworkReportSpecDimensionFilter
/** 
 * Describes which report rows to match based on their dimension values.
**/
export class NetworkReportSpecDimensionFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: NetworkReportSpecDimensionFilterDimensionEnum;

  @SpeakeasyMetadata({ data: "json, name=matchesAny" })
  matchesAny?: StringList;
}
