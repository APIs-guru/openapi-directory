import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BillingInfo
/** 
 * The configuration data for an Ad Exchange billing info.
**/
export class BillingInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: number;

  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=billingId" })
  billingId?: string[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
