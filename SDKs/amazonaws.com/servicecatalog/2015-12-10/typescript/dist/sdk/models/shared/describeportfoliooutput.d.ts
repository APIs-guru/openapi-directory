import { SpeakeasyBase } from "../../../internal/utils";
import { BudgetDetail } from "./budgetdetail";
import { PortfolioDetail } from "./portfoliodetail";
import { TagOptionDetail } from "./tagoptiondetail";
import { Tag } from "./tag";
export declare class DescribePortfolioOutput extends SpeakeasyBase {
    budgets?: BudgetDetail[];
    portfolioDetail?: PortfolioDetail;
    tagOptions?: TagOptionDetail[];
    tags?: Tag[];
}
