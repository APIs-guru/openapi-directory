import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoMlResult } from "./automlresult";
import { SolutionVersionSummary } from "./solutionversionsummary";
import { SolutionConfig } from "./solutionconfig";



// Solution
/** 
 * An object that provides information about a solution. A solution is a trained model that can be deployed as a campaign.
**/
export class Solution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoMLResult" })
  autoMlResult?: AutoMlResult;

  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=datasetGroupArn" })
  datasetGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=latestSolutionVersion" })
  latestSolutionVersion?: SolutionVersionSummary;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=performAutoML" })
  performAutoMl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=performHPO" })
  performHpo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recipeArn" })
  recipeArn?: string;

  @SpeakeasyMetadata({ data: "json, name=solutionArn" })
  solutionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=solutionConfig" })
  solutionConfig?: SolutionConfig;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
