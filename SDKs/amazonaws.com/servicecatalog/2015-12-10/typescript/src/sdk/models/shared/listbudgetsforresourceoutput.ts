import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BudgetDetail } from "./budgetdetail";


export class ListBudgetsForResourceOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Budgets", elemType: shared.BudgetDetail })
  budgets?: BudgetDetail[];

  @Metadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;
}
