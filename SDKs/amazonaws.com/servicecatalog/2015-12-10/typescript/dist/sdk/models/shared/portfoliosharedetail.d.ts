import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DescribePortfolioShareTypeEnum } from "./describeportfoliosharetypeenum";
/**
 * Information about the portfolio share.
**/
export declare class PortfolioShareDetail extends SpeakeasyBase {
    accepted?: boolean;
    principalId?: string;
    shareTagOptions?: boolean;
    type?: DescribePortfolioShareTypeEnum;
}
