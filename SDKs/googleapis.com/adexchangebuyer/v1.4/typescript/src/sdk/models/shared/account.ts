import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccountBidderLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=bidProtocol" })
  bidProtocol?: string;

  @Metadata({ data: "json, name=maximumQps" })
  maximumQps?: number;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


// Account
/** 
 * Configuration data for an Ad Exchange buyer account.
**/
export class Account extends SpeakeasyBase {
  @Metadata({ data: "json, name=applyPretargetingToNonGuaranteedDeals" })
  applyPretargetingToNonGuaranteedDeals?: boolean;

  @Metadata({ data: "json, name=bidderLocation", elemType: shared.AccountBidderLocation })
  bidderLocation?: AccountBidderLocation[];

  @Metadata({ data: "json, name=cookieMatchingNid" })
  cookieMatchingNid?: string;

  @Metadata({ data: "json, name=cookieMatchingUrl" })
  cookieMatchingUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=maximumActiveCreatives" })
  maximumActiveCreatives?: number;

  @Metadata({ data: "json, name=maximumTotalQps" })
  maximumTotalQps?: number;

  @Metadata({ data: "json, name=numberActiveCreatives" })
  numberActiveCreatives?: number;
}
