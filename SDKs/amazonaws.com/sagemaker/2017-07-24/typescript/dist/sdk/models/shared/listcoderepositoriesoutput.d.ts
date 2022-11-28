import { SpeakeasyBase } from "../../../internal/utils";
import { CodeRepositorySummary } from "./coderepositorysummary";
export declare class ListCodeRepositoriesOutput extends SpeakeasyBase {
    codeRepositorySummaryList: CodeRepositorySummary[];
    nextToken?: string;
}
