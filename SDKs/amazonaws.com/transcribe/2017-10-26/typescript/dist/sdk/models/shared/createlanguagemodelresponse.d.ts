import { SpeakeasyBase } from "../../../internal/utils";
import { BaseModelNameEnum } from "./basemodelnameenum";
import { InputDataConfig } from "./inputdataconfig";
import { ClmLanguageCodeEnum } from "./clmlanguagecodeenum";
import { ModelStatusEnum } from "./modelstatusenum";
export declare class CreateLanguageModelResponse extends SpeakeasyBase {
    baseModelName?: BaseModelNameEnum;
    inputDataConfig?: InputDataConfig;
    languageCode?: ClmLanguageCodeEnum;
    modelName?: string;
    modelStatus?: ModelStatusEnum;
}
