import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SolutionVersionSummary } from "./solutionversionsummary";


export class ListSolutionVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=solutionVersions", elemType: shared.SolutionVersionSummary })
  solutionVersions?: SolutionVersionSummary[];
}
