import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrainingModeEnum } from "./trainingmodeenum";



export class CreateSolutionVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=solutionArn" })
  solutionArn: string;

  @SpeakeasyMetadata({ data: "json, name=trainingMode" })
  trainingMode?: TrainingModeEnum;
}
