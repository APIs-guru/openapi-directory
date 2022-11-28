import { SpeakeasyBase } from "../../../internal/utils";
import { MlModelTypeEnum } from "./mlmodeltypeenum";
export declare class CreateMlModelInput extends SpeakeasyBase {
    mlModelId: string;
    mlModelName?: string;
    mlModelType: MlModelTypeEnum;
    parameters?: Map<string, string>;
    recipe?: string;
    recipeUri?: string;
    trainingDataSourceId: string;
}
