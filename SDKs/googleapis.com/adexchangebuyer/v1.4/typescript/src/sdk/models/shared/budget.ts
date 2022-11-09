import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Budget
/** 
 * The configuration data for Ad Exchange RTB - Budget API.
**/
export class Budget extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=billingId" })
  billingId?: string;

  @Metadata({ data: "json, name=budgetAmount" })
  budgetAmount?: string;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
