import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContactInformation } from "./contactinformation";
import { Seller } from "./seller";
import { TargetingCriteria } from "./targetingcriteria";
import { DealTerms } from "./dealterms";

export enum ProductSyndicationProductEnum {
    SyndicationProductUnspecified = "SYNDICATION_PRODUCT_UNSPECIFIED"
,    Content = "CONTENT"
,    Mobile = "MOBILE"
,    Video = "VIDEO"
,    Games = "GAMES"
}


// Product
/** 
 * A product is a segment of inventory that a seller wants to sell. It is associated with certain terms and targeting information which helps the buyer know more about the inventory.
**/
export class Product extends SpeakeasyBase {
  @Metadata({ data: "json, name=availableEndTime" })
  availableEndTime?: string;

  @Metadata({ data: "json, name=availableStartTime" })
  availableStartTime?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=creatorContacts", elemType: shared.ContactInformation })
  creatorContacts?: ContactInformation[];

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=hasCreatorSignedOff" })
  hasCreatorSignedOff?: boolean;

  @Metadata({ data: "json, name=productId" })
  productId?: string;

  @Metadata({ data: "json, name=productRevision" })
  productRevision?: string;

  @Metadata({ data: "json, name=publisherProfileId" })
  publisherProfileId?: string;

  @Metadata({ data: "json, name=seller" })
  seller?: Seller;

  @Metadata({ data: "json, name=syndicationProduct" })
  syndicationProduct?: ProductSyndicationProductEnum;

  @Metadata({ data: "json, name=targetingCriterion", elemType: shared.TargetingCriteria })
  targetingCriterion?: TargetingCriteria[];

  @Metadata({ data: "json, name=terms" })
  terms?: DealTerms;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=webPropertyCode" })
  webPropertyCode?: string;
}
