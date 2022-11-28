import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SolutionConfig } from "./solutionconfig";
import { TrainingModeEnum } from "./trainingmodeenum";
import { TunedHpoParams } from "./tunedhpoparams";



// SolutionVersion
/** 
 * An object that provides information about a specific version of a <a>Solution</a>.
**/
export class SolutionVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=datasetGroupArn" })
  datasetGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType?: string;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

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

  @SpeakeasyMetadata({ data: "json, name=solutionVersionArn" })
  solutionVersionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=trainingHours" })
  trainingHours?: number;

  @SpeakeasyMetadata({ data: "json, name=trainingMode" })
  trainingMode?: TrainingModeEnum;

  @SpeakeasyMetadata({ data: "json, name=tunedHPOParams" })
  tunedHpoParams?: TunedHpoParams;
}
