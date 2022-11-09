import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DescribePortfolioShareTypeEnum } from "./describeportfoliosharetypeenum";
export declare class DescribePortfolioSharesInput extends SpeakeasyBase {
    pageSize?: number;
    pageToken?: string;
    portfolioId: string;
    type: DescribePortfolioShareTypeEnum;
}
