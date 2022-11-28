import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";
export declare enum AutoMergeMergeMethodEnum {
    Merge = "merge",
    Squash = "squash",
    Rebase = "rebase"
}
/**
 * The status of auto merging a pull request.
**/
export declare class AutoMerge extends SpeakeasyBase {
    commitMessage: string;
    commitTitle: string;
    enabledBy: SimpleUser;
    mergeMethod: AutoMergeMergeMethodEnum;
}
