import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DirectDeal
/** 
 * The configuration data for an Ad Exchange direct deal.
**/
export class DirectDeal extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: number;

  @Metadata({ data: "json, name=advertiser" })
  advertiser?: string;

  @Metadata({ data: "json, name=allowsAlcohol" })
  allowsAlcohol?: boolean;

  @Metadata({ data: "json, name=buyerAccountId" })
  buyerAccountId?: string;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=dealTier" })
  dealTier?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=fixedCpm" })
  fixedCpm?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=privateExchangeMinCpm" })
  privateExchangeMinCpm?: string;

  @Metadata({ data: "json, name=publisherBlocksOverriden" })
  publisherBlocksOverriden?: boolean;

  @Metadata({ data: "json, name=sellerNetwork" })
  sellerNetwork?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
