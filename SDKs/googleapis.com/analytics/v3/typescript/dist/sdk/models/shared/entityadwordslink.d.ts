import { SpeakeasyBase } from "../../../internal/utils";
import { AdWordsAccount } from "./adwordsaccount";
import { WebPropertyRef } from "./webpropertyref";
/**
 * Web property being linked.
**/
export declare class EntityAdWordsLinkEntity extends SpeakeasyBase {
    webPropertyRef?: WebPropertyRef;
}
/**
 * JSON template for Analytics Entity Google Ads Link.
**/
export declare class EntityAdWordsLink extends SpeakeasyBase {
    adWordsAccounts?: AdWordsAccount[];
    entity?: EntityAdWordsLinkEntity;
    id?: string;
    kind?: string;
    name?: string;
    profileIds?: string[];
    selfLink?: string;
}
