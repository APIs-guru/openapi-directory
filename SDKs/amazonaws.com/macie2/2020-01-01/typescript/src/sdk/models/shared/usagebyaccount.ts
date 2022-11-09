import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CurrencyEnum } from "./currencyenum";
import { ServiceLimit } from "./servicelimit";
import { UsageTypeEnum } from "./usagetypeenum";


// UsageByAccount
/** 
 * Provides data for a specific usage metric and the corresponding quota for an Amazon Macie account.
**/
export class UsageByAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @Metadata({ data: "json, name=estimatedCost" })
  estimatedCost?: string;

  @Metadata({ data: "json, name=serviceLimit" })
  serviceLimit?: ServiceLimit;

  @Metadata({ data: "json, name=type" })
  type?: UsageTypeEnum;
}
