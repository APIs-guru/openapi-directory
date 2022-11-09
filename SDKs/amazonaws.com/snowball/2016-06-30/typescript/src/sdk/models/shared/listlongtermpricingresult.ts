import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LongTermPricingListEntry } from "./longtermpricinglistentry";


export class ListLongTermPricingResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=LongTermPricingEntries", elemType: shared.LongTermPricingListEntry })
  longTermPricingEntries?: LongTermPricingListEntry[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
