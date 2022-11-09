import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SolutionSummary
/** 
 * Provides a summary of the properties of a solution. For a complete listing, call the <a>DescribeSolution</a> API.
**/
export class SolutionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=solutionArn" })
  solutionArn?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
