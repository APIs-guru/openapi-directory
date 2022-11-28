import { SpeakeasyBase } from "../../../internal/utils";
import { CodeScanningAnalysisTool } from "./codescanninganalysistool";
export declare class CodeScanningAnalysis extends SpeakeasyBase {
    analysisKey: string;
    commitSha: string;
    createdAt: Date;
    deletable: boolean;
    environment: string;
    error: string;
    id: number;
    ref: string;
    resultsCount: number;
    rulesCount: number;
    sarifId: string;
    tool: CodeScanningAnalysisTool;
    url: string;
}
