import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SavingsPlanOffering } from "./savingsplanoffering";


export class DescribeSavingsPlansOfferingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=searchResults", elemType: shared.SavingsPlanOffering })
  searchResults?: SavingsPlanOffering[];
}
