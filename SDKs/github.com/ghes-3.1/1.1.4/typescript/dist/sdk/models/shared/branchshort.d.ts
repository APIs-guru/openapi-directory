import { SpeakeasyBase } from "../../../internal/utils";
export declare class BranchShortCommit extends SpeakeasyBase {
    sha: string;
    url: string;
}
/**
 * Branch Short
**/
export declare class BranchShort extends SpeakeasyBase {
    commit: BranchShortCommit;
    name: string;
    protected: boolean;
}
