import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SavingsPlan } from "./savingsplan";


export class DescribeSavingsPlansResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=savingsPlans", elemType: shared.SavingsPlan })
  savingsPlans?: SavingsPlan[];
}
