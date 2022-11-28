import { SpeakeasyBase } from "../../../internal/utils";
import { PrincipalTypeEnum } from "./principaltypeenum";
export declare class AssociatePrincipalWithPortfolioInput extends SpeakeasyBase {
    acceptLanguage?: string;
    portfolioId: string;
    principalArn: string;
    principalType: PrincipalTypeEnum;
}
