import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { ServiceLimit } from "./servicelimit";
import { UsageTypeEnum } from "./usagetypeenum";



// UsageByAccount
/** 
 * Provides data for a specific usage metric and the corresponding quota for an Amazon Macie account.
**/
export class UsageByAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=estimatedCost" })
  estimatedCost?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceLimit" })
  serviceLimit?: ServiceLimit;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UsageTypeEnum;
}
