import { SpeakeasyBase } from "../../../internal/utils/utils";
import { OrganizationNode } from "./organizationnode";
export declare class DeletePortfolioShareInput extends SpeakeasyBase {
    acceptLanguage?: string;
    accountId?: string;
    organizationNode?: OrganizationNode;
    portfolioId: string;
}
