import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnum {
    ActionTypeUnspecified = "ACTION_TYPE_UNSPECIFIED"
,    Created = "CREATED"
,    Updated = "UPDATED"
,    Deleted = "DELETED"
}

export enum GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum {
    ChangeHistoryResourceTypeUnspecified = "CHANGE_HISTORY_RESOURCE_TYPE_UNSPECIFIED"
,    Account = "ACCOUNT"
,    Property = "PROPERTY"
,    FirebaseLink = "FIREBASE_LINK"
,    GoogleAdsLink = "GOOGLE_ADS_LINK"
,    GoogleSignalsSettings = "GOOGLE_SIGNALS_SETTINGS"
,    ConversionEvent = "CONVERSION_EVENT"
,    MeasurementProtocolSecret = "MEASUREMENT_PROTOCOL_SECRET"
,    CustomDimension = "CUSTOM_DIMENSION"
,    CustomMetric = "CUSTOM_METRIC"
,    DataRetentionSettings = "DATA_RETENTION_SETTINGS"
,    DisplayVideo360AdvertiserLink = "DISPLAY_VIDEO_360_ADVERTISER_LINK"
,    DisplayVideo360AdvertiserLinkProposal = "DISPLAY_VIDEO_360_ADVERTISER_LINK_PROPOSAL"
,    SearchAds360Link = "SEARCH_ADS_360_LINK"
,    DataStream = "DATA_STREAM"
,    AttributionSettings = "ATTRIBUTION_SETTINGS"
,    ExpandedDataSet = "EXPANDED_DATA_SET"
}


// GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest
/** 
 * Request message for SearchChangeHistoryEvents RPC.
**/
export class GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnum[];

  @Metadata({ data: "json, name=actorEmail" })
  actorEmail?: string[];

  @Metadata({ data: "json, name=earliestChangeTime" })
  earliestChangeTime?: string;

  @Metadata({ data: "json, name=latestChangeTime" })
  latestChangeTime?: string;

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=property" })
  property?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum[];
}
