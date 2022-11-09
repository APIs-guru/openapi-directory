import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SolutionConfig } from "./solutionconfig";
import { TrainingModeEnum } from "./trainingmodeenum";
import { TunedHpoParams } from "./tunedhpoparams";


// SolutionVersion
/** 
 * An object that provides information about a specific version of a <a>Solution</a>.
**/
export class SolutionVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=datasetGroupArn" })
  datasetGroupArn?: string;

  @Metadata({ data: "json, name=eventType" })
  eventType?: string;

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

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

  @Metadata({ data: "json, name=solutionVersionArn" })
  solutionVersionArn?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=trainingHours" })
  trainingHours?: number;

  @Metadata({ data: "json, name=trainingMode" })
  trainingMode?: TrainingModeEnum;

  @Metadata({ data: "json, name=tunedHPOParams" })
  tunedHpoParams?: TunedHpoParams;
}
