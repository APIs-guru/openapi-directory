import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StringList } from "./stringlist";


export enum MediationReportSpecDimensionFilterDimensionEnum {
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


// MediationReportSpecDimensionFilter
/** 
 * Describes which report rows to match based on their dimension values.
**/
export class MediationReportSpecDimensionFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: MediationReportSpecDimensionFilterDimensionEnum;

  @SpeakeasyMetadata({ data: "json, name=matchesAny" })
  matchesAny?: StringList;
}
