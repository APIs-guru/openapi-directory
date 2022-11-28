import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SavingsPlanOfferingRate } from "./savingsplanofferingrate";



export class DescribeSavingsPlansOfferingRatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=searchResults", elemType: SavingsPlanOfferingRate })
  searchResults?: SavingsPlanOfferingRate[];
}
