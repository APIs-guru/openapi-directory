import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnum {
    ActionTypeUnspecified = "ACTION_TYPE_UNSPECIFIED",
    Created = "CREATED",
    Updated = "UPDATED",
    Deleted = "DELETED"
}
export declare enum GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum {
    ChangeHistoryResourceTypeUnspecified = "CHANGE_HISTORY_RESOURCE_TYPE_UNSPECIFIED",
    Account = "ACCOUNT",
    Property = "PROPERTY",
    FirebaseLink = "FIREBASE_LINK",
    GoogleAdsLink = "GOOGLE_ADS_LINK",
    GoogleSignalsSettings = "GOOGLE_SIGNALS_SETTINGS",
    ConversionEvent = "CONVERSION_EVENT",
    MeasurementProtocolSecret = "MEASUREMENT_PROTOCOL_SECRET",
    CustomDimension = "CUSTOM_DIMENSION",
    CustomMetric = "CUSTOM_METRIC",
    DataRetentionSettings = "DATA_RETENTION_SETTINGS",
    DisplayVideo360AdvertiserLink = "DISPLAY_VIDEO_360_ADVERTISER_LINK",
    DisplayVideo360AdvertiserLinkProposal = "DISPLAY_VIDEO_360_ADVERTISER_LINK_PROPOSAL",
    SearchAds360Link = "SEARCH_ADS_360_LINK",
    DataStream = "DATA_STREAM",
    AttributionSettings = "ATTRIBUTION_SETTINGS",
    ExpandedDataSet = "EXPANDED_DATA_SET",
    ChannelGroup = "CHANNEL_GROUP"
}
/**
 * Request message for SearchChangeHistoryEvents RPC.
**/
export declare class GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest extends SpeakeasyBase {
    action?: GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnum[];
    actorEmail?: string[];
    earliestChangeTime?: string;
    latestChangeTime?: string;
    pageSize?: number;
    pageToken?: string;
    property?: string;
    resourceType?: GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum[];
}
