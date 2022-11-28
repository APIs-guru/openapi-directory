import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccount } from "./googleanalyticsadminv1alphaaccount";
import { GoogleAnalyticsAdminV1alphaAttributionSettings } from "./googleanalyticsadminv1alphaattributionsettings";
import { GoogleAnalyticsAdminV1alphaConversionEvent } from "./googleanalyticsadminv1alphaconversionevent";
import { GoogleAnalyticsAdminV1alphaCustomDimension } from "./googleanalyticsadminv1alphacustomdimension";
import { GoogleAnalyticsAdminV1alphaCustomMetric } from "./googleanalyticsadminv1alphacustommetric";
import { GoogleAnalyticsAdminV1alphaDataRetentionSettings } from "./googleanalyticsadminv1alphadataretentionsettings";
import { GoogleAnalyticsAdminV1alphaDataStream } from "./googleanalyticsadminv1alphadatastream";
import { GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink } from "./googleanalyticsadminv1alphadisplayvideo360advertiserlink";
import { GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal } from "./googleanalyticsadminv1alphadisplayvideo360advertiserlinkproposal";
import { GoogleAnalyticsAdminV1alphaExpandedDataSet } from "./googleanalyticsadminv1alphaexpandeddataset";
import { GoogleAnalyticsAdminV1alphaFirebaseLink } from "./googleanalyticsadminv1alphafirebaselink";
import { GoogleAnalyticsAdminV1alphaGoogleAdsLink } from "./googleanalyticsadminv1alphagoogleadslink";
import { GoogleAnalyticsAdminV1alphaGoogleSignalsSettings } from "./googleanalyticsadminv1alphagooglesignalssettings";
import { GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret } from "./googleanalyticsadminv1alphameasurementprotocolsecret";
import { GoogleAnalyticsAdminV1alphaProperty } from "./googleanalyticsadminv1alphaproperty";
import { GoogleAnalyticsAdminV1alphaSearchAds360Link } from "./googleanalyticsadminv1alphasearchads360link";



// GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource
/** 
 * A snapshot of a resource as before or after the result of a change in change history.
**/
export class GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: GoogleAnalyticsAdminV1alphaAccount;

  @SpeakeasyMetadata({ data: "json, name=attributionSettings" })
  attributionSettings?: GoogleAnalyticsAdminV1alphaAttributionSettings;

  @SpeakeasyMetadata({ data: "json, name=conversionEvent" })
  conversionEvent?: GoogleAnalyticsAdminV1alphaConversionEvent;

  @SpeakeasyMetadata({ data: "json, name=customDimension" })
  customDimension?: GoogleAnalyticsAdminV1alphaCustomDimension;

  @SpeakeasyMetadata({ data: "json, name=customMetric" })
  customMetric?: GoogleAnalyticsAdminV1alphaCustomMetric;

  @SpeakeasyMetadata({ data: "json, name=dataRetentionSettings" })
  dataRetentionSettings?: GoogleAnalyticsAdminV1alphaDataRetentionSettings;

  @SpeakeasyMetadata({ data: "json, name=dataStream" })
  dataStream?: GoogleAnalyticsAdminV1alphaDataStream;

  @SpeakeasyMetadata({ data: "json, name=displayVideo360AdvertiserLink" })
  displayVideo360AdvertiserLink?: GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink;

  @SpeakeasyMetadata({ data: "json, name=displayVideo360AdvertiserLinkProposal" })
  displayVideo360AdvertiserLinkProposal?: GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal;

  @SpeakeasyMetadata({ data: "json, name=expandedDataSet" })
  expandedDataSet?: GoogleAnalyticsAdminV1alphaExpandedDataSet;

  @SpeakeasyMetadata({ data: "json, name=firebaseLink" })
  firebaseLink?: GoogleAnalyticsAdminV1alphaFirebaseLink;

  @SpeakeasyMetadata({ data: "json, name=googleAdsLink" })
  googleAdsLink?: GoogleAnalyticsAdminV1alphaGoogleAdsLink;

  @SpeakeasyMetadata({ data: "json, name=googleSignalsSettings" })
  googleSignalsSettings?: GoogleAnalyticsAdminV1alphaGoogleSignalsSettings;

  @SpeakeasyMetadata({ data: "json, name=measurementProtocolSecret" })
  measurementProtocolSecret?: GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret;

  @SpeakeasyMetadata({ data: "json, name=property" })
  property?: GoogleAnalyticsAdminV1alphaProperty;

  @SpeakeasyMetadata({ data: "json, name=searchAds360Link" })
  searchAds360Link?: GoogleAnalyticsAdminV1alphaSearchAds360Link;
}
