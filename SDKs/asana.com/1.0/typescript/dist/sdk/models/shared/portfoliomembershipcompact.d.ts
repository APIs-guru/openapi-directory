import { SpeakeasyBase } from "../../../internal/utils";
import { PortfolioCompact } from "./portfoliocompact";
import { UserCompact } from "./usercompact";
export declare class PortfolioMembershipCompact extends SpeakeasyBase {
    gid?: string;
    portfolio?: PortfolioCompact;
    resourceType?: string;
    user?: UserCompact;
}
