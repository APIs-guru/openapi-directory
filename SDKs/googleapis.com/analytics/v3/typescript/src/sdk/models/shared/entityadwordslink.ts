import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdWordsAccount } from "./adwordsaccount";
import { WebPropertyRef } from "./webpropertyref";



// EntityAdWordsLinkEntity
/** 
 * Web property being linked.
**/
export class EntityAdWordsLinkEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webPropertyRef" })
  webPropertyRef?: WebPropertyRef;
}


// EntityAdWordsLink
/** 
 * JSON template for Analytics Entity Google Ads Link.
**/
export class EntityAdWordsLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adWordsAccounts", elemType: AdWordsAccount })
  adWordsAccounts?: AdWordsAccount[];

  @SpeakeasyMetadata({ data: "json, name=entity" })
  entity?: EntityAdWordsLinkEntity;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=profileIds" })
  profileIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
