import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodeScanningAnalysisTool } from "./codescanninganalysistool";



export class CodeScanningAnalysis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analysis_key" })
  analysisKey: string;

  @SpeakeasyMetadata({ data: "json, name=commit_sha" })
  commitSha: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=deletable" })
  deletable: boolean;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=ref" })
  ref: string;

  @SpeakeasyMetadata({ data: "json, name=results_count" })
  resultsCount: number;

  @SpeakeasyMetadata({ data: "json, name=rules_count" })
  rulesCount: number;

  @SpeakeasyMetadata({ data: "json, name=sarif_id" })
  sarifId: string;

  @SpeakeasyMetadata({ data: "json, name=tool" })
  tool: CodeScanningAnalysisTool;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
