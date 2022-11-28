import { SpeakeasyBase } from "../../../internal/utils";
import { GitConfig } from "./gitconfig";
/**
 * Specifies summary information about a Git repository.
**/
export declare class CodeRepositorySummary extends SpeakeasyBase {
    codeRepositoryArn: string;
    codeRepositoryName: string;
    creationTime: Date;
    gitConfig?: GitConfig;
    lastModifiedTime: Date;
}
