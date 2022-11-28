import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LongTermPricingListEntry } from "./longtermpricinglistentry";



export class ListLongTermPricingResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LongTermPricingEntries", elemType: LongTermPricingListEntry })
  longTermPricingEntries?: LongTermPricingListEntry[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
