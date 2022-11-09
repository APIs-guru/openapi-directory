import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdWordsAccount } from "./adwordsaccount";
import { WebPropertyRef } from "./webpropertyref";


// EntityAdWordsLinkEntity
/** 
 * Web property being linked.
**/
export class EntityAdWordsLinkEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=webPropertyRef" })
  webPropertyRef?: WebPropertyRef;
}


// EntityAdWordsLink
/** 
 * JSON template for Analytics Entity Google Ads Link.
**/
export class EntityAdWordsLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=adWordsAccounts", elemType: shared.AdWordsAccount })
  adWordsAccounts?: AdWordsAccount[];

  @Metadata({ data: "json, name=entity" })
  entity?: EntityAdWordsLinkEntity;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=profileIds" })
  profileIds?: string[];

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
