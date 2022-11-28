import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactInformation } from "./contactinformation";
import { Seller } from "./seller";
import { TargetingCriteria } from "./targetingcriteria";
import { DealTerms } from "./dealterms";


export enum ProductSyndicationProductEnum {
    SyndicationProductUnspecified = "SYNDICATION_PRODUCT_UNSPECIFIED",
    Content = "CONTENT",
    Mobile = "MOBILE",
    Video = "VIDEO",
    Games = "GAMES"
}


// Product
/** 
 * A product is a segment of inventory that a seller wants to sell. It is associated with certain terms and targeting information which helps the buyer know more about the inventory.
**/
export class Product extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availableEndTime" })
  availableEndTime?: string;

  @SpeakeasyMetadata({ data: "json, name=availableStartTime" })
  availableStartTime?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=creatorContacts", elemType: ContactInformation })
  creatorContacts?: ContactInformation[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=hasCreatorSignedOff" })
  hasCreatorSignedOff?: boolean;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=productRevision" })
  productRevision?: string;

  @SpeakeasyMetadata({ data: "json, name=publisherProfileId" })
  publisherProfileId?: string;

  @SpeakeasyMetadata({ data: "json, name=seller" })
  seller?: Seller;

  @SpeakeasyMetadata({ data: "json, name=syndicationProduct" })
  syndicationProduct?: ProductSyndicationProductEnum;

  @SpeakeasyMetadata({ data: "json, name=targetingCriterion", elemType: TargetingCriteria })
  targetingCriterion?: TargetingCriteria[];

  @SpeakeasyMetadata({ data: "json, name=terms" })
  terms?: DealTerms;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=webPropertyCode" })
  webPropertyCode?: string;
}
