import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BudgetDetail } from "./budgetdetail";
import { PortfolioDetail } from "./portfoliodetail";
import { TagOptionDetail } from "./tagoptiondetail";
import { Tag } from "./tag";


export class DescribePortfolioOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Budgets", elemType: shared.BudgetDetail })
  budgets?: BudgetDetail[];

  @Metadata({ data: "json, name=PortfolioDetail" })
  portfolioDetail?: PortfolioDetail;

  @Metadata({ data: "json, name=TagOptions", elemType: shared.TagOptionDetail })
  tagOptions?: TagOptionDetail[];

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
