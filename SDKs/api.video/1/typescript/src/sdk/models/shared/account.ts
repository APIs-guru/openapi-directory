import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccountQuota
/** 
 * Deprecated
**/
export class AccountQuota extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quotaRemaining" })
  quotaRemaining?: number;

  @SpeakeasyMetadata({ data: "json, name=quotaTotal" })
  quotaTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=quotaUsed" })
  quotaUsed?: number;
}


export class Account extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: string;

  @SpeakeasyMetadata({ data: "json, name=features" })
  features?: string[];

  @SpeakeasyMetadata({ data: "json, name=quota" })
  quota?: AccountQuota;
}
