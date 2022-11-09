import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateBudgetFromResourceInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=BudgetName" })
  budgetName: string;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;
}
