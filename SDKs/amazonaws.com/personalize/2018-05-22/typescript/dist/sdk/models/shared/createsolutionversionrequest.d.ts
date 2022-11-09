import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TrainingModeEnum } from "./trainingmodeenum";
export declare class CreateSolutionVersionRequest extends SpeakeasyBase {
    solutionArn: string;
    trainingMode?: TrainingModeEnum;
}
