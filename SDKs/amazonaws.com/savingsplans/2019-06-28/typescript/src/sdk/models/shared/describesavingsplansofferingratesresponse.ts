import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SavingsPlanOfferingRate } from "./savingsplanofferingrate";


export class DescribeSavingsPlansOfferingRatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=searchResults", elemType: shared.SavingsPlanOfferingRate })
  searchResults?: SavingsPlanOfferingRate[];
}
