import { SpeakeasyBase } from "../../../internal/utils";
import { Commit } from "./commit";
import { BranchProtection } from "./branchprotection";
export declare class BranchWithProtectionLinks extends SpeakeasyBase {
    html: string;
    self: string;
}
/**
 * Branch With Protection
**/
export declare class BranchWithProtection extends SpeakeasyBase {
    links: BranchWithProtectionLinks;
    commit: Commit;
    name: string;
    pattern?: string;
    protected: boolean;
    protection: BranchProtection;
    protectionUrl: string;
    requiredApprovingReviewCount?: number;
}
