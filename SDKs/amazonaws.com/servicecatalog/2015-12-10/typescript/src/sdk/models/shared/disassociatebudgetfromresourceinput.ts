import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociateBudgetFromResourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BudgetName" })
  budgetName: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;
}
