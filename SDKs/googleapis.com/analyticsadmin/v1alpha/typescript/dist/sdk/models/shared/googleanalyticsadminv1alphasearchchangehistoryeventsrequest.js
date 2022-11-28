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
export var GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnum;
(function (GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnum) {
    GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnum["ActionTypeUnspecified"] = "ACTION_TYPE_UNSPECIFIED";
    GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnum["Created"] = "CREATED";
    GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnum["Updated"] = "UPDATED";
    GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnum["Deleted"] = "DELETED";
})(GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnum || (GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnum = {}));
export var GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum;
(function (GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum) {
    GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum["ChangeHistoryResourceTypeUnspecified"] = "CHANGE_HISTORY_RESOURCE_TYPE_UNSPECIFIED";
    GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum["Account"] = "ACCOUNT";
    GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum["Property"] = "PROPERTY";
    GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum["FirebaseLink"] = "FIREBASE_LINK";
    GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum["GoogleAdsLink"] = "GOOGLE_ADS_LINK";
    GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum["GoogleSignalsSettings"] = "GOOGLE_SIGNALS_SETTINGS";
    GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum["ConversionEvent"] = "CONVERSION_EVENT";
    GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum["MeasurementProtocolSecret"] = "MEASUREMENT_PROTOCOL_SECRET";
    GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum["CustomDimension"] = "CUSTOM_DIMENSION";
    GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum["CustomMetric"] = "CUSTOM_METRIC";
    GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum["DataRetentionSettings"] = "DATA_RETENTION_SETTINGS";
    GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum["DisplayVideo360AdvertiserLink"] = "DISPLAY_VIDEO_360_ADVERTISER_LINK";
    GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum["DisplayVideo360AdvertiserLinkProposal"] = "DISPLAY_VIDEO_360_ADVERTISER_LINK_PROPOSAL";
    GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum["SearchAds360Link"] = "SEARCH_ADS_360_LINK";
    GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum["DataStream"] = "DATA_STREAM";
    GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum["AttributionSettings"] = "ATTRIBUTION_SETTINGS";
    GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum["ExpandedDataSet"] = "EXPANDED_DATA_SET";
    GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum["ChannelGroup"] = "CHANNEL_GROUP";
})(GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum || (GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum = {}));
// GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest
/**
 * Request message for SearchChangeHistoryEvents RPC.
**/
var GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest, _super);
    function GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", Array)
    ], GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actorEmail" }),
        __metadata("design:type", Array)
    ], GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest.prototype, "actorEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=earliestChangeTime" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest.prototype, "earliestChangeTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latestChangeTime" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest.prototype, "latestChangeTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageSize" }),
        __metadata("design:type", Number)
    ], GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageToken" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=property" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest.prototype, "property", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceType" }),
        __metadata("design:type", Array)
    ], GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest.prototype, "resourceType", void 0);
    return GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest;
}(SpeakeasyBase));
export { GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest };
