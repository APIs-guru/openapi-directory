import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal } from "./googleanalyticsadminv1alphadisplayvideo360advertiserlinkproposal";


// GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse
/** 
 * Response message for ListDisplayVideo360AdvertiserLinkProposals RPC.
**/
export class GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayVideo360AdvertiserLinkProposals", elemType: shared.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal })
  displayVideo360AdvertiserLinkProposals?: GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
