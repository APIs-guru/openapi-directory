import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal } from "./googleanalyticsadminv1alphadisplayvideo360advertiserlinkproposal";



// GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse
/** 
 * Response message for ListDisplayVideo360AdvertiserLinkProposals RPC.
**/
export class GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayVideo360AdvertiserLinkProposals", elemType: GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal })
  displayVideo360AdvertiserLinkProposals?: GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
