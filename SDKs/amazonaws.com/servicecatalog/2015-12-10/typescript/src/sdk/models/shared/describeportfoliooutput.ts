import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BudgetDetail } from "./budgetdetail";
import { PortfolioDetail } from "./portfoliodetail";
import { TagOptionDetail } from "./tagoptiondetail";
import { Tag } from "./tag";



export class DescribePortfolioOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Budgets", elemType: BudgetDetail })
  budgets?: BudgetDetail[];

  @SpeakeasyMetadata({ data: "json, name=PortfolioDetail" })
  portfolioDetail?: PortfolioDetail;

  @SpeakeasyMetadata({ data: "json, name=TagOptions", elemType: TagOptionDetail })
  tagOptions?: TagOptionDetail[];

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
