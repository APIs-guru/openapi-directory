import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountBidderLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bidProtocol" })
  bidProtocol?: string;

  @SpeakeasyMetadata({ data: "json, name=maximumQps" })
  maximumQps?: number;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// Account
/** 
 * Configuration data for an Ad Exchange buyer account.
**/
export class Account extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applyPretargetingToNonGuaranteedDeals" })
  applyPretargetingToNonGuaranteedDeals?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bidderLocation", elemType: AccountBidderLocation })
  bidderLocation?: AccountBidderLocation[];

  @SpeakeasyMetadata({ data: "json, name=cookieMatchingNid" })
  cookieMatchingNid?: string;

  @SpeakeasyMetadata({ data: "json, name=cookieMatchingUrl" })
  cookieMatchingUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=maximumActiveCreatives" })
  maximumActiveCreatives?: number;

  @SpeakeasyMetadata({ data: "json, name=maximumTotalQps" })
  maximumTotalQps?: number;

  @SpeakeasyMetadata({ data: "json, name=numberActiveCreatives" })
  numberActiveCreatives?: number;
}
