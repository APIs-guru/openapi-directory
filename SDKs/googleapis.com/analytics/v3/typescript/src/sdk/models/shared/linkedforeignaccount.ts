import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LinkedForeignAccount
/** 
 * JSON template for an Analytics Remarketing Audience Foreign Link.
**/
export class LinkedForeignAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=eligibleForSearch" })
  eligibleForSearch?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=internalWebPropertyId" })
  internalWebPropertyId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=linkedAccountId" })
  linkedAccountId?: string;

  @Metadata({ data: "json, name=remarketingAudienceId" })
  remarketingAudienceId?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=webPropertyId" })
  webPropertyId?: string;
}
