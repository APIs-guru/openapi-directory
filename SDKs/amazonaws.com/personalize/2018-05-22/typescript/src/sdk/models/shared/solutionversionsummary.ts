import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SolutionVersionSummary
/** 
 * Provides a summary of the properties of a solution version. For a complete listing, call the <a>DescribeSolutionVersion</a> API.
**/
export class SolutionVersionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=solutionVersionArn" })
  solutionVersionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
