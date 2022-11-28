import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SavingsPlanRate } from "./savingsplanrate";



export class DescribeSavingsPlanRatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=savingsPlanId" })
  savingsPlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=searchResults", elemType: SavingsPlanRate })
  searchResults?: SavingsPlanRate[];
}
