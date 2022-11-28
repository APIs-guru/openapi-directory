import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Budget
/** 
 * The configuration data for Ad Exchange RTB - Budget API.
**/
export class Budget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=billingId" })
  billingId?: string;

  @SpeakeasyMetadata({ data: "json, name=budgetAmount" })
  budgetAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
