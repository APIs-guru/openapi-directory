import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SolutionSummary
/** 
 * Provides a summary of the properties of a solution. For a complete listing, call the <a>DescribeSolution</a> API.
**/
export class SolutionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=solutionArn" })
  solutionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
