import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleAnalyticsAdminV1alphaAttributionSettingsAcquisitionConversionEventLookbackWindowEnum {
    AcquisitionConversionEventLookbackWindowUnspecified = "ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_UNSPECIFIED",
    AcquisitionConversionEventLookbackWindow7Days = "ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_7_DAYS",
    AcquisitionConversionEventLookbackWindow30Days = "ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_30_DAYS"
}
export declare enum GoogleAnalyticsAdminV1alphaAttributionSettingsOtherConversionEventLookbackWindowEnum {
    OtherConversionEventLookbackWindowUnspecified = "OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_UNSPECIFIED",
    OtherConversionEventLookbackWindow30Days = "OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_30_DAYS",
    OtherConversionEventLookbackWindow60Days = "OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_60_DAYS",
    OtherConversionEventLookbackWindow90Days = "OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_90_DAYS"
}
export declare enum GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnum {
    ReportingAttributionModelUnspecified = "REPORTING_ATTRIBUTION_MODEL_UNSPECIFIED",
    CrossChannelDataDriven = "CROSS_CHANNEL_DATA_DRIVEN",
    CrossChannelLastClick = "CROSS_CHANNEL_LAST_CLICK",
    CrossChannelFirstClick = "CROSS_CHANNEL_FIRST_CLICK",
    CrossChannelLinear = "CROSS_CHANNEL_LINEAR",
    CrossChannelPositionBased = "CROSS_CHANNEL_POSITION_BASED",
    CrossChannelTimeDecay = "CROSS_CHANNEL_TIME_DECAY",
    AdsPreferredLastClick = "ADS_PREFERRED_LAST_CLICK"
}
/**
 * The attribution settings used for a given property. This is a singleton resource.
**/
export declare class GoogleAnalyticsAdminV1alphaAttributionSettings extends SpeakeasyBase {
    acquisitionConversionEventLookbackWindow?: GoogleAnalyticsAdminV1alphaAttributionSettingsAcquisitionConversionEventLookbackWindowEnum;
    name?: string;
    otherConversionEventLookbackWindow?: GoogleAnalyticsAdminV1alphaAttributionSettingsOtherConversionEventLookbackWindowEnum;
    reportingAttributionModel?: GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnum;
}
