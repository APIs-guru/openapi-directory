import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CodeScanningAnalysisTool } from "./codescanninganalysistool";


export class CodeScanningAnalysis extends SpeakeasyBase {
  @Metadata({ data: "json, name=analysis_key" })
  analysisKey: string;

  @Metadata({ data: "json, name=commit_sha" })
  commitSha: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=deletable" })
  deletable: boolean;

  @Metadata({ data: "json, name=environment" })
  environment: string;

  @Metadata({ data: "json, name=error" })
  error: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=ref" })
  ref: string;

  @Metadata({ data: "json, name=results_count" })
  resultsCount: number;

  @Metadata({ data: "json, name=rules_count" })
  rulesCount: number;

  @Metadata({ data: "json, name=sarif_id" })
  sarifId: string;

  @Metadata({ data: "json, name=tool" })
  tool: CodeScanningAnalysisTool;

  @Metadata({ data: "json, name=url" })
  url: string;
}
