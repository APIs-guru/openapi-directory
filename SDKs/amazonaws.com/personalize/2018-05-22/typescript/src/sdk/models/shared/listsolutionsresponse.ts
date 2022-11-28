import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SolutionSummary } from "./solutionsummary";



export class ListSolutionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=solutions", elemType: SolutionSummary })
  solutions?: SolutionSummary[];
}
