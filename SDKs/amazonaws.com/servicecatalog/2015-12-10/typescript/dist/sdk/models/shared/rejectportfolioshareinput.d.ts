import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PortfolioShareTypeEnum } from "./portfoliosharetypeenum";
export declare class RejectPortfolioShareInput extends SpeakeasyBase {
    acceptLanguage?: string;
    portfolioId: string;
    portfolioShareType?: PortfolioShareTypeEnum;
}
