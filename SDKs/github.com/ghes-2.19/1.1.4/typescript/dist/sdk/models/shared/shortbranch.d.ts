import { SpeakeasyBase } from "../../../internal/utils";
import { BranchProtection } from "./branchprotection";
export declare class ShortBranchCommit extends SpeakeasyBase {
    sha: string;
    url: string;
}
/**
 * Short Branch
**/
export declare class ShortBranch extends SpeakeasyBase {
    commit: ShortBranchCommit;
    name: string;
    protected: boolean;
    protection?: BranchProtection;
    protectionUrl?: string;
}
