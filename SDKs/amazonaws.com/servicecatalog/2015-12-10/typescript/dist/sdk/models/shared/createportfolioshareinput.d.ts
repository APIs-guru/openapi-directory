import { SpeakeasyBase } from "../../../internal/utils/utils";
import { OrganizationNode } from "./organizationnode";
export declare class CreatePortfolioShareInput extends SpeakeasyBase {
    acceptLanguage?: string;
    accountId?: string;
    organizationNode?: OrganizationNode;
    portfolioId: string;
    shareTagOptions?: boolean;
}
