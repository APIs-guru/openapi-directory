import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TrainingModeEnum } from "./trainingmodeenum";


export class CreateSolutionVersionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=solutionArn" })
  solutionArn: string;

  @Metadata({ data: "json, name=trainingMode" })
  trainingMode?: TrainingModeEnum;
}
