import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails } from "./googleanalyticsadminv1alphalinkproposalstatusdetails";



// GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput
/** 
 * A proposal for a link between a GA4 property and a Display & Video 360 advertiser. A proposal is converted to a DisplayVideo360AdvertiserLink once approved. Google Analytics admins approve inbound proposals while Display & Video 360 admins approve outbound proposals.
**/
export class GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adsPersonalizationEnabled" })
  adsPersonalizationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=campaignDataSharingEnabled" })
  campaignDataSharingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=costDataSharingEnabled" })
  costDataSharingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=validationEmail" })
  validationEmail?: string;
}


// GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal
/** 
 * A proposal for a link between a GA4 property and a Display & Video 360 advertiser. A proposal is converted to a DisplayVideo360AdvertiserLink once approved. Google Analytics admins approve inbound proposals while Display & Video 360 admins approve outbound proposals.
**/
export class GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adsPersonalizationEnabled" })
  adsPersonalizationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=advertiserDisplayName" })
  advertiserDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=campaignDataSharingEnabled" })
  campaignDataSharingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=costDataSharingEnabled" })
  costDataSharingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=linkProposalStatusDetails" })
  linkProposalStatusDetails?: GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=validationEmail" })
  validationEmail?: string;
}
