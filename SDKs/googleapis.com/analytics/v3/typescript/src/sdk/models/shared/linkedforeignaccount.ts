import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LinkedForeignAccountInput
/** 
 * JSON template for an Analytics Remarketing Audience Foreign Link.
**/
export class LinkedForeignAccountInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=linkedAccountId" })
  linkedAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=remarketingAudienceId" })
  remarketingAudienceId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=webPropertyId" })
  webPropertyId?: string;
}


// LinkedForeignAccount
/** 
 * JSON template for an Analytics Remarketing Audience Foreign Link.
**/
export class LinkedForeignAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=eligibleForSearch" })
  eligibleForSearch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=internalWebPropertyId" })
  internalWebPropertyId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=linkedAccountId" })
  linkedAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=remarketingAudienceId" })
  remarketingAudienceId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=webPropertyId" })
  webPropertyId?: string;
}
