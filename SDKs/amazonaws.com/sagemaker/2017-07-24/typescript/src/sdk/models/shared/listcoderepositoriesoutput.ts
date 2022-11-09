import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CodeRepositorySummary } from "./coderepositorysummary";


export class ListCodeRepositoriesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CodeRepositorySummaryList", elemType: shared.CodeRepositorySummary })
  codeRepositorySummaryList: CodeRepositorySummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
