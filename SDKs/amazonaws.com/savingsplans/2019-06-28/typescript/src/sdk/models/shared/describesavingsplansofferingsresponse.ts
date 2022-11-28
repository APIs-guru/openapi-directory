import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SavingsPlanOffering } from "./savingsplanoffering";



export class DescribeSavingsPlansOfferingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=searchResults", elemType: SavingsPlanOffering })
  searchResults?: SavingsPlanOffering[];
}
