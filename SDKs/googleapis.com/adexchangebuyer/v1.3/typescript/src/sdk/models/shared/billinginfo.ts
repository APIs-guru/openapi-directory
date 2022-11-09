import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BillingInfo
/** 
 * The configuration data for an Ad Exchange billing info.
**/
export class BillingInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: number;

  @Metadata({ data: "json, name=accountName" })
  accountName?: string;

  @Metadata({ data: "json, name=billingId" })
  billingId?: string[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
