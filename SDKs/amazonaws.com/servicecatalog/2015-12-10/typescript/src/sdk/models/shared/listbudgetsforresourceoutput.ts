import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BudgetDetail } from "./budgetdetail";



export class ListBudgetsForResourceOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Budgets", elemType: BudgetDetail })
  budgets?: BudgetDetail[];

  @SpeakeasyMetadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;
}
