import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccountQuota
/** 
 * Deprecated
**/
export class AccountQuota extends SpeakeasyBase {
  @Metadata({ data: "json, name=quotaRemaining" })
  quotaRemaining?: number;

  @Metadata({ data: "json, name=quotaTotal" })
  quotaTotal?: number;

  @Metadata({ data: "json, name=quotaUsed" })
  quotaUsed?: number;
}


export class Account extends SpeakeasyBase {
  @Metadata({ data: "json, name=environment" })
  environment?: string;

  @Metadata({ data: "json, name=features" })
  features?: string[];

  @Metadata({ data: "json, name=quota" })
  quota?: AccountQuota;
}
