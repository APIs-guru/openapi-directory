import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodeRepositorySummary } from "./coderepositorysummary";



export class ListCodeRepositoriesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CodeRepositorySummaryList", elemType: CodeRepositorySummary })
  codeRepositorySummaryList: CodeRepositorySummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
