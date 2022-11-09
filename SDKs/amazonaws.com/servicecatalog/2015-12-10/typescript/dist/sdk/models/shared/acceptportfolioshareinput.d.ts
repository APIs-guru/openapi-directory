import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PortfolioShareTypeEnum } from "./portfoliosharetypeenum";
export declare class AcceptPortfolioShareInput extends SpeakeasyBase {
    acceptLanguage?: string;
    portfolioId: string;
    portfolioShareType?: PortfolioShareTypeEnum;
}
