import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PortfolioShareTypeEnum } from "./portfoliosharetypeenum";
export declare class ListAcceptedPortfolioSharesInput extends SpeakeasyBase {
    acceptLanguage?: string;
    pageSize?: number;
    pageToken?: string;
    portfolioShareType?: PortfolioShareTypeEnum;
}
