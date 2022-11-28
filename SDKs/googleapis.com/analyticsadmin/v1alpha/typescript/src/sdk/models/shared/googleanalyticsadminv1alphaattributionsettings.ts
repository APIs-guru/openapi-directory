import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleAnalyticsAdminV1alphaAttributionSettingsAcquisitionConversionEventLookbackWindowEnum {
    AcquisitionConversionEventLookbackWindowUnspecified = "ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_UNSPECIFIED",
    AcquisitionConversionEventLookbackWindow7Days = "ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_7_DAYS",
    AcquisitionConversionEventLookbackWindow30Days = "ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_30_DAYS"
}

export enum GoogleAnalyticsAdminV1alphaAttributionSettingsOtherConversionEventLookbackWindowEnum {
    OtherConversionEventLookbackWindowUnspecified = "OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_UNSPECIFIED",
    OtherConversionEventLookbackWindow30Days = "OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_30_DAYS",
    OtherConversionEventLookbackWindow60Days = "OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_60_DAYS",
    OtherConversionEventLookbackWindow90Days = "OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_90_DAYS"
}

export enum GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnum {
    ReportingAttributionModelUnspecified = "REPORTING_ATTRIBUTION_MODEL_UNSPECIFIED",
    CrossChannelDataDriven = "CROSS_CHANNEL_DATA_DRIVEN",
    CrossChannelLastClick = "CROSS_CHANNEL_LAST_CLICK",
    CrossChannelFirstClick = "CROSS_CHANNEL_FIRST_CLICK",
    CrossChannelLinear = "CROSS_CHANNEL_LINEAR",
    CrossChannelPositionBased = "CROSS_CHANNEL_POSITION_BASED",
    CrossChannelTimeDecay = "CROSS_CHANNEL_TIME_DECAY",
    AdsPreferredLastClick = "ADS_PREFERRED_LAST_CLICK"
}


// GoogleAnalyticsAdminV1alphaAttributionSettings
/** 
 * The attribution settings used for a given property. This is a singleton resource.
**/
export class GoogleAnalyticsAdminV1alphaAttributionSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acquisitionConversionEventLookbackWindow" })
  acquisitionConversionEventLookbackWindow?: GoogleAnalyticsAdminV1alphaAttributionSettingsAcquisitionConversionEventLookbackWindowEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=otherConversionEventLookbackWindow" })
  otherConversionEventLookbackWindow?: GoogleAnalyticsAdminV1alphaAttributionSettingsOtherConversionEventLookbackWindowEnum;

  @SpeakeasyMetadata({ data: "json, name=reportingAttributionModel" })
  reportingAttributionModel?: GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnum;
}
