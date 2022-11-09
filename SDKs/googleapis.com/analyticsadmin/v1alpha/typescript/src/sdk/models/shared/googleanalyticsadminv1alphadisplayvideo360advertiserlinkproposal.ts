import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails } from "./googleanalyticsadminv1alphalinkproposalstatusdetails";


// GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal
/** 
 * A proposal for a link between a GA4 property and a Display & Video 360 advertiser. A proposal is converted to a DisplayVideo360AdvertiserLink once approved. Google Analytics admins approve inbound proposals while Display & Video 360 admins approve outbound proposals.
**/
export class GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal extends SpeakeasyBase {
  @Metadata({ data: "json, name=adsPersonalizationEnabled" })
  adsPersonalizationEnabled?: boolean;

  @Metadata({ data: "json, name=advertiserDisplayName" })
  advertiserDisplayName?: string;

  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=campaignDataSharingEnabled" })
  campaignDataSharingEnabled?: boolean;

  @Metadata({ data: "json, name=costDataSharingEnabled" })
  costDataSharingEnabled?: boolean;

  @Metadata({ data: "json, name=linkProposalStatusDetails" })
  linkProposalStatusDetails?: GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=validationEmail" })
  validationEmail?: string;
}
