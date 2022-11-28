import { SpeakeasyBase } from "../../../internal/utils";
import { ContactInformation } from "./contactinformation";
import { Seller } from "./seller";
import { TargetingCriteria } from "./targetingcriteria";
import { DealTerms } from "./dealterms";
export declare enum ProductSyndicationProductEnum {
    SyndicationProductUnspecified = "SYNDICATION_PRODUCT_UNSPECIFIED",
    Content = "CONTENT",
    Mobile = "MOBILE",
    Video = "VIDEO",
    Games = "GAMES"
}
/**
 * A product is a segment of inventory that a seller wants to sell. It is associated with certain terms and targeting information which helps the buyer know more about the inventory.
**/
export declare class Product extends SpeakeasyBase {
    availableEndTime?: string;
    availableStartTime?: string;
    createTime?: string;
    creatorContacts?: ContactInformation[];
    displayName?: string;
    hasCreatorSignedOff?: boolean;
    productId?: string;
    productRevision?: string;
    publisherProfileId?: string;
    seller?: Seller;
    syndicationProduct?: ProductSyndicationProductEnum;
    targetingCriterion?: TargetingCriteria[];
    terms?: DealTerms;
    updateTime?: string;
    webPropertyCode?: string;
}
