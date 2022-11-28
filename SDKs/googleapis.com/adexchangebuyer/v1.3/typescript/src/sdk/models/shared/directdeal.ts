import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DirectDeal
/** 
 * The configuration data for an Ad Exchange direct deal.
**/
export class DirectDeal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: number;

  @SpeakeasyMetadata({ data: "json, name=advertiser" })
  advertiser?: string;

  @SpeakeasyMetadata({ data: "json, name=allowsAlcohol" })
  allowsAlcohol?: boolean;

  @SpeakeasyMetadata({ data: "json, name=buyerAccountId" })
  buyerAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=dealTier" })
  dealTier?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=fixedCpm" })
  fixedCpm?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=privateExchangeMinCpm" })
  privateExchangeMinCpm?: string;

  @SpeakeasyMetadata({ data: "json, name=publisherBlocksOverriden" })
  publisherBlocksOverriden?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sellerNetwork" })
  sellerNetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
