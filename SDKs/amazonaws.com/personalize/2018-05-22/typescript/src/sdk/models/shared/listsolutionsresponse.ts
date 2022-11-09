import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SolutionSummary } from "./solutionsummary";


export class ListSolutionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=solutions", elemType: shared.SolutionSummary })
  solutions?: SolutionSummary[];
}
