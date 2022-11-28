import { SpeakeasyBase } from "../../../internal/utils";
import { PortfolioCompact } from "./portfoliocompact";
import { UserCompact } from "./usercompact";
export declare class PortfolioMembershipResponse extends SpeakeasyBase {
    gid?: string;
    portfolio?: PortfolioCompact;
    resourceType?: string;
    user?: UserCompact;
}
