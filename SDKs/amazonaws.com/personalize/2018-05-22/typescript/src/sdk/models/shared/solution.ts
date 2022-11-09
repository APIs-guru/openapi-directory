import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoMlResult } from "./automlresult";
import { SolutionVersionSummary } from "./solutionversionsummary";
import { SolutionConfig } from "./solutionconfig";


// Solution
/** 
 * An object that provides information about a solution. A solution is a trained model that can be deployed as a campaign.
**/
export class Solution extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoMLResult" })
  autoMlResult?: AutoMlResult;

  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=datasetGroupArn" })
  datasetGroupArn?: string;

  @Metadata({ data: "json, name=eventType" })
  eventType?: string;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=latestSolutionVersion" })
  latestSolutionVersion?: SolutionVersionSummary;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=performAutoML" })
  performAutoMl?: boolean;

  @Metadata({ data: "json, name=performHPO" })
  performHpo?: boolean;

  @Metadata({ data: "json, name=recipeArn" })
  recipeArn?: string;

  @Metadata({ data: "json, name=solutionArn" })
  solutionArn?: string;

  @Metadata({ data: "json, name=solutionConfig" })
  solutionConfig?: SolutionConfig;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
