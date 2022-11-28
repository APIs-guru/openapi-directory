import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SavingsPlan } from "./savingsplan";



export class DescribeSavingsPlansResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=savingsPlans", elemType: SavingsPlan })
  savingsPlans?: SavingsPlan[];
}
