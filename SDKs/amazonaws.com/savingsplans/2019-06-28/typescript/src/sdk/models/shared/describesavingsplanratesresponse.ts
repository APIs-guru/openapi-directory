import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SavingsPlanRate } from "./savingsplanrate";


export class DescribeSavingsPlanRatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=savingsPlanId" })
  savingsPlanId?: string;

  @Metadata({ data: "json, name=searchResults", elemType: shared.SavingsPlanRate })
  searchResults?: SavingsPlanRate[];
}
