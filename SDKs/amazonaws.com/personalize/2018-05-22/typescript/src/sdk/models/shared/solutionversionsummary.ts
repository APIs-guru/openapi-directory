import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SolutionVersionSummary
/** 
 * Provides a summary of the properties of a solution version. For a complete listing, call the <a>DescribeSolutionVersion</a> API.
**/
export class SolutionVersionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=solutionVersionArn" })
  solutionVersionArn?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
