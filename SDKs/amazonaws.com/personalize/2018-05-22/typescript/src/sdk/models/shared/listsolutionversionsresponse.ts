import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SolutionVersionSummary } from "./solutionversionsummary";



export class ListSolutionVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=solutionVersions", elemType: SolutionVersionSummary })
  solutionVersions?: SolutionVersionSummary[];
}
